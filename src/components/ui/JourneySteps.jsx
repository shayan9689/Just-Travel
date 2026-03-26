import { Search, Calendar, Plane } from 'lucide-react';
import { motion } from 'framer-motion';

const JourneySteps = () => {
  const steps = [
    {
      icon: Search,
      title: 'Explore Destinations',
      desc: 'Browse our curated list of breathtaking locations in Pakistan.'
    },
    {
      icon: Calendar,
      title: 'Book Your Trip',
      desc: 'Select your dates, travelers, and confirm your booking instantly.'
    },
    {
      icon: Plane,
      title: 'Travel & Enjoy',
      desc: 'Pack your bags and experience the journey of a lifetime.'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="mx-auto h-24 w-24 flex items-center justify-center rounded-[32px] bg-emerald-50 text-emerald-600 mb-8 transition-all group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-12 duration-500">
                <step.icon size={36} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">{step.title}</h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneySteps;
