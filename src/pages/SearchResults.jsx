import React from 'react';

export default function SearchResults() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold tracking-tight">EstateFinder</h2>
              </div>
              <div className="hidden md:flex items-center flex-1 min-w-[300px]">
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-symbols-outlined text-slate-400">search</span>
                  </div>
                  <input className="block w-full pl-10 pr-3 py-2 border-none bg-slate-100 dark:bg-slate-800 rounded-lg focus:ring-2 focus:ring-primary text-sm" placeholder="Search by city, neighborhood, or ZIP" type="text" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <span className="material-symbols-outlined">favorite</span>
              </button>
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-1" />
              <button className="flex items-center gap-2 p-1 pr-3 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg">
                <img alt="User profile avatar circle" className="h-8 w-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvLTNDwX0pZGn4uGsF2TMcDV9YBgmmw-21p5FY8yW-v4fQ2rkDgBCs2XMiInHHCP1X3CdlVYyOw29tcd_XU1EKMqYRM3vJTiM6k0IqtRkHU8dd4Mq6X6eYxoJRpK25Yq0e0b5QTMNuuJQzJ4_OzsFJv_GoJBeFpjfWa3fyQIklDXF2SLqNJZy5psS0KdY6vbNODJs7cXIcqWfYX40cnvkASiI0MwfdK3LzDoK-agS_FF3dTacQaq8jk2uePKZlwG0oyAXjp4wCRZQ" />
                <span className="text-sm font-medium hidden sm:block">John Doe</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex mb-6 text-sm font-medium">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a className="text-slate-500 hover:text-primary dark:text-slate-400" href="#">Home</a>
            </li>
            <li>
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                <a className="ml-1 text-slate-500 hover:text-primary dark:text-slate-400 md:ml-2" href="#">Properties</a>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="material-symbols-outlined text-slate-400 text-sm">chevron_right</span>
                <span className="ml-1 text-slate-900 dark:text-slate-100 md:ml-2">Search Results</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Filters</h2>
                <button className="text-primary text-xs font-bold uppercase tracking-wider">Reset</button>
              </div>
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">payments</span>
                    Price Range
                  </label>
                  <div className="space-y-3">
                    <input className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                    <div className="flex justify-between gap-2">
                      <input className="w-1/2 p-2 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent" placeholder="Min" type="text" />
                      <input className="w-1/2 p-2 text-xs border border-slate-200 dark:border-slate-700 rounded bg-transparent" placeholder="Max" type="text" />
                    </div>
                  </div>
                </div>
                {/* Property Type */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">home</span>
                    Property Type
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input defaultChecked className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Single Family</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Condo/Apartment</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Townhouse</span>
                    </label>
                  </div>
                </div>
                {/* Size */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">square_foot</span>
                    Square Footage
                  </label>
                  <select className="w-full p-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-primary">
                    <option>Any Size</option>
                    <option>1000+ sqft</option>
                    <option>2000+ sqft</option>
                    <option>3000+ sqft</option>
                  </select>
                </div>
                {/* Features */}
                <div>
                  <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    Features
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Pool</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Garage</span>
                    </label>
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input className="rounded border-slate-300 text-primary focus:ring-primary" type="checkbox" />
                      <span>Garden</span>
                    </label>
                  </div>
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 mt-4">
                  Apply Filters
                </button>
              </div>
            </div>
          </aside>
          {/* Main Results Area */}
          <div className="flex-1">
            {/* Sorting and Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">1,248 Results found</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Properties for sale in Los Angeles, CA</p>
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                <span className="text-sm font-medium whitespace-nowrap">Sort by:</span>
                <select className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg py-1.5 pl-3 pr-10 text-sm focus:ring-primary">
                  <option>Newest Listings</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Square Footage</option>
                </select>
              </div>
            </div>
            {/* Grid Results */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {/* Property Card 1 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Modern luxury house with pool" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCifg1xUWVuOvMnuU9a6KMIY0alE3gVTw1dhoXdcQw8LOPZzY7OJPH9u1DoBzfC0b4p8Zu9KRIO3K49ggP3HPQhr7fmfugEfPdl641u1KFwsjwoj2_FP0OkGxD8V6HkSj8BTobEyZNvfFhkbMEYwTmYQpF1Lg5Y-YHlF4l3Opws-DWgwloys6D5NTTx5Pt7WWXUAipn-dTlnA3en9T58js1sJuYCnVrcLLMQAcpxmikYjY75aiUd4FoYW7V-pH5HHPOl2LpVRZUQk4" />
                  <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">New Construction</div>
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$1,250,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 2 days ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">842 Ocean View Dr, Malibu, CA 90265</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>4 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>3 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>2,850 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Card 2 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Traditional suburban family home" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGf07NMn0TOLAbx-VrVpIsS7Prz7BBhdhdEwt6ts7iG0FV7AB63tXPQVgzV0gac9S-NaxuFdgpi9nC4gSQK0mMh1q-SaCwbImg2EcU6_AvlTZP0pVkmphZRJ5imCggN96ofJWmIp1-EfcTQr3TuIm5cWhabeGksAQM3Z5NviK2R4TFS1iaKGrLfwMvsAiF2YTjm9JekZNSq4Ilmb5mUbUTz67vRukfUOLNnu1CXq2nbXoIlM7napsxcq1IB-qFXwecp_RqxTXrp0k" />
                  <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">Reduced Price</div>
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$849,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 5 days ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">124 Pinecrest Way, Pasadena, CA 91101</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>3 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>2 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>1,920 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Card 3 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Modern penthouse apartment exterior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7N0uC8aLSosrv5Jx4I1YGsb7gGIWDuSW61VyWTKgMumNrG3mSll6M7qKj7yN37m5UEXJVsCTYPq_gZcfUdh3ATzk8TYoLLinogFikpOloM17vLxwtXZYec-H6xA0TGy-M7TXBktctttMNYCkeQKmZ4YExY6nGg9X2nfiWJo9iswQbAdnomRiyht-N6oI57QHVginqEtQZywt6IkIhC8VxikozyvOCSlaXNKGePD7vtCBDK2AVhEviMZoZfALK76shBvjUxlPY-4g" />
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$2,100,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 1 week ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">2100 Wilshire Blvd #402, Los Angeles, CA 90025</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>2 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>2.5 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>1,650 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Card 4 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Contemporary minimalist villa" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZW5nSEuDgjfVQeFQLaqo3xf0xFQ8ENESGFjmgeUOXakDGXWRs1Q-SyNgOPWK0XmcR1yKPjMC_79A9xr38DFT7Dh53gRu4YrJW8pGrpv4E_rt61m-mRnf6ttIHKXqPHl4mae0QVl5iy3Bqe6WWFp69QZx0ZEhiQ0zNwILEInXaeWV-4Z8mp9r4C5V0-MwAms88oy20n28DUjU6PT8R3FXYnjstw3ba6fFd57WA6sAzrAn2V4KuRQYyXCju3MkvCgbLlVfou3YP45w" />
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$3,450,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 3 days ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">15 Canyon Ridge, Beverly Hills, CA 90210</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>5 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>6 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>4,200 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Card 5 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Large mansion with manicured lawn" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtknktvPikPTIxCVt0kdKSPhP1ItZX7Bg4Sfse6sN1fH2WaBOfGSoBDjmaxVJXlpS81oKLWxlaSkNva814TQazycM6gnOdbaWmLBeT2tdTbwbMfIEcNp-hrTo2Xsq9BOnJwlCcBbqEPhx81jgJsioiQbwKHI4nu1mAeH_YdUSIqTdCgXEh6Ag8oG9X0G2_a3Xscr5_3rH1thT9LLOHWDCPQn9M4CFjCHFhDxWP3l4OsUT0HkVvb1bxe45dS-cB-0_i6S99vkK2pjI" />
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$1,675,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 1 day ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">778 Maple Terrace, Santa Monica, CA 90401</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>4 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>3.5 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>3,100 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Property Card 6 */}
              <div className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <img alt="Modern cottage-style house" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0YIpUjP_ezMmMYXlff_PToNJ7u3U0vHsfTlNpu0OKfHGE5aVwgIXj8rBdMz0PE67ZWfsscC7FHIzg4RyQtOZUi9ZHXuWq4cC4rBaQ8a_NLZJjjvNHv05dv7v4UcADaWe1MGR_aMXFYIFC3ztpL7X5qy-6yNAs13WmrtpGcdp000gZY1mDvBLu6eYd05xUQneiZ1R7E6BesKDPxgWe3aSNGCZoWUPiz-uq3M6sEhMeWJ-fu0Lc8zLISiHNehp0eBeEmXgA_vmDJas" />
                  <button className="absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 text-slate-900 hover:text-red-500">
                    <span className="material-symbols-outlined text-lg">favorite</span>
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">$995,000</h3>
                    <div className="flex items-center text-xs text-slate-500">
                      <span className="material-symbols-outlined text-xs mr-1">schedule</span> 4 days ago
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">45 Larkspur Lane, Burbank, CA 91501</p>
                  <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bed</span>
                      <span>3 bd</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                      <span>2 ba</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                      <span>2,150 sqft</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="flex items-center justify-center mt-12 gap-2">
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button className="w-10 h-10 bg-primary text-white rounded-lg font-bold">1</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">2</button>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">3</button>
              <span className="px-2">...</span>
              <button className="w-10 h-10 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium">24</button>
              <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>
      {/* Map Trigger Floating Button (Mobile Only) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 lg:hidden">
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl">
          <span className="material-symbols-outlined">map</span>
          <span className="font-bold">Show Map</span>
        </button>
      </div>
      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-2 text-primary mb-4">
            <span className="material-symbols-outlined text-2xl font-bold">domain</span>
            <span className="text-slate-900 dark:text-slate-100 text-lg font-bold">EstateFinder</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 EstateFinder Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
