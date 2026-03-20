import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery, setFilters } from '../store/slices/propertiesSlice';

export default function Home() {
    const [query, setQuery] = useState('');
    const [type, setType] = useState('Property Type');
    const [priceRange, setPriceRange] = useState('Price Range');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSearch = (overrideQuery, overrideType, overridePriceRange) => {
        dispatch(setSearchQuery(overrideQuery !== undefined ? overrideQuery : query));
        dispatch(setFilters({
            type: overrideType !== undefined ? overrideType : type,
            priceRange: overridePriceRange !== undefined ? overridePriceRange : priceRange
        }));
        navigate('/search');
    };

    const { properties } = useSelector(state => state.properties);
    // get top 3 properties to display in featured
    const featuredProperties = properties.slice(0, 3);

  return (
    <div className="relative flex flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[600px] h-[75vh] w-full flex items-center justify-center px-6 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-slate-900/50 z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="https://videos.pexels.com/video-files/3241031/3241031-uhd_2560_1440_25fps.mp4"
            />
          </div>
          <div className="relative z-20 w-full max-w-5xl text-center flex flex-col items-center gap-12 pt-16">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-lg leading-tight">
                Find your place <br/> in the world
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium drop-shadow-md max-w-2xl mx-auto">
                Explore thousands of properties for sale or rent across the country.
              </p>
            </div>
            {/* Search Bar Component */}
            <div className="w-full max-w-4xl">
              {/* Tabs */}
              <div className="flex justify-center mb-4">
                  <div className="bg-slate-900/60 backdrop-blur-md p-1 rounded-full flex gap-1 border border-white/20">
                      <button className="px-6 py-2 rounded-full bg-white text-slate-900 font-bold text-sm shadow-sm">Buy</button>
                      <button className="px-6 py-2 rounded-full text-white font-semibold text-sm hover:bg-white/10 transition-colors">Rent</button>
                  </div>
              </div>

              <div className="bg-white dark:bg-slate-900 rounded-full shadow-2xl flex flex-col md:flex-row items-center border border-slate-200 dark:border-slate-800 p-2 md:pl-8">
                <div className="flex-1 w-full flex flex-col py-2 px-4 md:px-0 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Location</label>
                    <input className="w-full border-none focus:ring-0 bg-transparent p-0 text-slate-900 dark:text-white placeholder:text-slate-400 font-medium h-6 outline-none" placeholder="City, neighborhood, or ZIP" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
                </div>
                <div className="flex-1 w-full flex flex-col py-2 px-4 md:px-6 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-800 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Property Type</label>
                    <select className="w-full border-none focus:ring-0 bg-transparent p-0 text-slate-900 dark:text-white appearance-none font-medium h-6 outline-none cursor-pointer" value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Property Type">All Types</option>
                    <option value="House">House</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                  </select>
                </div>
                <div className="flex-1 w-full flex flex-col py-2 px-4 md:px-6 text-left">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200">Price Range</label>
                    <select className="w-full border-none focus:ring-0 bg-transparent p-0 text-slate-900 dark:text-white appearance-none font-medium h-6 outline-none cursor-pointer" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                    <option value="Price Range">Any Price</option>
                    <option value="$100k - $300k">$100k - $300k</option>
                    <option value="$300k - $600k">$300k - $600k</option>
                    <option value="$600k+">$600k+</option>
                  </select>
                </div>
                <button onClick={() => handleSearch()} className="bg-primary hover:bg-primary/90 text-white font-bold size-14 md:size-16 rounded-full transition-all flex items-center justify-center flex-shrink-0 mt-4 md:mt-0 shadow-lg shadow-primary/30 hover:scale-105 active:scale-95">
                  <span className="material-symbols-outlined text-2xl md:text-3xl">search</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Category Quick Links (Airbnb Style) */}
        <div className="w-full max-w-7xl mx-auto px-6 py-8 overflow-x-auto no-scrollbar">
            <div className="flex gap-8 justify-between min-w-max border-b border-slate-200 dark:border-slate-800 pb-4">
                <button onClick={() => { setType('House'); handleSearch(undefined, 'House', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">home</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Houses</span>
                </button>
                <button onClick={() => { setType('Apartment'); handleSearch(undefined, 'Apartment', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">apartment</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Apartments</span>
                </button>
                <button onClick={() => { setType('Villa'); handleSearch(undefined, 'Villa', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">holiday_village</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Villas</span>
                </button>
                <button onClick={() => { setType('Commercial'); handleSearch(undefined, 'Commercial', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">storefront</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Commercial</span>
                </button>
                <button onClick={() => { setType('Land'); handleSearch(undefined, 'Land', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">landscape</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Land</span>
                </button>
                 <button onClick={() => { setType('Property Type'); handleSearch(undefined, 'Property Type', undefined); }} className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary dark:text-slate-400 dark:hover:text-white transition-colors group">
                    <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">key</span>
                    <span className="text-xs font-bold uppercase tracking-wider">New</span>
                </button>
            </div>
        </div>

        {/* Featured Listings */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Featured Listings</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Handpicked properties just for you</p>
            </div>
            <Link to="/search" className="text-primary font-bold flex items-center gap-1 hover:underline">
              View all <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((prop, index) => (
                <Link to={`/property/${prop.id}`} key={prop.id} className="group bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                  <div className="relative h-64 overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src={prop.imageUrl} alt={prop.title} />
                    {prop.isNew ? (
                       <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">New Listing</div>
                    ) : (
                       <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">For Sale</div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">${prop.price.toLocaleString()}</h3>
                    <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                      <span className="material-symbols-outlined text-sm">location_on</span> {prop.location}
                    </p>
                    <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm">
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bed</span> {prop.beds} Bed</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">bathtub</span> {prop.baths} Bath</span>
                      <span className="flex items-center gap-1"><span className="material-symbols-outlined text-lg">square_foot</span> {prop.sqft.toLocaleString()} sqft</span>
                    </div>
                  </div>
                </Link>
            ))}
          </div>
        </section>
        {/* Popular Cities */}
        <section className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Explore Popular Cities</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2">Find your perfect home in these sought-after locations</p>
            </div>
            <Link to="/cities" className="text-primary font-bold flex items-center gap-1 hover:underline">
              All cities <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Link to="/search" onClick={() => { setQuery('Paris'); handleSearch('Paris', undefined, undefined); }} className="group relative overflow-hidden rounded-2xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800 h-64 md:h-80" style={{ animation: `fadeIn 0.5s ease-out 0s both` }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuDk_j_H60al4guOYAJIPe1ZdJiRxUgi1B9nXpQudrTTa5m-8KyEzfFEudCZ_nFH84hTcUrEM2p8oLwDkMzKuaHtEkl4caL2EcztDM84T5e2JnHLRpOUZv2Iaspxpa5j0nvpx-dHjzWSeyNdOUif7ch514bKh2wOK-KuqsSS8lM2UVafQphP4A711AlLOzBaKW4iR4jcqCmSKefWr777OS8MpL7ASxJGOukS0243aFqDsujM5DK7cIbxtanwnT5b5V5dVduPfOlKqlM')" }}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold">Paris</h3>
                  <div className="mt-1 flex items-center justify-between opacity-90 w-full">
                     <span className="text-sm font-medium">1,240 Listings</span>
                     <span className="material-symbols-outlined text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                  </div>
                </div>
              </Link>
              <Link to="/search" onClick={() => { setQuery('Lyon'); handleSearch('Lyon', undefined, undefined); }} className="group relative overflow-hidden rounded-2xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800 h-64 md:h-80 lg:col-span-2" style={{ animation: `fadeIn 0.5s ease-out 0.1s both` }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZh7VFThPrZh9wZLRO3EtQ5TH2w__dOV3cBFqv9dU31hVjHpxXOKrsbzsBNkArb5s4JE-jTX0j_kGsZ0G3g5tTnAN9n3PnubKOwr_uK6yi-OpUq89l_JiEYyeL6XeBSlLPA_92k_D_RikeoxnColpqctmvM-Uxvcv1X2yksQasns-2ib1ST5EkWEojY5TkaZgpPtv-3MuPUdi7agFYK906F8yni26KVzy3joaEBFjZxI-8AuKir22Z9APjn49ZYvvQtcoeXoLAe1w')" }}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold">Lyon</h3>
                  <div className="mt-1 flex items-center justify-between opacity-90 w-full">
                     <span className="text-sm font-medium">850 Listings</span>
                     <span className="material-symbols-outlined text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                  </div>
                </div>
              </Link>
              <Link to="/search" onClick={() => { setQuery('Marseille'); handleSearch('Marseille', undefined, undefined); }} className="group relative overflow-hidden rounded-2xl bg-slate-100 transition-all hover:-translate-y-1 hover:shadow-2xl dark:bg-slate-800 h-64 md:h-80" style={{ animation: `fadeIn 0.5s ease-out 0.2s both` }}>
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{ backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 40%, transparent 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrIKYm3aHSjaJNwhiidbz9drE7MbAl5FHOCKucps2IdN8N-ZCXzKzeuU86f12YY7F_KU25xmSC2vgI37yZTM0Fzod3-sFxeDsjMCu5H5U1GABRKsKx2laMNFvxF768-umuoZX1Wey4seXyO9VgsYGh9FBVqVWOmtAGZ5ytCYHNbQ8vfEWLJ0vfvSejS79iFzNRbDuOqhflFmiSSQS8Q7IwqhhgDzwgmhUadAHlvvdnfaWWPu53hWvaOUDmh3RRl2x17R55xscPZQQ')" }}></div>
                <div className="absolute bottom-0 left-0 p-6 text-white w-full">
                  <h3 className="text-2xl font-bold">Marseille</h3>
                  <div className="mt-1 flex items-center justify-between opacity-90 w-full">
                     <span className="text-sm font-medium">620 Listings</span>
                     <span className="material-symbols-outlined text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">arrow_forward</span>
                  </div>
                </div>
              </Link>
          </div>
        </section>

        {/* How it Works / Publish Ad */}
        <section className="bg-primary/5 dark:bg-primary/10 py-24 mt-12 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tight">Ready to sell your property?</h2>
              <p className="text-slate-600 dark:text-slate-400 mt-4 text-lg">Publishing an ad on EstateHub is simple, fast, and reaches thousands of potential buyers immediately.</p>
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
    </div>
  );
}
