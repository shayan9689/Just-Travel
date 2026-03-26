import HeroSection from '../components/ui/HeroSection';
import FeaturedDestinations from '../components/ui/FeaturedDestinations';
import TrendingPackages from '../components/ui/TrendingPackages';
import JourneySteps from '../components/ui/JourneySteps';
import CtaBanner from '../components/ui/CtaBanner';

const HomePage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <FeaturedDestinations />
      <TrendingPackages />
      <JourneySteps />
      <CtaBanner />
    </div>
  );
};

export default HomePage;
