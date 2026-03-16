import React from 'react';

export default function UserDashboard() {
  return (
    <div className="relative flex h-auto min-screen w-full flex-col group/design-root overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Navigation Header */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 lg:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <div className="size-8 flex items-center justify-center bg-primary/10 rounded-lg text-primary">
                <span className="material-symbols-outlined">domain</span>
              </div>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">EstateFlow</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-primary text-sm font-semibold leading-normal border-b-2 border-primary pb-1" href="#">Dashboard</a>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Listings</a>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Messages</a>
              <a className="text-slate-600 dark:text-slate-400 text-sm font-medium leading-normal hover:text-primary transition-colors" href="#">Analytics</a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
                <div className="text-slate-500 flex border-none bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg" data-icon="MagnifyingGlass">
                  <span className="material-symbols-outlined text-[20px]">search</span>
                </div>
                <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-0 border-none bg-slate-100 dark:bg-slate-800 placeholder:text-slate-500 px-4 pl-2 text-sm font-normal" placeholder="Search properties..." type="text" />
              </div>
            </label>
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-slate-200 dark:bg-slate-700 border-2 border-white dark:border-slate-800 bg-cover bg-center" data-alt="User profile avatar of a smiling man" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBdhQqHdoYmKwa2_EW3aqFR9P8bhXdybGjRnSdHfQEgmHuLYf8Cw3salgjjDoRq75LmSLFu8OCz3Q_ZHemDardYCc2EF2-Ho6dzTCWHgBJ6Iltx6B6egtGcWOEFYo88RFkXUDQrB74K385QYHFZXmaFbGHx1390J-SF3oMrVF_p3vd8XNuIIgYGXKkp-uiyDSXX9HIQXL6Gx8lstiAmztRI3BYuOK3SniM5qTUODpNkwfw2rcRti9M849oCHZmSAWM5EgsZdSew1fY")' }} />
          </div>
        </header>
        <div className="flex flex-1">
          {/* Sidebar (Desktop) */}
          <aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 gap-6">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-primary">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="text-sm font-semibold">Dashboard</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">home</span>
                <span className="text-sm font-medium">My Properties</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">favorite</span>
                <span className="text-sm font-medium">Saved</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">chat_bubble</span>
                <span className="text-sm font-medium">Messages</span>
                <span className="ml-auto bg-primary text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold">5</span>
              </div>
            </div>
            <hr className="border-slate-200 dark:border-slate-800" />
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer">
                <span className="material-symbols-outlined">settings</span>
                <span className="text-sm font-medium">Settings</span>
              </div>
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer text-red-500">
                <span className="material-symbols-outlined">logout</span>
                <span className="text-sm font-medium">Sign Out</span>
              </div>
            </div>
            <div className="mt-auto p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-xs font-bold text-primary uppercase tracking-widest mb-2">Pro Plan</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">Upgrade for unlimited listings and premium leads.</p>
              <button className="mt-3 w-full bg-primary text-white text-xs font-bold py-2 rounded-lg shadow-sm hover:bg-primary/90 transition-all">Upgrade Now</button>
            </div>
          </aside>
          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark p-6 lg:p-10">
            <div className="max-w-6xl mx-auto space-y-8">
              {/* Welcome Section */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Welcome back, Alex</h1>
                  <p className="text-slate-500 dark:text-slate-400 text-base mt-1">Here's a summary of your property portfolio today.</p>
                </div>
                <button className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-md shadow-primary/20 hover:scale-[1.02] transition-transform">
                  <span className="material-symbols-outlined text-[20px]">add</span>
                  <span>New Listing</span>
                </button>
              </div>
              {/* Quick Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Active Listings</span>
                    <span className="material-symbols-outlined text-primary">other_houses</span>
                  </div>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">12</span>
                    <span className="text-emerald-500 text-sm font-bold flex items-center mb-1"><span className="material-symbols-outlined text-[16px]">trending_up</span>+2</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Saved Properties</span>
                    <span className="material-symbols-outlined text-primary">bookmark</span>
                  </div>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">48</span>
                    <span className="text-emerald-500 text-sm font-bold flex items-center mb-1"><span className="material-symbols-outlined text-[16px]">trending_up</span>+5</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">New Messages</span>
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">5</span>
                    <span className="text-slate-400 text-sm font-bold flex items-center mb-1">Unread</span>
                  </div>
                </div>
                <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Total Views</span>
                    <span className="material-symbols-outlined text-primary">visibility</span>
                  </div>
                  <div className="flex items-end gap-2 mt-2">
                    <span className="text-3xl font-bold text-slate-900 dark:text-white">1.2k</span>
                    <span className="text-rose-500 text-sm font-bold flex items-center mb-1"><span className="material-symbols-outlined text-[16px]">trending_down</span>-1%</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Activity Feed / Recommendations */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recommended Listings</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Property Card 1 */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                        <div className="h-48 w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Modern luxury villa with a pool" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAK_AWOpKFR4Kn30B55WbAOCD565Tejvmem6Igk2Fo5mMKzQSxFM0ZDZZunoNuuqad4500txbnaLDIOciEc3kQ8SD6juvWMmF1brlmG5p1SNCV4D1VanFfilaZJ_q8-OlkNPwt85Z-12IdN1mbbLkY26CQhzgfotBgN4j9mRNaEa89HWBYrU6SsorPEPn999rrNE23MIuxSKsUqgNysva2EztlM1WWyyPh-btt4EZQoFotbOZX8HZdpjMLSZviQTxI0VpeQLep6Nxc')" }}></div>
                          <div className="absolute top-3 left-3 bg-white dark:bg-slate-900 px-2 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">Featured</div>
                          <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">favorite</span>
                          </button>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-slate-900 dark:text-white">Skyline Penthouse</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">Downtown Manhattan, NY</p>
                          <div className="flex items-center gap-4 mt-3 py-3 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">bed</span> 3
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">bathtub</span> 2
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">square_foot</span> 1.8k
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">$1,250,000</span>
                            <span className="text-xs font-medium text-slate-400">2h ago</span>
                          </div>
                        </div>
                      </div>
                      {/* Property Card 2 */}
                      <div className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm group">
                        <div className="h-48 w-full bg-slate-200 dark:bg-slate-800 relative overflow-hidden">
                          <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Traditional family home with large garden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA2nkr5D_xTOIYP9UwIcVksKceUJYuk0E_zb4tzQSlWYvmUpfdgOvB5KhsRuSZ2bHHIu6vLHDKCgtCajsOsAK5-oZ8s4CfhziShXqZkNPkqnCVQLU3_Wf6L3xm6EUUn8jN04tD7I0BzKX-YjvFFgvbg7stbKmWunBKfYgDV-1JIPORu8Du71lxmp9yBSj8SXyctiRYqwiLa2oMiT4nY8yqmcSUwHZsbCycXQEJ8OnB-xW7OKviEjKPzRdTMN3-8_tFo88VSlAqLmdk')" }}></div>
                          <div className="absolute top-3 left-3 bg-white dark:bg-slate-900 px-2 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">New</div>
                          <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                            <span className="material-symbols-outlined text-[18px]">favorite</span>
                          </button>
                        </div>
                        <div className="p-4">
                          <h4 className="font-bold text-slate-900 dark:text-white">Oakwood Heights Family Home</h4>
                          <p className="text-slate-500 dark:text-slate-400 text-xs">Suburban Austin, TX</p>
                          <div className="flex items-center gap-4 mt-3 py-3 border-y border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">bed</span> 4
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">bathtub</span> 3
                            </div>
                            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-400 text-xs">
                              <span className="material-symbols-outlined text-[16px]">square_foot</span> 2.4k
                            </div>
                          </div>
                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-lg font-bold text-primary">$845,000</span>
                            <span className="text-xs font-medium text-slate-400">5h ago</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Sidebar column: Recent Activity */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Recent Activity</h3>
                    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 divide-y divide-slate-100 dark:divide-slate-800">
                      <div className="p-4 flex gap-4">
                        <div className="h-10 w-10 shrink-0 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[20px]">mark_email_unread</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">New message from Sarah</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">"Is the penthouse available for viewing?"</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">15 mins ago</p>
                        </div>
                      </div>
                      <div className="p-4 flex gap-4">
                        <div className="h-10 w-10 shrink-0 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex items-center justify-center text-emerald-600">
                          <span className="material-symbols-outlined text-[20px]">payments</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Price update on saved item</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Lakeside Cottage decreased by $15k.</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">3 hours ago</p>
                        </div>
                      </div>
                      <div className="p-4 flex gap-4">
                        <div className="h-10 w-10 shrink-0 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400">
                          <span className="material-symbols-outlined text-[20px]">person_add</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-slate-900 dark:text-white">Profile viewed 12 times</p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Your listings are gaining traction!</p>
                          <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2">Yesterday</p>
                        </div>
                      </div>
                      <div className="p-3 text-center">
                        <button className="text-xs font-bold text-primary hover:underline transition-all">View All Activity</button>
                      </div>
                    </div>
                  </div>
                  {/* Map Context Widget */}
                  <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
                    <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white">Active Market</h4>
                      <span className="text-xs text-slate-400">Manhattan, NY</span>
                    </div>
                    <div className="h-40 bg-slate-200 dark:bg-slate-800 relative">
                      <div className="absolute inset-0 bg-cover bg-center opacity-70 grayscale" data-alt="Stylized map of New York City Manhattan area" data-location="New York City" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJQQsTa_N7BsMnVYCe_VhWpM2Tr9FkhTuou409RLEqrvE6dnwCukh_ySqgZnbKuAgXRsbCecftZEYKB9gC6hBezjK8w8p5uxuAtI6_pfg5YslRMTn1z5e1-J6T3lt3Dh11H2AvLPPm3YCahgTfB5lOKc4gzZVBun5Tv-NufD-eohTQz_O0gk8E4H6xVBryFP8itFAWRAJSAZJnAjvvKN3E-Sm4WP-tPDMLN2GWcmpwROfOd-QKxP4nWiP2A-dmKD2cAsBNlH0xgx4')" }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-8 w-8 bg-primary/20 animate-pulse rounded-full flex items-center justify-center">
                          <div className="h-3 w-3 bg-primary rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 text-center">
                      <button className="w-full text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/50 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Explore Area Insights</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
