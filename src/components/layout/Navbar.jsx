import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';

export default function Navbar() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link to="/" className="flex items-center gap-2 text-primary">
                    <span className="material-symbols-outlined text-3xl font-bold">domain</span>
                    <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">EstateHub</h2>
                </Link>
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
                    <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">Search</Link>
                    <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors">Categories</Link>
                    <Link to="/cities" className="text-sm font-medium hover:text-primary transition-colors">Cities</Link>
                </nav>
                <div className="flex items-center gap-3">
                    {isAuthenticated ? (
                        <>
                            <Link to="/dashboard" className="hidden sm:block text-sm font-semibold px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Dashboard</Link>
                             <button onClick={() => dispatch(logout())} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-shadow shadow-md">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/login" className="hidden sm:block text-sm font-semibold px-4 py-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors">Login</Link>
                            <Link to="/register" className="bg-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-shadow shadow-md">Register</Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
}