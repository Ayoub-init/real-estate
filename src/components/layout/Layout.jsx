import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
};

export default function Layout() {
    const location = useLocation();
    
    // Pages that have their own custom layouts without the main header/footer
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
    const isDashboardPage = location.pathname.includes('/dashboard') || location.pathname.includes('/admin') || location.pathname.includes('/my-ads') || location.pathname.includes('/manage') || location.pathname.includes('/profile');

    if (isAuthPage || isDashboardPage) {
        return (
             <AnimatePresence mode="wait">
                 <motion.div
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="min-h-screen flex flex-col"
                >
                    <Outlet />
                 </motion.div>
             </AnimatePresence>
        )
    }

    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden">
            <Navbar />
            <AnimatePresence mode="wait">
                <motion.main
                    key={location.pathname}
                    variants={pageVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="flex-1"
                >
                    <Outlet />
                </motion.main>
            </AnimatePresence>
            <Footer />
        </div>
    );
}