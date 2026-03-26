import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User } from 'lucide-react';
import AuthModal from '../ui/AuthModal';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Reviews', path: '/#reviews' },
  ];

  const isDarkTheme = isScrolled || location.pathname !== '/';

  return (
    <nav data-aos="fade-down" className={`fixed top-0 z-50 w-full transition-all duration-500 ${isDarkTheme ? 'bg-white/40 backdrop-blur-2xl border-b border-white/40 shadow-lg shadow-slate-200/20 py-4' : 'bg-transparent py-6 border-b border-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className={`text-2xl font-black tracking-tighter transition-colors ${isDarkTheme ? 'text-emerald-600' : 'text-emerald-500'}`}>PAKISTAN</span>
            <span className={`text-2xl font-light tracking-widest transition-colors drop-shadow-sm ${isDarkTheme ? 'text-slate-900' : 'text-slate-100'}`}>EXPLORER</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-bold tracking-wide transition-all ${isDarkTheme ? 'text-slate-900 hover:text-emerald-600' : 'text-slate-100 hover:text-emerald-400 drop-shadow-md'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <button className={`p-2 transition-colors ${isDarkTheme ? 'text-slate-800 hover:text-emerald-600' : 'text-slate-200 hover:text-white'}`}>
                <Search size={20} />
              </button>
              <button 
                onClick={() => setIsAuthOpen(true)}
                className="flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-bold text-white shadow-md hover:bg-emerald-700 transition-all active:scale-95"
              >
                <User size={18} />
                <span>Login</span>
              </button>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button className={`md:hidden ${isDarkTheme ? 'text-slate-900 hover:text-emerald-600' : 'text-slate-100 hover:text-white'}`} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Auth Modal */}
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-white/60 backdrop-blur-3xl border-y border-white/40 p-6 md:hidden animate-fade-in shadow-2xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-black text-slate-900 hover:text-emerald-600 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-slate-100" />
              <button className="flex items-center justify-center gap-2 rounded-xl bg-emerald-600 py-4 text-sm font-bold text-white">
                <User size={18} />
                <span>My Profile</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
