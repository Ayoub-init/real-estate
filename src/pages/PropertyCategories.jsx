import React from 'react';

export default function PropertyCategories() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="layout-container flex h-full grow flex-col">
        {/* Top Navigation Bar */}
        <header className="flex items-center justify-between whitespace-nowrap border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-6 md:px-10 py-3 sticky top-0 z-50">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">domain</span>
              <h2 className="text-slate-900 dark:text-white text-lg font-bold leading-tight tracking-tight">EstateFinder</h2>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Buy</a>
              <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Rent</a>
              <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Sell</a>
              <a className="text-slate-600 dark:text-slate-300 text-sm font-medium hover:text-primary transition-colors" href="#">Projects</a>
            </nav>
          </div>
          <div className="flex flex-1 justify-end gap-4 items-center">
            <label className="hidden sm:flex flex-col min-w-40 h-10 max-w-64">
              <div className="flex w-full flex-1 items-stretch rounded-lg h-full overflow-hidden">
                <div className="text-slate-500 bg-slate-100 dark:bg-slate-800 flex items-center justify-center pl-4">
                  <span className="material-symbols-outlined text-xl">search</span>
                </div>
                <input className="w-full min-w-0 flex-1 border-none bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-0 placeholder:text-slate-500 pl-2 text-sm font-normal" placeholder="Search locations..." type="text" />
              </div>
            </label>
            <button className="flex items-center justify-center p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10 ring-2 ring-primary/20" data-alt="User profile avatar smiling businessman" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAwasRKBYwWFPcnoQ2PxftyU2QnAmzXPQDHyuPaDfjuIB5WCkMU1y33VJHd6gsnUGnmhniVYWiiYZac3SZiqPPmCb8ogqV93yTu8gPBcwO_XvlOk9WSEPEUZqsgYX4ZmIApfh4huvPG_j-jO2b_wyFdeYbGX5_xu-QMqQvZmLqs3fzQKymxlOWtnuNusgBjLg_zJnuK68aK8GvsMdTJ-xgh6JIXmeQ2wqS9Py66P7Ocg3V-PA26PVdnhhi1fM2SUffPNbhZuZxovA")' }} />
          </div>
        </header>
        <main className="flex flex-1 flex-col items-center">
          <div className="layout-content-container flex flex-col w-full max-w-[1200px] px-6 py-8 md:py-12">
            {/* Header Section */}
            <div className="flex flex-col gap-2 mb-10">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider">
                <span className="material-symbols-outlined text-lg">explore</span>
                <span>Browse our collection</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Property Categories</h1>
              <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Discover your next investment or dream home from over 12,000 listings curated across the most sought-after property types.</p>
            </div>
            {/* Category Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Apartments */}
              <div className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Modern luxury high rise apartment building" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBvdUjw2jwBRss_kgzrA-caxUMvnOZZH81iTem8MmSBBUmxJ9A-lW_zMUhBBT0xZeMN4p0TH6xax90hfAs-HQ7JqRGxbEVSTi4vrzX8lv48es0Tva87jLxKCrFle1t0y3Ccs-bBb0sXU4gpUAjZbUuJVHhW-DRrbzn29kxSoIlqb9yk8YP4Iq8uY4DaMSDJGYc9TqDRKC-W8YU4BVdZRTDq-ysOCZkOS0zNLTJLdMElu6LsmeXuTmHnUyoSmrDV4HMDMWb4jvVBmmY")' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="material-symbols-outlined text-3xl mb-1">apartment</span>
                    <h3 className="text-xl font-bold">Apartments</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    1,240 LISTINGS
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Modern urban living spaces ranging from cozy studios to expansive luxury penthouses.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">Starting from $150k</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Houses */}
              <div className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Beautiful suburban family house with garden" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAklk-guafZH0yghEcIrFESqx57jpVLd9xFCRDibCHzADSEYv-ViTwtK8iOaYrBo-eRvAHeUt-3VwCSqMzCmZ1NQvZ3Je1MhHTDukVhwU_Vh92bTAIjuzAPFLaf-AsOTEld1JnRMBKbX-1smbMlxHoWMelAUquVoRStgfj_ic5S0BNO9dOZVWHWbnJtjWJcOXjBViNHUnBPKJE_OI5KzusYsDBZD3Sq-ZbiI7K1BRq3CWzyxpiYBrpknJBEeqxKdsfAlRsrw1kUryQ")' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="material-symbols-outlined text-3xl mb-1">home</span>
                    <h3 className="text-xl font-bold">Houses</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    850 LISTINGS
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Spacious single-family homes with yards, perfect for growing families and privacy.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">Starting from $250k</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Villas */}
              <div className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Luxury villa with swimming pool and palms" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCb5ucKvZ1jjpf7XUv9VFcXz7l3t1x04qj8wIG3bL_d-502JwAxdQN_7ODD-I6CQhk5ZyXEuJXPXoACVKG4olVgFw4VIZe7h2mMRIHRpO-mXAzFobTKgsn0Rp1SiQ2-YBTprznVhMmCQ5SeWCVCHt5I1Dy1h7yqOq1A7DsP3dhyrZR68zo1B7bZ_-jcSJ5n3Z39Z9VgUTXHd-U9fJAZAPrZ5Scm8LgELbvQxVUzTnzvI-3k9VUT3O78o-dES17MUXc1cRmgT5PKQ9U")' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="material-symbols-outlined text-3xl mb-1">holiday_village</span>
                    <h3 className="text-xl font-bold">Villas</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    430 LISTINGS
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Exclusive high-end residences featuring premium amenities and stunning architecture.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">Starting from $800k</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Commercial */}
              <div className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Modern glass skyscraper commercial building" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDcwUCbtSRZP8N4xAiLFlAKY9yD5RgK7ALv9AnQa09deZs2SpBBMV0-Z9Gjkp54OjoyEkserGLoh4gVHCmvLsBIyOa2uK1OUmzYam-B1beAf7O9PptOzRPQsn59t0YE9DVbW3pfLwkhG1Z95c_fjGl6G1qBICxbDg8gmrPiu-P3jB_bg-BH7R6WaSfJ9i4HUCaL8FfD1nc6IJ9mq9fkZmK8blQIpbItug6YW4vux7Oq7ek-PIiQ5v_4JKD47e_bBEP1MReShyIWcJU")' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="material-symbols-outlined text-3xl mb-1">business_center</span>
                    <h3 className="text-xl font-bold">Commercial</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    210 LISTINGS
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Office spaces, retail shops, and warehouses designed for business growth and ROI.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">High yield potential</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Land */}
              <div className="group cursor-pointer flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800">
                <div className="relative h-60 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Vast green open land field" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAVb3FU5LsiV3HEtGPkFol6C-HQNlzH8LvODNsctefNzXbeGC2M0JfcREljd8zQzgxVaOQVYLMHex-RgWv0_5xRC6IN05hh0DSAH2c0Tn_eOEmgWdmTXeowQfAEd5cqFK6EQzxoRkXgQlmvvSUsNSIla3aAalYRUTM0BwcxGYIwZF-uc6-NPALt310-5X3vS4HDVDzSunSOhS839nGdYfGaGHhVY7GjEdfiBCc3sAtGpHux1OCH7oD_UgyJt9WDHw7l0ddzhBPaQTs")' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="material-symbols-outlined text-3xl mb-1">landscape</span>
                    <h3 className="text-xl font-bold">Land</h3>
                  </div>
                  <div className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                    150 LISTINGS
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Prime plots ready for development, from residential lots to industrial acreage.</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-primary font-semibold text-sm">Investment ready</span>
                    <span className="material-symbols-outlined text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all">arrow_forward</span>
                  </div>
                </div>
              </div>
              {/* Add Category Placeholder */}
              <div className="group cursor-pointer flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 rounded-xl h-full min-h-[360px] hover:border-primary/50 transition-all">
                <div className="flex flex-col items-center gap-4 text-slate-400 group-hover:text-primary">
                  <span className="material-symbols-outlined text-5xl">add_circle</span>
                  <p className="font-bold text-lg">Suggest Category</p>
                  <p className="text-sm text-center px-10">Don't see what you're looking for? Let us know!</p>
                </div>
              </div>
            </div>
            {/* CTA Section */}
            <div className="mt-16 bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              <div className="flex flex-col gap-4 z-10">
                <h2 className="text-white text-3xl font-bold">Need personalized assistance?</h2>
                <p className="text-white/80 text-lg max-w-md">Our real estate experts are here to help you find exactly what you need based on your specific requirements.</p>
              </div>
              <div className="flex gap-4 z-10 w-full md:w-auto">
                <button className="flex-1 md:flex-none bg-white text-primary font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-slate-50 transition-colors">Contact Agent</button>
                <button className="flex-1 md:flex-none border border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors">Learn More</button>
              </div>
            </div>
          </div>
        </main>
        {/* Footer */}
        <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-10 px-6">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-primary opacity-80">
              <span className="material-symbols-outlined text-2xl font-bold">domain</span>
              <h2 className="text-slate-900 dark:text-white text-base font-bold leading-tight tracking-tight">EstateFinder</h2>
            </div>
            <div className="flex gap-8 text-slate-500 dark:text-slate-400 text-sm">
              <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
              <a className="hover:text-primary transition-colors" href="#">Cookie Settings</a>
            </div>
            <p className="text-slate-400 text-sm">© 2024 EstateFinder Inc. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
