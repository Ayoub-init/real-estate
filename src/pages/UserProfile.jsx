import React from 'react';

export default function UserProfile() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-20 py-3">
          <div className="flex items-center gap-4 text-primary">
            <div className="size-8">
              <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z" />
              </svg>
            </div>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-[-0.015em]">EstateFlow</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <nav className="hidden md:flex items-center gap-9">
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Listings</a>
              <a className="text-slate-700 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Messages</a>
            </nav>
            <div className="flex items-center gap-4">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
              <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 border-2 border-primary" data-alt="User profile thumbnail circular image" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBOQ4syCDKQHa7l4y_P7j9XFZF2Crmmgsr-1ckNv4OKQgVR00rjUAq9j-I8d3K1ropbgmUJaBRg0bY4AK9i-sX7a-5sgEdF5Vv3nULHA50NACannQuZVR-d70PXwe00hzCys01-fVZcriD11lyDqKjNgTSKLO9yH4Nj9-K8qIr2tYW98WzEA49ho6P0Zmdzfb6S0J78zGTMbHOJflVGUGNQsJ0x4_yj4wHNXuTFKQb5zGiyDKTta2g26D3Uyhpn1_IQsziUzVDhq74")' }} />
            </div>
          </div>
        </header>
        <main className="flex-1 px-4 md:px-20 py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-8">
            <aside className="w-full md:w-64 flex flex-col gap-2">
              <div className="flex flex-col gap-4 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12" data-alt="Main user avatar profile picture" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDH5CZy5Dkh4l5lTWAzMrfoDI98HCT29mNtXydl_tyoLHzc3vu8Ne8QJtBuLBbGxEz37BA8rnm3_JrNqQzRM6lGIy3hrUqihVAWMcZhvXqHBUdS5iQbBBJsIZL78CaoMaqBW5IDV6-uF147x0oZ-FwwjVizOiPN4NxrM5ee85Fw8HmzmnPfuJAwqJsNpfE2bqUFukyPjcqux60OY3OgKFXL4ySVAGZfw7wx3SEFF5PFIzBrj1bGsGpvhW4SvdAIbP3FRxMN723Pzx4")' }} />
                  <div className="flex flex-col">
                    <h1 className="text-slate-900 dark:text-white text-sm font-bold">Alex Thompson</h1>
                    <p className="text-slate-500 dark:text-slate-400 text-xs">Premium Agent</p>
                  </div>
                </div>
                <nav className="flex flex-col gap-1">
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary font-medium text-sm" href="#">
                    <span className="material-symbols-outlined text-[20px]">person</span>
                    Profile
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm" href="#">
                    <span className="material-symbols-outlined text-[20px]">home_work</span>
                    My Listings
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm" href="#">
                    <span className="material-symbols-outlined text-[20px]">favorite</span>
                    Saved Items
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm" href="#">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                    Messages
                  </a>
                  <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm" href="#">
                    <span className="material-symbols-outlined text-[20px]">shield</span>
                    Security
                  </a>
                </nav>
              </div>
            </aside>
            <section className="flex-1 flex flex-col gap-6">
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Profile Photo</h2>
                  <p className="text-sm text-slate-500 dark:text-slate-400">This will be displayed on your listings and profile.</p>
                </div>
                <div className="p-6 flex flex-col md:flex-row items-center gap-8">
                  <div className="relative group">
                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-32 ring-4 ring-slate-50 dark:ring-slate-800 shadow-lg" data-alt="Large editable user profile photograph" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAOILEE0LDDfoSBpM-7k-JsOumw0jCmvEUbQL0bvFwsRSKQCwC78Rsf86E391CHr_RZ-XFp-YHnHTvrBi8auwHLHZ6z9uUUPI8aIap0g4gwVlMxxsFEd7kkBnQXtKZmKi54bQ60tlsqsmDKVILuQiXBx06lBA4HaVBir43cGwNiUw0vUTO_-D2Rlhu5kgxw7nzd8RBguv3I7UJwpLCPNiB9hu0fsEvyIZnctj54V57F92m1ysMONXKUHd34LfN6pYSwxkpRrV6KXHM")' }} />
                    <button className="absolute bottom-0 right-0 bg-primary text-white p-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors">
                      <span className="material-symbols-outlined text-sm">photo_camera</span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-3 items-center md:items-start">
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90 transition-all">Upload New</button>
                      <button className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">Remove</button>
                    </div>
                    <p className="text-xs text-slate-400">JPG, GIF or PNG. Max size of 800K</p>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Personal Information</h2>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" defaultValue="Alex Thompson" type="text" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" defaultValue="alex.thompson@estateflow.com" type="email" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone Number</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" defaultValue="+1 (555) 000-1234" type="tel" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Position</label>
                      <input className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" defaultValue="Real Estate Professional" type="text" />
                    </div>
                    <div className="md:col-span-2 flex flex-col gap-2">
                      <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Bio</label>
                      <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" defaultValue="Passionate about helping families find their dream homes in the Seattle area for over 10 years. Specialized in luxury properties and sustainable modern living." rows={4} />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button className="px-6 py-2.5 bg-primary text-white rounded-lg font-bold shadow-md shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all">Save Changes</button>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                <div className="p-6 border-b border-slate-200 dark:border-slate-800">
                  <h2 className="text-xl font-bold text-slate-900 dark:text-white">Account Security</h2>
                </div>
                <div className="p-6 flex flex-col gap-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">lock</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Password</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Last changed 3 months ago</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold hover:bg-white dark:hover:bg-slate-700 transition-colors">Update Password</button>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700">
                    <div className="flex items-center gap-4">
                      <div className="size-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <span className="material-symbols-outlined">security</span>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">Two-Factor Authentication</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">Secure your account with 2FA</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input defaultChecked className="sr-only peer" type="checkbox" />
                        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary" />
                      </label>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <div className="flex flex-col">
                      <p className="text-sm font-bold text-red-500">Deactivate Account</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Permanently delete your account and data</p>
                    </div>
                    <button className="text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">Delete Account</button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 px-6 md:px-20 mt-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined">apartment</span>
              EstateFlow
            </div>
            <p className="text-slate-500 text-sm">© 2024 EstateFlow Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
              <a className="text-slate-400 hover:text-primary transition-colors text-sm" href="#">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
