import React from 'react';

export default function BrowseCities() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">EstateFinder</h2>
              </div>
              <nav className="hidden md:flex items-center gap-6">
                <a className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Buy</a>
                <a className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Rent</a>
                <a className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Sell</a>
                <a className="text-sm font-semibold text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-primary transition-colors" href="#">Agents</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <div className="relative hidden sm:block">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                  <span className="material-symbols-outlined text-lg">search</span>
                </span>
                <input className="w-64 rounded-lg border-none bg-slate-100 py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary dark:bg-slate-800 dark:text-white" placeholder="Search cities or areas..." type="text" />
              </div>
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined">person</span>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Header Section */}
        <div className="mb-12 flex flex-col gap-4">
          <nav className="flex items-center gap-2 text-sm text-slate-500">
            <a className="hover:text-primary" href="#">Home</a>
            <span className="material-symbols-outlined text-xs">chevron_right</span>
            <span className="font-medium text-slate-900 dark:text-slate-100">Cities</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Explore France's <span className="text-primary">Best Cities</span>
              </h1>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Discover high-end apartments, historic townhouses, and modern villas across the most vibrant urban centers in France.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-200 dark:ring-slate-700">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Sort: Popular
              </button>
            </div>
          </div>
        </div>
        {/* Cities Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* City Card: Paris */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Eiffel Tower standing tall in Paris landscape" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk_j_H60al4guOYAJIPe1ZdJiRxUgi1B9nXpQudrTTa5m-8KyEzfFEudCZ_nFH84hTcUrEM2p8oLwDkMzKuaHtEkl4caL2EcztDM84T5e2JnHLRpOUZv2Iaspxpa5j0nvpx-dHjzWSeyNdOUif7ch514bKh2wOK-KuqsSS8lM2UVafQphP4A711AlLOzBaKW4iR4jcqCmSKefWr777OS8MpL7ASxJGOukS0243aFqDsujM5DK7cIbxtanwnT5b5V5dVduPfOlKqlM')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Paris</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">1,240 Listings</span>
              </div>
            </div>
            <div className="absolute top-4 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
              Trending
            </div>
          </a>
          {/* City Card: Lyon */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Lyon city view with historic buildings and river" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZh7VFThPrZh9wZLRO3EtQ5TH2w__dOV3cBFqv9dU31hVjHpxXOKrsbzsBNkArb5s4JE-jTX0j_kGsZ0G3g5tTnAN9n3PnubKOwr_uK6yi-OpUq89l_JiEYyeL6XeBSlLPA_92k_D_RikeoxnColpqctmvM-Uxvcv1X2yksQasns-2ib1ST5EkWEojY5TkaZgpPtv-3MuPUdi7agFYK906F8yni26KVzy3joaEBFjZxI-8AuKir22Z9APjn49ZYvvQtcoeXoLAe1w')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Lyon</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">850 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Marseille */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Marseille Old Port with many boats and blue sea" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrIKYm3aHSjaJNwhiidbz9drE7MbAl5FHOCKucps2IdN8N-ZCXzKzeuU86f12YY7F_KU25xmSC2vgI37yZTM0Fzod3-sFxeDsjMCu5H5U1GABRKsKx2laMNFvxF768-umuoZX1Wey4seXyO9VgsYGh9FBVqVWOmtAGZ5ytCYHNbQ8vfEWLJ0vfvSejS79iFzNRbDuOqhflFmiSSQS8Q7IwqhhgDzwgmhUadAHlvvdnfaWWPu53hWvaOUDmh3RRl2x17R55xscPZQQ')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Marseille</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">620 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Bordeaux */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Bordeaux city square with beautiful architecture" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGl5SRiF4nJrSAz-mhAHVDNjOzEKv1kjGpJOLwN4qt9SFj0MTaBNVg-27EMgp14hrkYm3UuxJRrlX_bRXiO6Qdtq7mRRsYDDAr9YK2HOzyqmJEK329OOmSZw14_1PGApoxXorBqrKUXp2qU_duth-FcO_uxIgkz7bXir_6eKm2DakiZGcqFiM6jmX_JCTw77sSuQ3v7ZKc7dMObM6xB1P9HSJq3NfhfkhKwqkp2oqt29bzSKI03op6HL5W1BRz3piag8g4T1uQ0Dw')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Bordeaux</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">490 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Nice */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Nice coastline with Promenade des Anglais" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuALAgWN5aZdv5Z2tcJDgNkI7-q9eEN_7P0IUMgT-VvWrmzVuVJOoIAiJqLkoHKzIrx85P66iQDRkWJVXRMK5WQM6iyJnUT_NIAxUOl6zn2-YHpJfKgg3zC_Mc0JZwN9FIirH3p8lh8h8qaQrXnGtu7vRPfwXpwsaas4xUiDri-WpAk77OY4TXuJi5UtWLAw7ooIyIzZC24tRri6L1U0phWnfyComhV1bW4OYDgimOBTW2dvmqh9KdW0bF4npwjEtHcdCz0DtbiZvYE')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Nice</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">730 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Toulouse */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Toulouse pink city architecture and square" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBGEZ5_7IABfP037xg4Q04ilsFgDdeSV2vtSL0xp47qSjFi4WHhrErzziVWms7FVgaGbagThhMn_J-MqmCIdAFU_7QQpHc7AX-WFSn0egiPOZzTa-BfsTZ2r8feLWnxJR8R3mls9P4lux0P-Uhu-6e5tK6k3nyP15oFCatSuT9CTfp4aMXvSauie4FLEfMTCC7gNWs7t1PLkGrk-eSfzWGSBUYZmhqW1o5l3LhgOLrdGwzq6-DKdl9eM_ZPdLGzeYmi3tHsPw4o_F4')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Toulouse</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">315 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Lille */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Lille Grand Place with traditional Flemish buildings" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIq80QPVYl6bw5n5dMzZlA_CGOQds_2QjmlLXfdUh2zdsUPLzeT7j6ejyhZsgi6S46poILFQGAM_Ay0uQVY_icQmHwelByT7MKVWSaYnvoYgCDpMXiTUvBfNnX1wH4kEr_UkyPrqbM6yHFDAb6w0QUGwvM4ErJ1pCogJvn3lWDqm0arEFVR387LOgSHG3Cbk4hg1j_3e1ufyqh7liglIoaIAzkgHATzaFOZWKssr8QJDDESB4I_RyH6nVuJ-6QgzKz8SyUDYn3eWk')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Lille</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">280 Listings</span>
              </div>
            </div>
          </a>
          {/* City Card: Strasbourg */}
          <a className="group relative overflow-hidden rounded-xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800" href="#">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <div className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110" data-alt="Strasbourg half-timbered houses by the river" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBMRH2EEiVYBbcA8vHWBnKfEq9LKl-DKqi6eux2TuR07ME3_Jzp8mnhM-fUsJTwb5hQv1PRcKxK_E8pUXQ67Qk1j44hdqOUxMPyydA56emKm_veAXhos3qP7RUNlCTnzfbfaxxiNJPjMIaDSuzGqgpHirkt8iOBlCMLkLxU5JNcKglksiDYOdW7SkSbVU8j_AwABC-6Gs_9thD-EvsQj4TsxF6MMdcfHddKX1o4Hcl233awG998sY3a4-gNfSYP7ELX3yqjw_v744s')" }}></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
              <h3 className="text-2xl font-bold">Strasbourg</h3>
              <div className="mt-1 flex items-center gap-1.5 opacity-90">
                <span className="material-symbols-outlined text-sm">apartment</span>
                <span className="text-sm font-medium">345 Listings</span>
              </div>
            </div>
          </a>
        </div>
        {/* More Cities Section */}
        <div className="mt-20 rounded-2xl bg-primary/5 p-8 dark:bg-primary/10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Looking for somewhere else?</h2>
              <p className="mt-2 text-slate-600 dark:text-slate-400">We have listings in over 200 cities across France.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="rounded-full bg-primary px-6 py-3 font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90">View All Cities</button>
              <button className="rounded-full bg-white px-6 py-3 font-bold text-primary shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 dark:bg-slate-800 dark:ring-slate-700">Request a Location</button>
            </div>
          </div>
        </div>
        {/* Map View Toggle (Floating) */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2">
          <button className="flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-xl transition-transform hover:scale-105 dark:bg-primary">
            <span className="material-symbols-outlined">map</span>
            View on Map
          </button>
        </div>
      </main>
      <footer className="mt-auto border-t border-slate-200 bg-white py-12 dark:border-slate-800 dark:bg-background-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 text-primary">
                <span className="material-symbols-outlined text-2xl font-bold">domain</span>
                <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">EstateFinder</h2>
              </div>
              <p className="mt-4 max-w-xs text-sm text-slate-500 dark:text-slate-400">The most trusted luxury real estate platform in France. Finding you the home you've always dreamed of.</p>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Properties</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">Buy Houses</a></li>
                <li><a className="hover:text-primary" href="#">Rent Apartments</a></li>
                <li><a className="hover:text-primary" href="#">Luxury Villas</a></li>
                <li><a className="hover:text-primary" href="#">New Developments</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Company</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                <li><a className="hover:text-primary" href="#">About Us</a></li>
                <li><a className="hover:text-primary" href="#">Agents</a></li>
                <li><a className="hover:text-primary" href="#">Contact</a></li>
                <li><a className="hover:text-primary" href="#">News</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white">Social</h3>
              <div className="mt-4 flex gap-4 text-slate-500 dark:text-slate-400">
                <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
                <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
                <a className="hover:text-primary" href="#"><span className="material-symbols-outlined">forum</span></a>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-100 pt-8 text-center text-xs text-slate-400 dark:border-slate-800">
            <p>© 2024 EstateFinder Real Estate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
