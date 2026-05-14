import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Flower2, Moon, Music } from 'lucide-react';
import './Features.css';

const features = [
  {
    icon: <Flower2 size={32} />,
    title: "Daily Fresh Blooms",
    description: "Sourced from local sustainable flower farms every morning for vibrant energy."
  },
  {
    icon: <Coffee size={32} />,
    title: "Artisan Roasts",
    description: "Specialty grade coffee beans roasted to perfection with ethical sourcing."
  },
  {
    icon: <Moon size={32} />,
    title: "Late Night Sanctuary",
    description: "Open until 12 AM for those seeking a romantic evening escape in the city."
  },
  {
    icon: <Music size={32} />,
    title: "Live Melodies",
    description: "Unwind with live acoustic music every Friday and Saturday evening."
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-header">
          <span className="section-tag">Why Visit Us</span>
          <h2 className="section-title">The Flower Cafe <span className="italic-text">Experience</span></h2>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
