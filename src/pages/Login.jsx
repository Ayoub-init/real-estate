import React from 'react';

export default function Login() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Left Side: Image */}
      <div className="hidden lg:block lg:w-1/2 relative">
        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-cover bg-center" data-alt="Modern luxury villa with large glass windows at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYjYbWVbMyAWeGigqu2kRcusziF67iudGqbvGQUQP-B3v7j9VwgozNUap4l8ks_k3U6svNpz4sc2qdlwXP-GsR--8-ui0znLQpeBw9w9PphAsfS_31oeRiebIs-MNcCInJXv3QUyLjFCCMB9aLXnj2bfGZ4DvLSOcYlQ4h8HCIe8xutd-D3R5WNz3TSXfoHDqdr2ca_ulDlbUHkHzDCNN0zlqYtMmbVSnk_VS9IhmNgO2UwKownlY9pVO34AtQZ_mC5V50kkYs7oM')" }}>
        </div>
        <div className="absolute bottom-12 left-12 z-20 max-w-md">
          <div className="flex items-center gap-2 mb-6 text-white">
            <span className="material-symbols-outlined text-4xl">domain</span>
            <h1 className="text-3xl font-bold tracking-tight">EstateHub</h1>
          </div>
          <h2 className="text-4xl font-bold text-white leading-tight mb-4">Find your next dream home with us.</h2>
          <p className="text-white/80 text-lg">Access exclusive listings and connect with top-rated agents in your area.</p>
        </div>
      </div>
      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 bg-white dark:bg-background-dark">
        <div className="max-w-md w-full mx-auto">
          {/* Mobile Header */}
          <div className="lg:hidden flex items-center gap-2 mb-10 text-primary">
            <span className="material-symbols-outlined text-3xl">domain</span>
            <h1 className="text-2xl font-bold">EstateHub</h1>
          </div>
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold tracking-tight mb-2">Welcome Back</h2>
            <p className="text-slate-500 dark:text-slate-400">Please enter your details to sign in to your account.</p>
          </div>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2" htmlFor="email">Email Address</label>
              <div className="relative">
                <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" id="email" placeholder="name@example.com" type="email" />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold" htmlFor="password">Password</label>
                <a className="text-xs font-bold text-primary hover:underline" href="#">Forgot password?</a>
              </div>
              <div className="relative group">
                <input className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-slate-400" id="password" placeholder="••••••••" type="password" />
                <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                  <span className="material-symbols-outlined text-xl">visibility</span>
                </button>
              </div>
            </div>
            <div className="flex items-center">
              <input className="w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary" id="remember" type="checkbox" />
              <label className="ml-2 text-sm text-slate-600 dark:text-slate-400" htmlFor="remember">Remember me for 30 days</label>
            </div>
            <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg transition-colors shadow-lg shadow-primary/20" type="submit">
              Sign In
            </button>
            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200 dark:border-slate-700" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white dark:bg-background-dark px-2 text-slate-500">Or continue with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
                <span className="text-sm font-medium">Google</span>
              </button>
              <button className="flex items-center justify-center h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors" type="button">
                <span className="material-symbols-outlined text-xl mr-2">ios</span>
                <span className="text-sm font-medium">Apple</span>
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-slate-600 dark:text-slate-400">
            Don't have an account?
            <a className="font-bold text-primary hover:underline ml-1" href="#">Sign up for free</a>
          </p>
        </div>
        {/* Footer links */}
        <div className="mt-auto pt-10 flex justify-center gap-6 text-xs text-slate-400 pb-8">
          <a className="hover:text-slate-600 dark:hover:text-slate-200" href="#">Privacy Policy</a>
          <a className="hover:text-slate-600 dark:hover:text-slate-200" href="#">Terms of Service</a>
          <a className="hover:text-slate-600 dark:hover:text-slate-200" href="#">Contact Support</a>
        </div>
      </div>
    </div>
  );
}
