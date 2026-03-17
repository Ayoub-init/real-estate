import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g. API fetching)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="flex flex-col items-center gap-4"
            >
              <div className="bg-white p-4 rounded-2xl shadow-2xl">
                <span className="material-symbols-outlined text-6xl text-primary font-bold">domain</span>
              </div>
              <h1 className="text-4xl font-black tracking-tight">EstateHub</h1>
              <p className="text-white/80 font-medium tracking-widest uppercase text-sm mt-2">Loading your next home...</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {!loading && children}
    </>
  );
}