import React from 'react';

export default function MyAds() {
  return (
    <div className="flex min-h-screen bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Sidebar Navigation */}
      <aside className="w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col fixed h-full">
        <div className="p-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">dashboard</span>
          </div>
          <h1 className="text-lg font-bold tracking-tight">AdPortal</h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">grid_view</span>
            <span className="text-sm font-medium">Overview</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 bg-primary/10 text-primary rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">list_alt</span>
            <span className="text-sm font-medium">My Ads</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">favorite</span>
            <span className="text-sm font-medium">Favorites</span>
          </a>
          <a className="flex items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-sm font-medium">Profile Settings</span>
          </a>
        </nav>
        <div className="p-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3 px-2">
            <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMjnImUxetlBRBkrZYkjSlLm6Fx0n67loHVApI7IbORuwkhnzqv7nA_OuIaSUqEf5cVRG9L0W1zH8lGwn9ou5KhPx1St6kDLY6P5bJnz4OVVUVbE0avrZeioRYCo1AFTNkDK8j5ZRzRyDuVM__Btl54ld5VAllHMurZ_K-5zrL7zrMEVeEQDWlty5UxI_nj2wC9l1fYg-hvuPaDu1wCwbeC1NKyrFhCfW55GcK9OjXA0HgCoP57d_NNDJZTmFtq-1vuS5TL76qQDg')" }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate">Alex Johnson</p>
              <p className="text-xs text-slate-500 truncate">Pro Member</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 ml-64 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl font-black tracking-tight">My Ads</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-1">Manage and track your active listings</p>
            </div>
            <button className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-bold transition-all shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined">add</span>
              <span>Create New Ad</span>
            </button>
          </div>

          {/* Summary Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active Ads</p>
                <span className="material-symbols-outlined text-primary">campaign</span>
              </div>
              <p className="text-3xl font-bold">12</p>
              <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>+2 since last week</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Views</p>
                <span className="material-symbols-outlined text-primary">visibility</span>
              </div>
              <p className="text-3xl font-bold">1,240</p>
              <div className="mt-2 text-xs text-emerald-500 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">trending_up</span>
                <span>+15% from yesterday</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Total Leads</p>
                <span className="material-symbols-outlined text-primary">group</span>
              </div>
              <p className="text-3xl font-bold">45</p>
              <div className="mt-2 text-xs text-slate-500 font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-xs">history</span>
                <span>Consistent performance</span>
              </div>
            </div>
          </div>

          {/* Ads Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Ad Details</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Date Published</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Status</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-center">Views</th>
                    <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                  {/* Row 1 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                          <img alt="Vintage film camera on wooden table" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0hv97vSP8CWJOQzGEpW2Vh2Bx6-yDPqThPtsX2vKJY-rcr43soLdqBIq5AKC2N1I1ucpZk9XoMYpI7sbRGFFtv5yd4AfV-CtbEhjXZAMPCoAR9S4wAnEXifoOz-lsjhNgs2gnQDmX4XIhw6hrM0Y482hNUOHpDAEBPuTCRvr54uyl5UtaB6WVVCw78xWxd6kgYJI9FArQcQjCxtRSh9J7hISozQ_wiZvVijvc_A0LBPyqvIfoBKBixFXEZtnSs3kKqyKAD_Hyrkg" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">Vintage Leica M6 Camera</p>
                          <p className="text-xs text-slate-500">Category: Electronics</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Oct 12, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-medium">120</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="View">
                          <span className="material-symbols-outlined text-xl">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 2 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                          <img alt="Modern black mountain bike trail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgMobzOxEWUiAGADVr_rrDUKQHpOCcD58nKythBX8IXn4BIw_9W2idnMmNc9CdfkbQ3raocGiTqJThf4kPvy6grS9aaUz_JD__lWh8xZ4fAM1tYIW29dS-N5FbyrLN2AFTJSANlX75snjxVkKZob1ZleQMa5O2b1OGbDOp3M_O7iAawQTxOJI0YwMdc4rlMveil2vUaHUH-AuuidFSJ6-oeVjqCkMcc3z8sV6saFd1xyMShMeZUVLWDH04tyZvmHPkydL_jBcLosw" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">Specialized Mountain Bike</p>
                          <p className="text-xs text-slate-500">Category: Sports</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Sep 28, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400">
                        Published
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-medium">340</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="View">
                          <span className="material-symbols-outlined text-xl">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  {/* Row 3 */}
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-lg bg-slate-100 dark:bg-slate-800 overflow-hidden flex-shrink-0">
                          <img alt="Dark green velvet luxury sofa" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDXNyY23nbnAjH_0HUvpQ0J1panj9r1KQTy8zNy9U43S-d9lNmWGzrICxouRwar8OpT_BJzW0T1ZJLn_t6E5MZ3oSWGdOs_O9AuBoBIC6VGpgM-DN30XoTOnwXAOCgdHHTiAU9npBYlPR3Ny6gplwry5NMk9xwRaAFKw2LGKLgdtApCGvt5u2w9P1Pe9-UPVbMP7E7TazQ95fibnvlrnGEiptvWz4fo6knsEL6su2cQiWiHSBJ7wR0XaiqsaSbX0hMDK8Iaf_i3Lc" />
                        </div>
                        <div>
                          <p className="font-semibold text-slate-900 dark:text-slate-100">Premium Leather Sofa</p>
                          <p className="text-xs text-slate-500">Category: Furniture</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600 dark:text-slate-400">Sep 15, 2023</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                        Draft
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-center font-medium">0</td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="View">
                          <span className="material-symbols-outlined text-xl">visibility</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-primary transition-colors" title="Edit">
                          <span className="material-symbols-outlined text-xl">edit</span>
                        </button>
                        <button className="p-2 text-slate-400 hover:text-red-500 transition-colors" title="Delete">
                          <span className="material-symbols-outlined text-xl">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex items-center justify-between border-t border-slate-200 dark:border-slate-800">
              <p className="text-sm text-slate-500">Showing 3 of 12 active ads</p>
              <div className="flex gap-2">
                <button className="px-4 py-2 text-sm font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors disabled:opacity-50" disabled>Previous</button>
                <button className="px-4 py-2 text-sm font-medium bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-50 transition-colors">Next</button>
              </div>
            </div>
          </div>

          {/* Create New Ad Bottom CTA */}
          <div className="mt-8 flex justify-center">
            <button className="flex items-center gap-3 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl shadow-primary/30">
              <span className="material-symbols-outlined">post_add</span>
              <span>Post Your First Ad for Free</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
