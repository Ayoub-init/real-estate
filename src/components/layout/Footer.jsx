import { Link } from 'react-router-dom';

export default function Footer() {
    return (
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
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">public</span>
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-primary hover:text-white transition-all">
                            <span className="material-symbols-outlined">alternate_email</span>
                        </a>
                    </div>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Company</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/career" className="hover:text-primary transition-colors">Career</Link></li>
                        <li><Link to="/press" className="hover:text-primary transition-colors">Press</Link></li>
                        <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Resources</h4>
                    <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400 font-medium">
                        <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
                        <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                        <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        <li><Link to="/guides" className="hover:text-primary transition-colors">Guides</Link></li>
                    </ul>
                </div>
                <div className="space-y-6">
                    <h4 className="font-bold text-slate-900 dark:text-white uppercase text-xs tracking-widest">Newsletter</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Get the latest property deals in your inbox.</p>
                    <div className="flex gap-2">
                        <input type="email" placeholder="Your email" className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-lg px-4 text-sm focus:ring-1 focus:ring-primary" />
                        <button className="bg-primary text-white p-2 rounded-lg"><span className="material-symbols-outlined">send</span></button>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 pt-10 border-t border-slate-200 dark:border-slate-800 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">© 2024 EstateHub Real Estate. All rights reserved.</p>
            </div>
        </footer>
    );
}