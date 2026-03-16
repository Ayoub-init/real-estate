import React from 'react';

export default function PostManagement() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="text-primary size-8 flex items-center justify-center">
              <span className="material-symbols-outlined text-3xl">domain</span>
            </div>
            <h2 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">PropManage</h2>
          </div>
          <div className="flex flex-1 justify-end gap-6 items-center">
            <nav className="hidden md:flex items-center gap-8">
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Dashboard</a>
              <a className="text-primary text-sm font-bold border-b-2 border-primary py-4" href="#">My Listings</a>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Messages</a>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium hover:text-primary transition-colors" href="#">Analytics</a>
            </nav>
            <div className="flex gap-2">
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                <span className="material-symbols-outlined">settings</span>
              </button>
            </div>
            <div className="bg-primary/20 rounded-full size-10 flex items-center justify-center border border-primary/30">
              <img alt="User profile avatar image" className="rounded-full size-10" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9bB1dv6oUWaEE3ZqERoIyNJZayfhQkRAGMj3HESgqXAFUhJUaFI0Zbd3jB3Pwl4YX1f8rKc7X_hboouJ06VyyzM0y-Njq0q7qgZTg-G28TLmXBihkBWER-bF_CXBmOFeLPWxoz89uNjvruhl4pYghROUFFVJlOOggNOVpQuAAudLlLe2bX7IXAiJ52dcjv-WEzvbnLpXG5ScAT3tqWJItPATNTJmlZQ6Pvls-TbRZ-fIXqKkDPobdwaQDyVjIaP2xmnsArmKrf4E" />
            </div>
          </div>
        </header>
        <main className="flex-1 max-w-[1280px] mx-auto w-full p-4 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary" href="#">Listings</a>
                <span className="material-symbols-outlined text-xs">chevron_right</span>
                <span className="text-slate-900 dark:text-slate-100 font-medium">123 Maple Avenue</span>
              </div>
              <div className="flex items-center gap-3 mt-2">
                <h1 className="text-2xl lg:text-3xl font-bold tracking-tight">123 Maple Avenue</h1>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 border border-green-200 dark:border-green-800">ACTIVE</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 h-11 rounded-lg border border-slate-200 dark:border-slate-700 font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                <span className="material-symbols-outlined text-lg">edit</span>
                Edit Listing
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 h-11 rounded-lg bg-primary text-white font-semibold shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
                <span className="material-symbols-outlined text-lg">rocket_launch</span>
                Promote Post
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <div className="relative h-[320px] bg-slate-200 dark:bg-slate-800 group">
                  <img className="w-full h-full object-cover" data-alt="Modern luxury house exterior with maple trees" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIhOxt691ZlwBAQzPXvMHKTi5vBmY_8CqFGhCLnjz-b1BmAwRrXJ3iM3bTDHLg4Bc4XH3tmdaH5bssjnXlXJJoA-sLHGEdPN5HMFRORsskmMwejrT93B_zt7MEk4uhdFPH0QJ_7CHfGgprBuzoWvZfxdYIoVvgPmTTm2kKLshgLdvcBziqFOb7OgT5Q2sCoMjBpBfC7RkRBcJ_ct1S8bfMKWWVvD35lom0ZCVbpuYu4NDJC2maCQkyxcZ-luSXx5f6kyR-3P4Ld1I" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <button className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">photo_library</span>
                      12 Photos
                    </button>
                    <button className="bg-white/90 backdrop-blur text-slate-900 px-3 py-1.5 rounded-lg text-sm font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-sm">videocam</span>
                      Virtual Tour
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-8">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined">bed</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">4</span> Beds
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined">bathtub</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">2.5</span> Baths
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined">square_foot</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">2,450</span> sqft
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined">sell</span>
                      <span className="font-semibold text-slate-900 dark:text-slate-100">$849,000</span> List Price
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Views</span>
                    <span className="text-green-600 text-xs font-bold">+12%</span>
                  </div>
                  <div className="text-2xl font-bold">1,482</div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Leads Generated</span>
                    <span className="text-green-600 text-xs font-bold">+5.2%</span>
                  </div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Conversion Rate</span>
                    <span className="text-slate-500 text-xs font-bold">Stable</span>
                  </div>
                  <div className="text-2xl font-bold">1.62%</div>
                  <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-4">
                    <div className="bg-primary h-1.5 rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <h3 className="font-bold text-lg">Recent Leads</h3>
                  <button className="text-primary text-sm font-semibold hover:underline">View All Leads</button>
                </div>
                <div className="divide-y divide-slate-100 dark:divide-slate-800">
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">JD</div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">John Doe</p>
                        <p className="text-sm text-slate-500">Requested a viewing • 2h ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">mail</span>
                      </button>
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">phone</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 font-bold">AS</div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">Alice Smith</p>
                        <p className="text-sm text-slate-500">Inquired about parking • 5h ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">mail</span>
                      </button>
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">phone</span>
                      </button>
                    </div>
                  </div>
                  <div className="p-4 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 font-bold">MR</div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-slate-100">Michael Ross</p>
                        <p className="text-sm text-slate-500">Highly Interested • 1d ago</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">mail</span>
                      </button>
                      <button className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined text-xl">phone</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Post Lifecycle</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                        <span className="material-symbols-outlined text-sm">check</span>
                      </div>
                      <div className="w-0.5 h-10 bg-primary/30"></div>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Listing Published</p>
                      <p className="text-xs text-slate-500">Oct 12, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                        <span className="material-symbols-outlined text-sm">verified</span>
                      </div>
                      <div className="w-0.5 h-10 bg-primary/30"></div>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Identity Verified</p>
                      <p className="text-xs text-slate-500">Oct 13, 2023</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                        <span className="material-symbols-outlined text-sm">trending_up</span>
                      </div>
                      <div className="w-0.5 h-10 bg-slate-200 dark:bg-slate-700"></div>
                    </div>
                    <div>
                      <p className="font-bold text-sm">Boost Active</p>
                      <p className="text-xs text-slate-500">Ends in 3 days</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400">
                        <span className="material-symbols-outlined text-sm">history_edu</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-sm text-slate-400">Under Contract</p>
                      <p className="text-xs text-slate-500">Upcoming phase</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary/5 dark:bg-primary/10 border border-primary/20 p-6 rounded-xl">
                <h3 className="font-bold text-lg mb-2 text-primary">Get more eyes</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">Boost your post to be featured at the top of search results and social feeds.</p>
                <button className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:brightness-110 transition-all flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">bolt</span>
                  Boost Now
                </button>
              </div>
              <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
                <h3 className="font-bold text-lg mb-4">Location</h3>
                <div className="aspect-video bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden relative border border-slate-200 dark:border-slate-700">
                  <img className="w-full h-full object-cover grayscale opacity-50" data-alt="Simplified map visualization of property location" data-location="Los Angeles" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCX6m6SwITSd1cYKdFKEUt47ycoNy3s1ek6oWzTn412jOybLIBlM5Py50o8vMUe6l-dPawkalHO0w-LDlxnOVCyfRTvbmLmPmeyzD49mfz_R1UEqDeFkkacovpfsV84nDzluNTcwIa3i-_I32BPykQWyBvHzsoikrE1IdPWHhJSxkZLlO9txIKzUExDoNOx1iP6dxPSQRkKj3wGNKJnIvK7vl1xIE9hCpLLqi9oyJE8ChDEizGD-ZtN94r8cgQA4-UaxLAa3tSz_aY" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primary p-2 rounded-full shadow-lg shadow-primary/40 animate-pulse">
                      <span className="material-symbols-outlined text-white">location_on</span>
                    </div>
                  </div>
                </div>
                <p className="text-sm mt-4 font-medium text-slate-600 dark:text-slate-400">Beverly Hills, Los Angeles, CA 90210</p>
              </div>
              <div className="p-4 border-2 border-dashed border-red-200 dark:border-red-900/30 rounded-xl">
                <h4 className="font-bold text-red-600 dark:text-red-400 text-sm mb-2 uppercase tracking-wider">Danger Zone</h4>
                <div className="flex flex-col gap-2">
                  <button className="text-left px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">pause_circle</span>
                    Pause Listing
                  </button>
                  <button className="text-left px-3 py-2 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-red-600 transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">delete</span>
                    Remove Permanently
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-8 px-10">
          <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 opacity-60">
              <span className="material-symbols-outlined text-primary">domain</span>
              <p className="text-xs font-medium">© 2023 PropManage Real Estate Platform</p>
            </div>
            <div className="flex gap-6 text-xs font-medium text-slate-500">
              <a className="hover:text-primary" href="#">Help Center</a>
              <a className="hover:text-primary" href="#">Terms of Service</a>
              <a className="hover:text-primary" href="#">Privacy Policy</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
