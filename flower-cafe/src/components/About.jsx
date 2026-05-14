import React from 'react';

const About = () => {
  return (
    <section className="py-section-gap bg-surface-container/50">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 items-center gap-20">
        <div className="relative order-2 md:order-1">
          <div className="aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden gold-border p-3">
            <img 
              className="w-full h-full object-cover rounded-tl-[90px] rounded-br-[90px]" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3c-fk4RegGXXbKJc-fzWTFooQ7UzMwC0t8wrcL_6MIqqonHS7s79sAHyyDtBjD97n33IShf_G-rGp0KhbYdkhpX-VCo8DFeaXOMqyzOaCjQOK3doLGgysWZY3VJeRhCukWCdQGV4rFtDTRMz87AqcjecL_qJ9PleApX4eZe3-jmbZdj2abjWPvj_fUJF_nu_9g8OG7ZoQWkB5H-eU6hpwmAD_X1cdS9phaL8QLJOLk0FWPM6NaLLuJKlx7DzIYKLAG6KQMU-4" 
              alt="Our Story" 
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-primary rounded-full flex items-center justify-center text-surface-bright text-center p-6 border-4 border-background hidden md:flex">
            <p className="font-headline-sm text-sm leading-tight italic">Bangkok's Most Romantic Spot</p>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <span className="text-label-caps font-label-caps text-secondary mb-6 block">Our Story</span>
          <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-8">Founded in the Heart of the Concrete Jungle</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 leading-loose">
            Flower Cafe was born from a simple dream: to create a breathing space where the frantic pace of Bangkok slows down. We believe in the power of slow-living, the beauty of a hand-poured brew, and the quiet joy of being surrounded by nature.
          </p>
          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="material-symbols-outlined text-tertiary mr-4">local_florist</span>
              <div>
                <h4 className="font-bold text-on-surface">Daily Fresh Blooms</h4>
                <p className="text-on-surface-variant text-sm">Sourced from local sustainable flower farms every morning.</p>
              </div>
            </li>
            <li className="flex items-start">
              <span className="material-symbols-outlined text-tertiary mr-4">coffee</span>
              <div>
                <h4 className="font-bold text-on-surface">Artisan Roasts</h4>
                <p className="text-on-surface-variant text-sm">Specialty grade coffee beans with a focus on ethical sourcing.</p>
              </div>
            </li>
          </ul>
          <button className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-caps text-label-caps hover:brightness-110 transition-all">
            Learn Our History
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
