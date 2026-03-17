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

    const handleSearch = () => {
        dispatch(setSearchQuery(query));
        dispatch(setFilters({ type, priceRange }));
        navigate('/search');
    };

    const { properties } = useSelector(state => state.properties);
    // get top 3 properties to display in featured
    const featuredProperties = properties.slice(0, 3);

  return (
    <div className="relative flex flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
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
                  <input className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white placeholder:text-slate-400" placeholder="City or ZIP" type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
              </div>
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-100 dark:border-slate-800">
                <span className="material-symbols-outlined text-slate-400 mr-2">home</span>
                  <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none" value={type} onChange={(e) => setType(e.target.value)}>
                  <option>Property Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>
              <div className="flex-1 flex items-center px-4">
                <span className="material-symbols-outlined text-slate-400 mr-2">payments</span>
                  <select className="w-full border-none focus:ring-0 bg-transparent py-4 text-slate-900 dark:text-white appearance-none" value={priceRange} onChange={(e) => setPriceRange(e.target.value)}>
                  <option>Price Range</option>
                  <option>$100k - $300k</option>
                  <option>$300k - $600k</option>
                  <option>$600k+</option>
                </select>
              </div>
                <button onClick={handleSearch} className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
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
    </div>
  );
}
