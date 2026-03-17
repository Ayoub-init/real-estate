import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/slices/favoritesSlice';

export default function PropertyDetails() {
    const { id } = useParams();
    const { properties } = useSelector(state => state.properties);
    const { favorites } = useSelector(state => state.favorites);
    const dispatch = useDispatch();

    const property = properties.find(p => p.id === id) || properties[0];

    const similarProperties = properties.filter(p => p.id !== property.id).slice(0, 3);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100">
      <div className="relative flex w-full flex-col overflow-x-hidden">
        <main className="mx-auto w-full max-w-[1280px] px-4 md:px-10 lg:px-20 py-8">
          <div className="flex justify-between items-center mb-4">
              <Link to="/search" className="flex items-center text-primary hover:underline text-sm font-semibold">
                  <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
                  Back to Search
              </Link>
              <div className="flex gap-2">
                 <button onClick={() => dispatch(toggleFavorite(property.id))} className={`flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 transition-colors ${favorites.includes(property.id) ? 'text-red-500' : 'text-slate-700 dark:text-slate-300 hover:text-red-500'}`}>
                      <span className="material-symbols-outlined">favorite</span>
                  </button>
                  <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-primary transition-colors">
                      <span className="material-symbols-outlined">share</span>
                  </button>
              </div>
          </div>
        {/* Hero Gallery Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[400px] md:h-[600px] mb-8 overflow-hidden rounded-xl">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Main exterior view of a modern luxury villa with pool" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCAVGQg4gikLzdu92yht5nn9oZqfdu_8ay7C8fphXfPaoV7xiQaa8c5Zj77KBQzrTBhRAEazCNN_aOWeBx__iSd_DgmSD3ehgZOfMWse1-9vy6upzCnOJ7GUVDn4dscqNxM6eCmTaNLg69llGjNpBjBl-Rs0KfLXAgRPiv6ESCKBdILHBMurFyJI7aMGijzcY3G2uJi1PD7QrMI6qurOGy8Av6fMsj_AjM70ZFD14s_cAQ-r1-e2sMuuxbr44xKVcJPMi3lLeEVIZU")' }} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>
          <div className="hidden md:block relative group overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Modern kitchen with marble countertops" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCUBaVNqgOiwVn01GxRbeYaM7gImh8saY7ehEqK2STdToMGw3MJTNbwoIcxDptFoXUDRddBCO00Lqw-lTBkHb3KpqJXx12Kd1BcKb_rv2fNN4Oddr89OdzKgp4n3uYLO9VPLYFaM2ZJu31t4CyRcD84f8aQ1v1nvnHBRHZ1EFrSZZ4GLacr_6X6NBtPcZuYT7rizz0rvF7tj_-nSCAcLV4QADrMAtMqV5a9SF_sKF-ylOv9_ABaArpIg2W4le3vGW-ff-nraUi-6u8")' }} />
          </div>
          <div className="hidden md:block relative group overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Spacious living room with floor to ceiling windows" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuA58MZgpzOw1LBa6Ecw0qmzyltsLI_OxuhIF6w7kAd-_FaWJ1HkTmHnR92wQa6-AZpR5juBM57Z1qQBBsSur3nmI8WOaU3N0dlU8-Y_GrOVwmUUtU2oqdCEO3a2oKWszHkzE0mM_mjaaZmuxwfFIL3Gor_G-Fq3vLasZKhhUxfsPTmm5mAVjVnTyTKJgZ3u1V0Nm8UPF2as4KAnmw2AP0jkcnEoAVKGvfPyYh7-escutEOYVCgcXOrpZEdEcmra7oXV09rDgHc9BeU")' }} />
          </div>
          <div className="hidden md:block relative group overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Luxury bathroom with freestanding tub" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDv4KzLTHa3c75uiX74KmDD0P7itmEkQYFR2zlVaTcAFu1bmA0wv-LIKCCFlBHp5ziKl5-IpZDYyXL2ZParX_oL5XCNEodUPM70n_Z-LhOHo9rLiA9FJXgSjzk9eihaiunUEVqs_xscZObwJtLzJSbMh85cLXhCSRjOA1bYjbvmiBB0ZvCscwk79tWDAvFekrfox-huTz3rPkAFBgM-Yk8k-ou05_DUZNy7u5Rn9SrkM2EjwdfKHmEPFPMu4t3WtwwcMS2s7_yf-AA")' }} />
          </div>
          <div className="hidden md:block relative group overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" data-alt="Primary bedroom with balcony access" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDBx-TWpCD86VBhUBzIholPTQnU9U_jARNAzYbXls7AuyUhyFzFYeu2R-0AFkVWApbHykKraDz36597fG0YDgz5plO3Qz6p05vbMIenV4Pmjb9-YF-WHfxH6CN1MIqeNBHhy5Q2hWlIHag_L8VrAoohTHGFV3VhmFbxe16WigF98kXyb8upmxmovHnSlE6w6ZK6PGSjfL1ed8PljGBBZyyHCHKXxOaByrnbffhCSaggkvuLg9YwZw6TQUMvcuzdh5AHf2Sd2iXmGIc")' }} />
            <button className="absolute bottom-4 right-4 bg-white/90 dark:bg-slate-900/90 text-slate-900 dark:text-slate-100 px-4 py-2 rounded-lg font-bold text-sm shadow-lg flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">grid_view</span> Show all photos
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Content Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Basic Info */}
            <div>
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div className="flex-1">
                    <h1 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-slate-100 tracking-tight mb-2">{property.title}</h1>
                  <div className="flex items-center text-slate-600 dark:text-slate-400 gap-1">
                    <span className="material-symbols-outlined text-sm">location_on</span>
                      <p className="text-base">{property.location}</p>
                  </div>
                </div>
                <div className="bg-primary/10 text-primary px-6 py-4 rounded-xl">
                  <p className="text-sm font-bold uppercase tracking-wider mb-1">Price</p>
                    <p className="text-3xl font-black">${property.price.toLocaleString()}</p>
                </div>
              </div>
              {/* Key Specs */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">bed</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Bedrooms</p>
                      <p className="text-lg font-bold">{property.beds}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">bathtub</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Bathrooms</p>
                      <p className="text-lg font-bold">{property.baths}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">square_foot</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Living Area</p>
                      <p className="text-lg font-bold">{property.sqft.toLocaleString()} sqft</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary p-2 rounded-lg">
                    <span className="material-symbols-outlined">garage</span>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">Parking</p>
                    <p className="text-lg font-bold">2 Cars</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">About this property</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Experience the pinnacle of luxury living in this stunning property located in {property.location}. This architectural masterpiece boasts floor-to-ceiling glass walls that frame breathtaking views from every room. The open-concept living area flows seamlessly into a professional-grade chef's kitchen, perfect for entertaining.
                <br /><br />
                  The primary suite is a true sanctuary, featuring a private balcony, a spa-like ensuite bathroom with a freestanding soaking tub, and custom walk-in closets.
              </p>
            </section>
            {/* Features/Amenities */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Features &amp; Amenities</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">wifi</span>
                  <span className="text-slate-700 dark:text-slate-300">High-speed WiFi</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">pool</span>
                  <span className="text-slate-700 dark:text-slate-300">Infinity Pool</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">ac_unit</span>
                  <span className="text-slate-700 dark:text-slate-300">Central Cooling</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">security</span>
                  <span className="text-slate-700 dark:text-slate-300">24/7 Security</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">kitchen</span>
                  <span className="text-slate-700 dark:text-slate-300">Gourmet Kitchen</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">fitness_center</span>
                  <span className="text-slate-700 dark:text-slate-300">Home Gym</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">directions_boat</span>
                  <span className="text-slate-700 dark:text-slate-300">Private Dock</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">solar_power</span>
                  <span className="text-slate-700 dark:text-slate-300">Solar Panels</span>
                </div>
              </div>
            </section>
            {/* Map Section */}
            <section>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-4">Location</h3>
              <div className="h-64 md:h-80 w-full rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 relative">
                <img className="w-full h-full object-cover opacity-80" data-alt="Map view showing the property location in Miami" data-location="Miami, FL" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsrH6KxMgS5j9kfwkYhx88Cq7Rk94ToHdf4LNWWgdhICigPpABFbVnIRAJP7sy9PHBxI1soTiTL0njjHl_E8bJf0ShaXEpSrqd_d37dpsM7RTTQZBFUgYIaO_xGOUPB4aQGwta9BkYvW6kIONJ65D_2cJ23VqG2GjNNwg4rW6sZ1qiniEtONdSnwL2nckPBR0Fg-vRGPQ98hBdK-xdXYOvOgHt1eAW4a-7rnJpj6iBX5DeQsCpqJiIi9csOPa-0whNqLh8tciKQog" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-primary p-2 rounded-full shadow-2xl text-white animate-bounce">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
          {/* Sidebar Content */}
          <div className="space-y-8">
            {/* Contact Seller Card */}
            <div className="sticky top-24 bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Interested in this property?</h3>
              <div className="flex items-center gap-4 mb-6">
                <img className="size-14 rounded-full object-cover" data-alt="Real estate agent headshot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTnVMxv9mq7COp7OZADRgt7nRAjhEUezYViqoezrTqvXs7SzCSS90h170l2WKodFNZccGg18hbhGgeEMrFFCpCNgAsswI2iGKFqsrXDuCH8h_V6TC6IxW4_3uyjUGnxH_wzVVQm_N4TYikuMrkyfhfW5ae1gBU1wrlkN0LMT5QbeXJu5w4p8hRv0py1LglkM9iYbk5axWJ8mDFbyKVbrDGqVnBJ7EQSksWM5RK7bUo_UkY3i0Z7AZwWYYLiIOYiGiVOtd3W5a1JGQ" />
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">Jonathan Reeds</p>
                  <p className="text-sm text-slate-500">Premium Listing Agent</p>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-[#25D366] hover:bg-[#20bd5c] text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Contact via WhatsApp
                </button>
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                  Send Email
                </button>
              </div>
            </div>
            {/* Similar Properties */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-slate-900 dark:text-slate-100">Similar Properties</h3>
              <div className="space-y-4">
                  {similarProperties.map((prop) => (
                      <Link to={`/property/${prop.id}`} key={prop.id} className="flex gap-4 group cursor-pointer">
                          <div className="size-20 rounded-lg overflow-hidden flex-shrink-0">
                              <img alt={prop.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" src={prop.imageUrl} />
                          </div>
                          <div className="flex flex-col justify-center">
                              <h4 className="font-bold text-slate-900 dark:text-slate-100 line-clamp-1 group-hover:text-primary transition-colors">{prop.title}</h4>
                              <p className="text-sm text-slate-500">{prop.location}</p>
                              <p className="text-primary font-bold mt-1">${prop.price.toLocaleString()}</p>
                          </div>
                      </Link>
                  ))}
              </div>
              <Link to="/search">
                  <button className="w-full mt-6 py-3 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      View All Listings
                  </button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  );
}
