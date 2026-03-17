import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export default function MyFavorites() {
    const { properties } = useSelector(state => state.properties);
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const favoriteProperties = properties.filter(prop => favorites.includes(prop.id));

  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-20 py-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-2">
              <a className="hover:text-primary" href="#">Home</a>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span>My Account</span>
              <span className="material-symbols-outlined text-xs">chevron_right</span>
              <span className="text-slate-900 dark:text-slate-100 font-medium">Favorites</span>
            </nav>
            <h2 className="text-3xl font-black text-slate-900 dark:text-slate-100">Saved Properties</h2>
            <p className="text-slate-500 dark:text-slate-400 mt-1">You have {favoriteProperties.length} properties saved in your personal collection.</p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900 text-sm font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-lg">sort</span>
              Sort by: Newest
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
              Share List
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoriteProperties.map((prop, index) => (
                <Link to={`/property/${prop.id}`} key={prop.id} className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow" style={{ animation: `fadeIn 0.5s ease-out ${index * 0.1}s both` }}>
                    <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
                        <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url('${prop.imageUrl}')` }} />
                        {prop.isNew && <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">New Listing</div>}
                        <button onClick={(e) => { e.preventDefault(); dispatch(toggleFavorite(prop.id)); }} className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined filled">favorite</span>
                        </button>
                    </div>
                    <div className="p-4">
                        <div className="flex justify-between items-start mb-1">
                            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">${prop.price.toLocaleString()}</p>
                        </div>
                        <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">{prop.title}</p>
                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                            <span className="material-symbols-outlined text-sm">location_on</span>
                            {prop.location}
                        </p>
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-lg">bed</span>
                                <span>{prop.beds}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-lg">bathtub</span>
                                <span>{prop.baths}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <span className="material-symbols-outlined text-lg">straighten</span>
                                <span>{prop.sqft.toLocaleString()} <span className="text-[10px]">sqft</span></span>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        <div className="mt-12 flex flex-col items-center gap-6">
          <div className="flex items-center justify-center gap-1">
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">2</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800">3</button>
            <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">Showing 1 to 8 of 12 properties</p>
        </div>
      </main>
    </div>
  );
}
