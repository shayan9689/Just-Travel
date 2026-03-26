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

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tighter text-emerald-600">PAKISTAN</span>
            <span className="text-2xl font-light tracking-widest text-slate-800">EXPLORER</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-slate-600 hover:text-emerald-600' : 'text-slate-700 hover:text-emerald-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-emerald-600">
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
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Auth Modal */}
        <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute left-0 top-full w-full bg-white border-t border-slate-100 p-6 md:hidden animate-fade-in shadow-xl">
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="text-lg font-bold text-slate-800"
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
