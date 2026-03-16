import React from 'react';

export default function AdminOverview() {
  return (
    <div className="relative flex min-h-screen w-full flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="flex items-center justify-between border-b border-primary/10 bg-white dark:bg-slate-900 px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">domain</span>
            <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">EstateAdmin</h2>
          </div>
          <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
            <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
              <div className="text-slate-400 flex bg-slate-100 dark:bg-slate-800 items-center justify-center pl-4 rounded-l-lg border-r-0">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="form-input flex w-full min-w-0 flex-1 rounded-lg text-slate-900 dark:text-white focus:outline-0 focus:ring-1 focus:ring-primary border-none bg-slate-100 dark:bg-slate-800 h-full placeholder:text-slate-500 px-4 rounded-l-none pl-2 text-sm" placeholder="Search data, users..." type="text" />
            </div>
          </label>
        </div>
        <div className="flex flex-1 justify-end gap-4 items-center">
          <div className="flex gap-2">
            <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="flex items-center justify-center rounded-lg size-10 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-primary/10 hover:text-primary transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
          <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-700 mx-2" />
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 dark:text-white">Alex Rivera</p>
              <p className="text-xs text-slate-500">Super Admin</p>
            </div>
            <div className="bg-primary/20 bg-cover bg-center rounded-full size-10 border-2 border-primary/10" data-alt="Profile picture of senior male administrator" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDSbDsh2Cam0L4oktC4G6brFzqeLRKY38lLeRPmifW869gizX1kuNGfjWaTapthlNrslDIx4oG4kZHKeoWK75eInn5AE0bIueFqqoBLxcKXsD7UI82VkCNFj3ng50VQ0kiDiy7QzZnrpp-ad4L0fPxdP0vCcwX3OaFQc-N9l2FooSKzuW7PO0amIylsNPC5k8ELNo1kSwJKHWyTKR-fJx1uBn6vxUI68-zUOgL9OlERQzfOzoY14caqsTl_b1C-JGixuo5-lhjVRcQ")' }} />
          </div>
        </div>
      </header>
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Sidebar Navigation */}
        <aside className="w-full lg:w-64 border-r border-primary/10 bg-white dark:bg-slate-900 p-4 shrink-0">
          <div className="flex flex-col gap-6">
            <div>
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">Main Menu</p>
              <nav className="flex flex-col gap-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-primary text-white font-medium" href="#">
                  <span className="material-symbols-outlined text-xl">dashboard</span>
                  <span className="text-sm">Dashboard</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">group</span>
                  <span className="text-sm">Staff Management</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">real_estate_agent</span>
                  <span className="text-sm">Property Listings</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">report</span>
                  <span className="text-sm">User Reports</span>
                </a>
              </nav>
            </div>
            <div>
              <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-4">System</p>
              <nav className="flex flex-col gap-1">
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">settings</span>
                  <span className="text-sm">Global Settings</span>
                </a>
                <a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium transition-colors" href="#">
                  <span className="material-symbols-outlined text-xl">database</span>
                  <span className="text-sm">API &amp; Integrations</span>
                </a>
              </nav>
            </div>
          </div>
        </aside>
        {/* Main Content Area */}
        <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
          {/* Welcome Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">Admin Overview</h1>
              <p className="text-slate-500 mt-1 font-medium">Welcome back, Alex. Monitor system health and manage your team.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700">
                <span className="material-symbols-outlined text-lg">download</span>
                Export Report
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-semibold hover:bg-primary/90">
                <span className="material-symbols-outlined text-lg">add</span>
                Invite Staff
              </button>
            </div>
          </div>
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500">Total Users</p>
                <span className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg material-symbols-outlined">person</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">12,840</p>
              <div className="mt-2 flex items-center gap-1 text-xs">
                <span className="text-emerald-500 font-bold flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 12%</span>
                <span className="text-slate-400">vs last month</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500">Active Ads</p>
                <span className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg material-symbols-outlined">ads_click</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">3,420</p>
              <div className="mt-2 flex items-center gap-1 text-xs">
                <span className="text-emerald-500 font-bold flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 5%</span>
                <span className="text-slate-400">vs last week</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500">Pending Approvals</p>
                <span className="p-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 rounded-lg material-symbols-outlined">pending_actions</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">156</p>
              <div className="mt-2 flex items-center gap-1 text-xs">
                <span className="text-rose-500 font-bold flex items-center"><span className="material-symbols-outlined text-xs">trending_down</span> 2%</span>
                <span className="text-slate-400">needs attention</span>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-primary/5 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-slate-500">Monthly Revenue</p>
                <span className="p-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 rounded-lg material-symbols-outlined">payments</span>
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">$42,500</p>
              <div className="mt-2 flex items-center gap-1 text-xs">
                <span className="text-emerald-500 font-bold flex items-center"><span className="material-symbols-outlined text-xs">trending_up</span> 8%</span>
                <span className="text-slate-400">current target</span>
              </div>
            </div>
          </div>
          {/* Management Panels Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Staff Management Panel */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 flex flex-col">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex justify-between items-center">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Active Staff Accounts</h2>
                <button className="text-primary text-sm font-semibold hover:underline">View All</button>
              </div>
              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {/* Staff Item */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center" data-alt="Portrait of Sarah Chen, Platform Moderator" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnlow86tq3WAiaUrunayWndjFpmKm8n7qqqQDb_0dxNhwRnmN2HF79TWj3cLY6OxQl1mULIve_35cN8ZnuLQ8K5QXIM_jGW9oc-Chci_TPIQB8-ueMJU1dd5xa5_gOXk50oFNBaG2pPJ4aZ8Xt2eSqO2GRjXmmoKq_D6WL8K_Jn_GnfXL83xWV8gv4rjN-1pjJ3PN1g1FI9h-4Mb4qFuZLUgtzR1Zh_QtHbC_muNqBjJm6Y9Ryj-nU9xSpJFLj5li9-t-fILGRIto')" }} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Sarah Chen</p>
                      <p className="text-xs text-slate-500">Content Moderator</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold uppercase rounded-full">Online</span>
                    <button className="p-1 text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
                {/* Staff Item */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center" data-alt="Portrait of Michael Ross, Senior Support" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBgx-03fHF56wU7tzWY9mS_AeZ6R33o8CrRC_gx0dlBbLNzrgi1PPQT9t5gOEVpFlbmluvE5li0pbOfRRlrWjEPjFJKyXBfg9wpeTWlJxHtS_jxFp__4re8dgaSfVaYNealzRbVeo1C9P58IpCLKmQ2fm5YBSrFNSNWOTrDzXhP-301AsoyhJCc-WcFn981OqkzhFwq04VbRZAzfs-TeqNStf0YpqSOK86d-eoOGJ7nDscJR1_GcKFkjUZ3YUPub6ZPoOe-xfGIShQ')" }} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Michael Ross</p>
                      <p className="text-xs text-slate-500">Support Lead</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded-full">Away</span>
                    <button className="p-1 text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
                {/* Staff Item */}
                <div className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-800 bg-cover bg-center" data-alt="Portrait of Jessica Lee, Sales Admin" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABaSfsoFEqdVZoYd7jT4KxwD3W8FGpIJqZ6fqZaQehKIoLJVreYr59a6ZVKjVJQL306V9gQa8P7f3OxI3C87o8jG0KNMXSPLKo3YP-r6wmNfoyEpSLJaTv1PC96k042ecjjOwNhFkohUbenP9gWO7HOROluE4TeCeVt62eaP9ssDL10Izkx6ixY4yhXKcCt3VRs7_PLyga7nfDN1PU6sTR_sDKnmMgfXsq7gNPELhbpGKNFtlzPDtfsuXr9TyP42LWON07csZ3af4')" }} />
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Jessica Lee</p>
                      <p className="text-xs text-slate-500">Sales Admin</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold uppercase rounded-full">Online</span>
                    <button className="p-1 text-slate-400 hover:text-slate-600">
                      <span className="material-symbols-outlined">more_vert</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800/50 mt-auto rounded-b-xl border-t border-slate-100 dark:border-slate-800">
                <button className="w-full py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-xs font-bold text-slate-600 dark:text-slate-400 hover:border-primary transition-colors">
                  Manage Permissions
                </button>
              </div>
            </div>
            {/* System Configuration Panel */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="p-6 border-b border-slate-100 dark:border-slate-800">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Platform Settings</h2>
              </div>
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Public Registration</p>
                    <p className="text-xs text-slate-500">Allow new users to create accounts without invite.</p>
                  </div>
                  <div className="w-12 h-6 bg-primary rounded-full relative flex items-center px-1">
                    <div className="size-4 bg-white rounded-full absolute right-1" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Manual Ad Verification</p>
                    <p className="text-xs text-slate-500">All new listings must be approved by staff.</p>
                  </div>
                  <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative flex items-center px-1">
                    <div className="size-4 bg-white rounded-full absolute left-1" />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Maintenance Mode</p>
                    <p className="text-xs text-slate-500">Put the front-facing site into maintenance.</p>
                  </div>
                  <div className="w-12 h-6 bg-slate-200 dark:bg-slate-700 rounded-full relative flex items-center px-1">
                    <div className="size-4 bg-white rounded-full absolute left-1" />
                  </div>
                </div>
                <div className="pt-4 space-y-3">
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Site Branding</p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3">
                      <div className="size-8 rounded bg-primary" />
                      <div>
                        <p className="text-[10px] text-slate-400">Primary Color</p>
                        <p className="text-xs font-mono font-bold">#1173D4</p>
                      </div>
                    </div>
                    <div className="p-3 border border-slate-200 dark:border-slate-700 rounded-lg flex items-center gap-3">
                      <div className="size-8 rounded border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-sm">upload_file</span>
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-400">Logo</p>
                        <p className="text-xs font-bold">estate_logo.svg</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Recent Platform Activity Table */}
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Global Activity Log</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500 uppercase text-[10px] font-bold tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Event</th>
                    <th className="px-6 py-4">User</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Time</th>
                    <th className="px-6 py-4" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-emerald-500 text-lg">add_circle</span>
                        <span className="text-sm font-medium">New Listing Created</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">Robert D. (Agent)</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 text-[10px] font-bold rounded-md">PENDING REVIEW</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">2 mins ago</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary text-xs font-bold hover:underline">Inspect</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-500 text-lg">person_add</span>
                        <span className="text-sm font-medium">New User Registration</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">Emily Watson</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 text-[10px] font-bold rounded-md">VERIFIED</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">14 mins ago</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-primary text-xs font-bold hover:underline">Inspect</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-lg">error</span>
                        <span className="text-sm font-medium">Report Filed</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm">System Bot</td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 bg-rose-100 dark:bg-rose-900/30 text-rose-600 text-[10px] font-bold rounded-md">CRITICAL</span>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500">42 mins ago</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-rose-500 text-xs font-bold hover:underline">Review</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
