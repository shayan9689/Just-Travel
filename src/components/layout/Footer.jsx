import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="flex flex-col">
              <span className="text-xl font-black tracking-tighter text-emerald-500">PAKISTAN</span>
              <span className="text-xl font-light tracking-widest text-white">EXPLORER</span>
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Discover the breathtaking beauty and rich heritage of Pakistan. Our mission is to provide luxury travel experiences that inspire and connect.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Twitter size={18} /></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-emerald-600 transition-colors"><Instagram size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/destinations" className="hover:text-emerald-400">All Destinations</Link></li>
              <li><Link to="/packages" className="hover:text-emerald-400">Featured Packages</Link></li>
              <li><a href="#" className="hover:text-emerald-400">Travel Guides</a></li>
              <li><a href="#" className="hover:text-emerald-400">Special Offers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-emerald-400">About Us</a></li>
              <li><a href="#" className="hover:text-emerald-400">Contact Support</a></li>
              <li><a href="#" className="hover:text-emerald-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-500 mt-1" />
                <span>Sector F-7, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-500" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-500" />
                <span>hello@pakistanexplorer.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Pakistan Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
