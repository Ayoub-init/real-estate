import React from 'react';

export default function MyFavorites() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-display">
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-4 lg:px-20 py-3">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-3xl font-bold">domain</span>
              <h1 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">EstateFinder</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Buy</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Rent</a>
              <a className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary text-sm font-medium transition-colors" href="#">Sell</a>
              <a className="text-primary text-sm font-bold border-b-2 border-primary pb-1" href="#">Favorites</a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <label className="hidden sm:flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg px-3 py-2 w-64">
              <span className="material-symbols-outlined text-slate-500 text-xl">search</span>
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full placeholder:text-slate-500" placeholder="Search saved items..." type="text" />
            </label>
            <button className="p-2 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="size-9 rounded-full bg-primary/10 border border-primary/20 bg-cover bg-center" data-alt="User profile avatar placeholder" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHNrxUP4wMXy3S3Y2ZODyySGQdQJmIK90Xf1dxgwOcxbfUJ0rXbGkRuqNFa52YOeYixQvkF3avk7naiEhEDhhKA7DjNdLuoQIlrTtv3MtQOiCyMpBCX2IuBJlVeM7c2ww76rbB0Unl-_n_GIL0-dvY0qF_PdS1ZINqxhsSSy8NhzpPRR2mwJt6rRG9YyWe3GYDR65NHYoiIZhGxWwLm16LQpETrIzQvDnCVS7TkZ-ArvXUwyhB1dVUsZLVDECS_qBXJG1hQaYJCxk')" }}></div>
          </div>
        </div>
      </header>
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
            <p className="text-slate-500 dark:text-slate-400 mt-1">You have 12 properties saved in your personal collection.</p>
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
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Modern minimalist villa with large glass windows" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB5JCSMUaNQyCjpq4EEfpGKJlusdKZjc9DFcVqLeL35iEGa5LXXSEox6ziQ--1_-4rp0IKwt8CPSdZpKrKSK4L-uO6-xl3l14QYzFI-Dk11c8k7lNcLuRIb3h-y_N8wT3Pc_KHQbDDxQSm2Zn_HE0h3q3UpRjeX5JDNgBAS-BsM90omSvvEIU5Xba88jo5CdOx4RIpIXGT72h_3ARYKYZN1oI8EXfGRK7tSbmvc85lSFZz_kSMZ1Lxi5oP7XIT9wFSfP5ixI-u11Aw')" }}></div>
              <div className="absolute top-3 left-3 bg-white/90 dark:bg-slate-900/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-primary">New Listing</div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$1,250,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Modern Skyline Villa</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Malibu, CA 90265
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>3,200 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Industrial style loft with exposed brick walls" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBDg8Oemsi6jhYBGPr-VFQoeFwGD8HofoMxnmdYFhNIHWsZaO7Rh7VnPxMh3O4t8ggjCMy8PWr8cicjoeuB8H6Uo8BuUPzYJesLiygtyzEiAfBMCKKT_pJ1FDT_gSdyVBt8uNU1ZGY_wcTdBZ9D6OFdQQrDoDCEexE0IX1F7ezKsOYlXXAR5hO-2aivVMI_GJRULDqI4GbOflTt-oFAZDM8wSDrPG3OAm6CXNz-jpc2a3FRGxjFUod8xakdZzj2B7tSDhQ6V9UGxsI')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$850,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Urban Industrial Loft</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Brooklyn, NY 11201
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>2</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>1,550 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Small wooden cabin in the woods" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCgW1BnSHqiz_wBSNW5xdPIEURLjNJAhSOLm86OdZqaEh3Go1Wre7ywgqxDhqQ6Iiet0Sz-eo-hqSUQRKkXwgp-RE01FxkWrBJ7qP-KG9v4ZNvo88Mw3SUbs7_q16dvlmFMTvTr9fXV959IjmNpF5_ywCAuzc5vqIwZCimjKDIRUB7nOOvsBKdXMKBlp8RDBRLxLcsCc1Foiiw-ZW5_85jfb-vSJDUihK1njgmhH3Ew878vFtqYdU5z74Ak6-49twF8ZLBeI6W-R6A')" }}></div>
              <div className="absolute top-3 left-3 bg-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-white">Price Drop</div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$450,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Rustic Forest Retreat</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Asheville, NC 28801
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>1</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>1,100 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Beachfront luxury apartment with balcony" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBS33CcKW__v5Jf1rNMtNFpYQNHMf1euB5s69b1NnUF5nYN-FzQ4pnxOyIq0ctfmD8crh7nj1gOrtsrSPdwmhQBIY_GrprDUyUtWvej_KrmIwkwZgRL_VP-ObDXtF4kaf2duusWfkL76kbHdEWaxvuobDLpawApftku7K3pLGbks-OnAnaCUhJWGyCqLQE3Pb5ZXos452nztG5QChfREPJG5-u-WCA631Kerw8Pp2JxFq6ZfXo6fdCOFMIH4XFWwoWnErUiNcLuU7w')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$3,200,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Beachfront Luxury Suite</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Miami, FL 33139
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>5</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>4,500 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Traditional brick family home with front lawn" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBAsSdz_f_fOZEcHiLfJTvemzq42rVm4NmqeC71Pwjjzd8TZDXObecy0-q1P4l3y9v9zBuSztwQHGPeqyV-Izy4-xjsiZwsHMmbsPKAokGwnvzvpPjJQEwbCRsw-hPErjJUoGx4ZyixsL22ol6KEONsBBNoGVOrEF1Ox0_r8vDLWB3dDsvHPWgIt3Nki_J3WvWeU1Xa7-FePgGDHELZgA_gPuqsndXfGtz4g-0PoCi9aOFVRbhpt6N47Js_Gvs41P5P8qiJCM0V8EY')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$625,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Family Suburban House</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Austin, TX 78701
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>4</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>2.5</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>2,400 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Ultra modern concrete house in desert" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkG-wAkwcorYGDwoElvDQgBld2wZPPgu1jUpYMy0jlbU8oSpSCtyyDM7MMQJ337agkVaMWv0CV8AVHJshFNN6dtZ9OotGwPG7UWwCihwIkjKqzzpomJtcQn4s6RG8WVA5yS5CrZ77JBiQZIACvEaSR1RZdz8R3DHFpVNcqIK5jLTQvMQS80G2bxVjBgBDmso7JsJe69r5CH-Rz1zAZD5TTgLbL6G0SEs-5sB-02-ms8LB_zkCf5Kx6yv-A5FWzDRdPvF05_hTDDU4')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$975,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Desert Modern Sanctuary</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Scottsdale, AZ 85251
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>2,100 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Bright penthouse with city views" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuANX8GievyCQkfJQpdQ0MowI2-hDoqCEBtduue8LFXbT5cNpjW0rv6vfcWOY7pTLpIeNWh139kWO3YroV32eY131ImbsytkU7XLVePelLQI8b44a8_HXuKECn603faSbHlS-xl46Hyg3h5IPN_1djwmqvpIbLQ0CcIFIztiEjHV2QJBTbfueu1vXqFRMTfdN_a6tXeYnNkafRwWPdo8wHDBmttz-w4pnMpzKv9sn2u4Ip-fqXjTtq00cV2JcYyX8fKkHZNhYwTE1Lg')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$1,890,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Skyline Terrace Penthouse</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Chicago, IL 60611
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>3</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>3.5</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>2,800 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
          <div className="group flex flex-col bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] w-full bg-slate-200 dark:bg-slate-800">
              <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Historical mansion with ivy walls" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrbsTDpg4B8ir6Cy_i3-OrfXoXUsJM6GI6Z5LExV5mTE1tGt28zQ5QdwPi4658HwdqTLMm4_88Jfvj0EjNraCHUwOSM6yMINt4o0mDKEYDejd8mwpUuwC2ORZbrJCcbXgPdfUpmramnmYI-fypyudaGrT95XzuVUOgfVY3wLNOZWTRrmvcDvmuM55SmEa0JrYh7RoTOeewudZKhiXXq1OgYFpZqbfWx_GjkJ4rZ-BFBndXtWzHOigMHCTRmDGPE3W1z0g1S9-FZBg')" }}></div>
              <button className="absolute top-3 right-3 size-9 flex items-center justify-center bg-white dark:bg-slate-800 text-red-500 rounded-full shadow-lg hover:scale-110 transition-transform">
                <span className="material-symbols-outlined filled">favorite</span>
              </button>
            </div>
            <div className="p-4">
              <div className="flex justify-between items-start mb-1">
                <p className="text-xl font-bold text-slate-900 dark:text-slate-100">$2,450,000</p>
              </div>
              <p className="text-base font-semibold text-slate-800 dark:text-slate-200 truncate">Victorian Heritage Estate</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                <span className="material-symbols-outlined text-sm">location_on</span>
                Savannah, GA 31401
              </p>
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bed</span>
                  <span>6</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">bathtub</span>
                  <span>5</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg">straighten</span>
                  <span>5,200 <span className="text-[10px]">sqft</span></span>
                </div>
              </div>
            </div>
          </div>
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
      <footer className="mt-auto w-full border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 lg:px-20 py-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-2 text-primary">
              <span className="material-symbols-outlined text-2xl font-bold">domain</span>
              <h1 className="text-slate-900 dark:text-slate-100 text-lg font-bold leading-tight tracking-tight">EstateFinder</h1>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              The easiest way to find, buy, and sell properties with ease and confidence. Your dream home is just a click away.
            </p>
            <div className="flex gap-4">
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">public</span></a>
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
              <a className="text-slate-400 hover:text-primary" href="#"><span className="material-symbols-outlined">share</span></a>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Services</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Property Search</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Sell Your Home</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Rentals</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Company</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">About Us</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Our Blog</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Contact</a>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 uppercase tracking-wider">Support</h4>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Help Center</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Privacy Policy</a>
              <a className="text-sm text-slate-500 dark:text-slate-400 hover:text-primary transition-colors" href="#">Terms of Service</a>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-slate-100 dark:border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 EstateFinder Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>English (US)</span>
            <span>$ USD</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
