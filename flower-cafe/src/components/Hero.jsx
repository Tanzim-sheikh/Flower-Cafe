import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Flower Cafe Interior" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOXp4QpyGYaP74VbTL-Nnj7MYn6itcCNTZyWMYCIn0rB1FXY8wgTc5qdpmWmlBMxjaER-z1wvYi_vUNhc95t--mvbgVL1JC5qFe7Z9sO3gr0Cluf79y4-HDKXqWigCkOdV85WPVhvJ3RVrVme3k_lUvkrb4V--UieGFv0wLTHMunPmTx5rzEn_BO_KM0cL7DSQCWdZaC69D3V-tJao5hn-boDXJlK1Acdg5seBYlaGeUkQyLkssuZdSLEZNV6W2VKmLyFZErC"
        />
        <div className="absolute inset-0 bg-primary/30 backdrop-brightness-75"></div>
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
        <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-surface-bright mb-4">
          Flower Cafe
        </h1>
        <p className="text-body-lg font-body-lg text-surface-bright/90 mb-12 italic tracking-wide">
          A Hidden Garden in the Heart of Bangkok
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <button className="w-full md:w-auto bg-surface-bright text-primary px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-primary-fixed transition-all duration-300">
            Explore Menu
          </button>
          <button className="w-full md:w-auto border border-surface-bright text-surface-bright px-10 py-4 rounded-full font-label-caps text-label-caps hover:bg-white/10 transition-all duration-300">
            Book a Table
          </button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <span className="material-symbols-outlined text-surface-bright text-3xl">keyboard_arrow_down</span>
      </div>
    </section>
  );
};

export default Hero;
