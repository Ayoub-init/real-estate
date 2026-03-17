import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setFilters, resetFilters } from '../store/slices/propertiesSlice';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export default function SearchResults() {
    const { filteredProperties, filters } = useSelector(state => state.properties);
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const handleFilterChange = (key, value) => {
        dispatch(setFilters({ [key]: value }));
    };

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen">
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
                <button onClick={() => dispatch(resetFilters())} className="text-primary text-xs font-bold uppercase tracking-wider">Reset</button>
              </div>
              <div className="space-y-6">
                {/* Price Range */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">payments</span>
                        Price Range
                    </label>
                    <select className="w-full p-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-primary" value={filters.priceRange} onChange={(e) => handleFilterChange('priceRange', e.target.value)}>
                        <option value="Any">Any Price</option>
                        <option value="$100k - $300k">$100k - $300k</option>
                        <option value="$300k - $600k">$300k - $600k</option>
                        <option value="$600k+">$600k+</option>
                    </select>
                  </div>
                {/* Property Type */}
                <div>
                    <label className="flex items-center gap-2 text-sm font-semibold mb-3">
                        <span className="material-symbols-outlined text-primary text-lg">home</span>
                        Property Type
                    </label>
                    <div className="space-y-2">
                        <select className="w-full p-2 text-sm border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent focus:ring-primary" value={filters.type} onChange={(e) => handleFilterChange('type', e.target.value)}>
                            <option value="Any">Any Type</option>
                            <option value="House">House</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>
                  </div>
              </div>
            </div>
          </aside>
          {/* Main Results Area */}
          <div className="flex-1">
            {/* Sorting and Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h1 className="text-2xl font-bold">{filteredProperties.length} Results found</h1>
                <p className="text-sm text-slate-500 dark:text-slate-400">Properties matching your criteria</p>
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
                            {filteredProperties.map((prop, index) => (
                                <Link to={`/property/${prop.id}`} key={prop.id} className="group bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl transition-shadow duration-300" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                      <div className="relative h-48 overflow-hidden">
                          <img alt={prop.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src={prop.imageUrl} />
                          {prop.isNew && <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded">New</div>}
                          <button onClick={(e) => { e.preventDefault(); dispatch(toggleFavorite(prop.id)); }} className={`absolute top-3 right-3 bg-white/80 backdrop-blur rounded-full p-1.5 hover:text-red-500 ${favorites.includes(prop.id) ? 'text-red-500' : 'text-slate-900'}`}>
                              <span className={`material-symbols-outlined text-lg`}>favorite</span>
                          </button>
                      </div>
                      <div className="p-4">
                          <div className="flex justify-between items-start mb-2">
                              <h3 className="text-xl font-bold">${prop.price.toLocaleString()}</h3>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-1">{prop.location}</p>
                          <div className="flex items-center gap-4 text-sm font-medium border-t border-slate-100 dark:border-slate-800 pt-4">
                              <div className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-primary text-base">bed</span>
                                  <span>{prop.beds} bd</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-primary text-base">bathtub</span>
                                  <span>{prop.baths} ba</span>
                              </div>
                              <div className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-primary text-base">square_foot</span>
                                  <span>{prop.sqft.toLocaleString()} sqft</span>
                              </div>
                          </div>
                      </div>
                  </Link>
              ))}
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
    </div>
  );
}
