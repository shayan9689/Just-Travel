import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import DestinationDetailPage from './pages/DestinationDetailPage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import BookingPage from './pages/BookingPage';
import UserDashboard from './pages/UserDashboard';
import ScrollToTop from './hooks/useScrollToTop';
import { AppProvider } from './context/AppContext';

const AosInit = () => {
  const location = useLocation();
  
  useEffect(() => {
    AOS.init({ duration: 800 }); // Removed once: true to animate every scroll
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh calculation on page route changes
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <AppProvider>
      <Router>
        <AosInit />
        <ScrollToTop />
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/destination/:id" element={<DestinationDetailPage />} />
              <Route path="/packages" element={<PackagesPage />} />
              <Route path="/package/:id" element={<PackageDetailPage />} />
              <Route path="/booking" element={<BookingPage />} />
              <Route path="/dashboard" element={<UserDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
