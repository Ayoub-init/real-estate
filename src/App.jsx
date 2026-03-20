import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import MyAds from './pages/MyAds';
import SearchResults from './pages/SearchResults';
import PropertyDetails from './pages/PropertyDetails';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import UserProfile from './pages/UserProfile';
import AdminOverview from './pages/AdminOverview';
import UserDashboard from './pages/UserDashboard';
import PostManagement from './pages/PostManagement';
import MyFavorites from './pages/MyFavorites';
import BrowseCities from './pages/BrowseCities';
import PropertyCategories from './pages/PropertyCategories';

function IndexPage() {
  const screens = [
    { path: '/screen-1', name: 'Screen 1: User Dashboard - My Ads', component: <MyAds /> },
    { path: '/screen-2', name: 'Screen 2: EstateHub | Find Your Dream Home', component: <Home /> },
    { path: '/screen-3', name: 'Screen 3: EstateFinder - Property Listings', component: <SearchResults /> },
    { path: '/screen-4', name: 'Screen 4: Modern Waterfront Villa | Estately', component: <PropertyDetails /> },
    { path: '/screen-5', name: 'Screen 5: Login - EstateHub', component: <Login /> },
    { path: '/screen-6', name: 'Screen 6: Sign Up | EstateHub', component: <SignUp /> },
    { path: '/screen-7', name: 'Screen 7: User Profile | EstateFlow', component: <UserProfile /> },
    { path: '/screen-8', name: 'Screen 8: EstateAdmin - Admin Management', component: <AdminOverview /> },
    { path: '/screen-9', name: 'Screen 9: EstateFlow Dashboard', component: <UserDashboard /> },
    { path: '/screen-10', name: 'Screen 10: Post Management - 123 Maple Avenue', component: <PostManagement /> },
    { path: '/screen-11', name: 'Screen 11: My Favorites | EstateFinder', component: <MyFavorites /> },
    { path: '/screen-12', name: 'Screen 12: Browse Cities - EstateFinder', component: <BrowseCities /> },
    { path: '/screen-13', name: 'Screen 13: Property Categories - EstateFinder', component: <PropertyCategories /> },
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-slate-200 p-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">Designed Screens</h1>
        <p className="text-slate-600 mb-8">Click on a link below to view the implemented React component for each screen.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {screens.map((screen, index) => (
            <Link
              key={index}
              to={screen.path}
              className="flex items-center justify-between p-4 rounded-lg border border-slate-200 hover:border-primary hover:shadow-md transition-all group"
            >
              <span className="font-medium text-slate-700 group-hover:text-primary">{screen.name}</span>
              <span className="material-symbols-outlined text-slate-400 group-hover:text-primary">arrow_forward</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

import Layout from './components/layout/Layout';
import SplashScreen from './components/SplashScreen';

export default function App() {
  return (
    <Router>
      <SplashScreen>
      <Routes>
        <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/categories" element={<PropertyCategories />} />
            <Route path="/cities" element={<BrowseCities />} />
            <Route path="/favorites" element={<MyFavorites />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />

            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminOverview />} />
            <Route path="/my-ads" element={<MyAds />} />
            <Route path="/manage/:id" element={<PostManagement />} />

            <Route path="/index" element={<IndexPage />} />
        </Route>
      </Routes>
      </SplashScreen>
    </Router>
  );
}
