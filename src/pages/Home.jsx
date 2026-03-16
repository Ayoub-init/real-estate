import React from 'react';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl font-bold">domain</span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">EstateHub</h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Home</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Search</a>
            <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Publish an Ad</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:block text-sm font-semibold px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Login</button>
            <button className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-shadow shadow-md">Register</button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] w-full flex items-center justify-center px-6">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/40 z-10" />
            <img alt="Modern luxury villa with pool at sunset" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5zeXYdQuPjL247OYAwxP9RWCnbcbCJ5u3oweGIRsA1uBUAgjgQgzQJR-silJ9E6FUxK7NX8x--EL7TR_EKav4usgK8Cg6pafk7r5UKcP826YKsoaaUfhmyVSgXrtbD0Rq-kOD9SNIGRnb0dLi-gaZv_e9HGoyzmHJxzfl6VFW0YhhjeE_zxHTNRCeiE46Rk3bIcjm8oOpW87RnxxN7UMawk3fkiqeKluJsQzrmWe-N5vhKqLS_lRWxne5zFKLMT5jFh6-iLobHUE" />
          </div>
          <div className="relative z-20 w-full max-w-4xl text-center flex flex-col items-center gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-md">
                Find Your Dream Home
              </h1>
              <p className="text-lg md:text-xl text-white/90 font-medium">
                Discover the best properties in your favorite cities.
              </p>
            </div>
            {/* Search Bar Component */}
            <div className="w-full bg-white dark:bg-slate-900 p-2 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400 mr-2">location_on</span>
                <input className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="City or ZIP" type="text" />
              </div>
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400 mr-2">home</span>
                <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none">
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>
              <div className="flex-1 flex items-center px-4">
                <span className="material-symbols-outlined text-slate-400 mr-2">payments</span>
                <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none">
                  <option>Price Range</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $600k</option>
                  <option>$600k+</option>
                </select>
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">search</span>
                Search
              </button>
            </div>
          </div>
        </section>
        {/* Featured Listings */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Listings</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Handpicked properties just for you</p>
            </div>
            <a className="text-primary font-bold flex items-center gap-1 hover:underline" href="#">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <img alt="White contemporary house with large glass windows" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlqkeQeggXC-ZhQFZCxzCLJu_tZaKDP2GsAWPHkkHYBy8x0KqS5nkEZxGE_B02wTc-3MPjJCCqnJSbtZ_S6QioOZTD4QoYe6WYLEA2m_yuiKC4WVVLXylnUG49crY_cEsN7sN7ihJIgb9w6s9ugvtL3XjmtM6bJpBvcv8llXguMVEV3JDv91mqWTgqILjOzRZ4n4RGfrcMWs51gioszfr7COiZ6XVOy6sda1NTatfrVvtPI0omwBUUAm4pKyPZPA9V0MSGewA_GxI" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$850,000</h3>
                <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-sm">location_on</span> Beverly Hills, CA
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 3 Bed</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 2 Bath</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 2,100 sqft</span>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <img alt="Luxury home with swimming pool and garden" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQaOUL31GLB3HkHINIEWR5b6km6eVbFDH0JWt3B3myTZNRo3V49Z9inypN92mDzhGLnw1OVCoHyUL-uyehPuLpQy4wI8KpFeRPOJH7bYVuT-7-C8c_Tdp1P8ktQ5MbXKg5bwVBOMqd3BfEYhONtieeEfxmELrSVKljpwn6T5TAYifr5PH86Mca3H6unE2UfVIeamgGF2p-vKenbkitKOTdWlfzRDDVUaAcVmr_hDS5DRa4vplc3pDoF6cU90g3zM_voVxRIuCoT5M" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">For Sale</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$1,200,000</h3>
                <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-sm">location_on</span> Austin, TX
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 4 Bed</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 3 Bath</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 3,500 sqft</span>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700">
              <div className="relative h-64 overflow-hidden">
                <img alt="Charming suburban house with front yard" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMjuD9f6iGaSXP2FwrBpdkx5gVnk43gPwe5uojIOY5gfs1uvXJ38G1gY81NUI5VwQucWzfokrDPYx2xlC7zgtMcg0-quRb33MCdwKoWUoIaNlpU71NziJlixdcll3LVH28UZzHelcojAz-w_vTDizFf5_nVLUC6AFqo_v5DjdZTACO0b2AtrKrx2fQkZQ9Ytd2qkbIUo7QNo9-kkI3hN6vUqcZXY9zE08DTfkHxkWkngrEC-OUCo-0MOGuMcf3f4e-6n8hHzEZxOE" />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">New Listing</div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">$540,000</h3>
                <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                  <span className="material-symbols-outlined text-sm">location_on</span> Orlando, FL
                </p>
                <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> 2 Bed</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> 2 Bath</span>
                  <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> 1,400 sqft</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* How it Works / Publish Ad */}
        <section className="bg-primary/5 dark:bg-primary/10 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Ready to sell your property?</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4">Publishing an ad on EstateHub is simple, fast, and reaches thousands of potential buyers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">account_circle</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Create Account</h3>
                <p className="text-slate-600 dark:text-slate-400">Sign up in seconds and manage all your listings from a single dashboard.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">add_photo_alternate</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Post Your Ad</h3>
                <p className="text-slate-600 dark:text-slate-400">Upload photos, details, and set your price. It only takes 5 minutes.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
                  <span className="material-symbols-outlined text-3xl">handshake</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get Offers</h3>
                <p className="text-slate-600 dark:text-slate-400">Buyers will contact you directly through our secure messaging system.</p>
              </div>
            </div>
            <div className="mt-16 text-center">
              <button className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-4 rounded-xl shadow-lg transition-all">
                Publish an Ad Now
              </button>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-white dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1 space-y-6">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">domain</span>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">EstateHub</h2>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
              The world's leading real estate platform for buyers, sellers, and agents. We make finding your next home effortless.
            </p>
            <div className="flex gap-4">
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all" href="#">
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Career</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
              <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
              <li><a className="hover:text-primary transition-colors" href="#">Guides</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Newsletter</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400">Get the latest property deals in your inbox.</p>
            <div className="flex gap-2">
              <input className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary" placeholder="Your email" type="email" />
              <button className="bg-primary text-white p-2 rounded-lg"><span className="material-symbols-outlined">send</span></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
          <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 EstateHub Real Estate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
