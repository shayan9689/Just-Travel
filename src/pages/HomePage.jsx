import HeroSection from '../components/ui/HeroSection';
import FeaturedDestinations from '../components/ui/FeaturedDestinations';
import TrendingPackages from '../components/ui/TrendingPackages';
import JourneySteps from '../components/ui/JourneySteps';
import CtaBanner from '../components/ui/CtaBanner';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-slate-50"
    >
      <HeroSection />
      <FeaturedDestinations />
      <TrendingPackages />
      <JourneySteps />
      <CtaBanner />
    </motion.div>
  );
};

export default HomePage;
