import React from 'react';

export default function SignUp() {
  return (
    <div className="flex min-h-screen flex-col lg:flex-row font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100">
      {/* Left Side: Visual/Inspiration */}
      <div className="relative hidden w-full lg:flex lg:w-1/2 xl:w-7/12">
        <div className="absolute inset-0 bg-cover bg-center" data-alt="Modern luxury villa with a pool at sunset" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAIqjqBCiY1ZwaP1Iko5YUGto2D_jGxxnEVRkvSV8qa0XG5MSe7ORqmmKTYOmuRf78GURjMP7sSfXJgk-O32Iy8Na4mNYwpPbdzMNqg_3TiTVI4CG4UZW8baCStF0kHKrfNEjtZo--Yj94A40DmPGwNUOBcklxQGZb_c-4KB-t3eE-5lXQyl_t5v9ar3ZehWReFWsmAXS0dJL3l7n3voz9AFU4-EuupIHNxWETR-8AKBIW4Tfsa-YNwz-X5vJ7E_kXmSLmgaupk9NM')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative flex h-full w-full flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <div className="bg-primary p-2 rounded-lg">
              <span className="material-symbols-outlined text-white">domain</span>
            </div>
            <span className="text-2xl font-bold tracking-tight">EstateHub</span>
          </div>
          <div className="max-w-xl">
            <h1 className="text-5xl font-black leading-tight mb-6">Start your journey to a new home today.</h1>
            <p className="text-lg text-slate-200">Join over 50,000+ users who found their perfect living space through our exclusive listings and verified agents.</p>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium">
            <div className="flex -space-x-3">
              <img className="h-10 w-10 rounded-full border-2 border-white object-cover" data-alt="User avatar 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB31s7aOlsvCH1TZU6Uba7OBPNnpljIrJBX5lYNsC7c8w5zQxmz5jCzDbMT50fvEoUYCs-us1lrVjAWmoRJcAt-6fdn7fiPoBneY7VRk12Z2MLwTHDsdJhKRudzXh5plSalUhDDU4YoJpn5uJqtqXicG_dj9ZUCsTkHJWrq3riDawQD5XgqG41YthBGGl9GAiVLrN2quqtRcSPSKi9l97ExmqskKyHdVYinWjxZKJBIwBvzhHhdbzkUiTI-04JQdTyONkwPSY-JSM4" />
              <img className="h-10 w-10 rounded-full border-2 border-white object-cover" data-alt="User avatar 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFK7XSiSlnSeqLY4--j3Np5U3UCrXskjc0UYFla6e4KSfVORhXLVyHLyYXiDrvQRyWqtL63z8PxR5RdTuwtdMBtJanUtg_y0kw-UrrMbIQYfn5Psg4xIbC71YAcEAeInK39XrpJihyItf697lswtUvpp-XFxGj7B7i-qIaM-LBgUAJJqjTbKB1obibtwrMBsBWsRyMZGF3_FZehOC3RlOe69R1YUzTJYadOUahwIE1fqJV1zlIZZNlUYOgaLa2mVL-NYAv67PPypw" />
              <img className="h-10 w-10 rounded-full border-2 border-white object-cover" data-alt="User avatar 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQYsjQp5njNTV4j4mNjD8wFHTU6j1rXDI855XkqV_86aiibVbukCHqnxVMzkV8MUZClEPYNQpZ0_irClsYMqZjJh8bYvU3p1hRAg7W5Rk98-KoPr8jfvCqSZFlla27seGwwPg1rTVXuhz_35oBmIaz88g3N35egrOd7Vd3VCuEU7nDuX_GfPJ2anGJPJX1Nh9bsr64YLOKGuqaI5V849rZjCBWcTuMQLkNL6sQ4G6N3hm-3R38-nQKq55GpoAzGjHjbSjan5_Zka8" />
            </div>
            <p>Trusted by homeowners nationwide</p>
          </div>
        </div>
      </div>
      {/* Right Side: Registration Form */}
      <div className="flex w-full flex-col items-center justify-center p-8 lg:w-1/2 xl:w-5/12 bg-white dark:bg-slate-900">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile Logo */}
          <div className="flex items-center gap-2 lg:hidden mb-8">
            <div className="bg-primary p-1.5 rounded-lg">
              <span className="material-symbols-outlined text-white text-xl">domain</span>
            </div>
            <span className="text-xl font-bold tracking-tight dark:text-white">EstateHub</span>
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">Create an account</h2>
            <p className="text-slate-500 dark:text-slate-400">Join the community and find your next property.</p>
          </div>
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              {/* Full Name */}
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300" htmlFor="name">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">person</span>
                  <input className="flex h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-10 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-100" id="name" placeholder="John Doe" required type="text" />
                </div>
              </div>
              {/* Email Address */}
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">mail</span>
                  <input className="flex h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-10 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-100" id="email" placeholder="john@example.com" required type="email" />
                </div>
              </div>
              {/* Phone Number */}
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">call</span>
                  <input className="flex h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-10 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-100" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
                </div>
              </div>
              {/* Password */}
              <div className="grid gap-2">
                <label className="text-sm font-medium leading-none text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">lock</span>
                  <input className="flex h-12 w-full rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-10 py-2 text-sm ring-offset-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:text-slate-100" id="password" placeholder="••••••••" required type="password" />
                  <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200" type="button">
                    <span className="material-symbols-outlined text-xl">visibility</span>
                  </button>
                </div>
              </div>
            </div>
            {/* Terms & Conditions */}
            <div className="flex items-center space-x-2">
              <input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary dark:border-slate-700 dark:bg-slate-800" id="terms" type="checkbox" />
              <label className="text-sm text-slate-600 dark:text-slate-400" htmlFor="terms">
                I agree to the <a className="text-primary hover:underline font-medium" href="#">Terms of Service</a> and <a className="text-primary hover:underline font-medium" href="#">Privacy Policy</a>
              </label>
            </div>
            {/* Action Buttons */}
            <div className="space-y-4">
              <button className="w-full flex items-center justify-center rounded-lg bg-primary px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2" type="submit">
                Create Account
              </button>
              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
                <span className="mx-4 flex-shrink text-xs uppercase text-slate-500 dark:text-slate-500 font-semibold tracking-wider">Or register with</span>
                <div className="flex-grow border-t border-slate-200 dark:border-slate-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700" type="button">
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  Google
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700" type="button">
                  <svg className="h-5 w-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </form>
          <div className="text-center">
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Already have an account?
              <a className="font-bold text-primary hover:underline ml-1" href="#">Log in</a>
            </p>
          </div>
        </div>
        {/* Footer for Desktop */}
        <div className="mt-auto pt-8 text-center text-xs text-slate-400 dark:text-slate-500">
          <p>© 2024 EstateHub Inc. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
