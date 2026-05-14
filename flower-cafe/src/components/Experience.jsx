import React from 'react';

const Experience = () => {
  return (
    <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
      <div className="absolute top-0 left-0 -translate-y-1/2 opacity-20 hidden md:block">
        <svg className="text-primary" fill="none" height="200" viewBox="0 0 100 100" width="200">
          <path d="M50 10C50 10 55 30 75 30C95 30 90 50 75 50C55 50 50 70 50 90C50 70 45 50 25 50C5 50 10 30 25 30C45 30 50 10 50 10Z" fill="currentColor"></path>
        </svg>
      </div>
      <div className="text-center mb-24">
        <span className="text-label-caps font-label-caps text-tertiary uppercase mb-4 block">The Experience</span>
        <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary">Enchantment in Every Petal</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Ambiance */}
        <div className="group relative bg-surface-container-low p-8 rounded-card atmospheric-shadow border border-outline-variant/30 hover:-translate-y-2 transition-all duration-500">
          <div className="h-64 mb-8 overflow-hidden rounded-lg">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9-frN7I3djAuS4ZtThS4HB4Czk3clGbCgM5A8Wp-Q5Ol0p4WhKIcE3ohXcUJ1vRVjMPdx927DcIaVP-CoPKtqusyBYRAjtCrc4joHIw37RyYKaPQLbA9H3029k4gG0MHBwRyfBSANhKpu51MXFPvXcznrzB2Mj3vNQa-rIpbGK5GVacfx1AEoLzCarcWeSgJVUQxKUQzvtCTasrRGzMIThhpvp9kQidB-Yo2b2lXY9nzx4hgs_UF7vXPlz7BdDQuoPfheCRS1" 
              alt="Ambiance" 
            />
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Ambiance</h3>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Step into a floral wonderland where every corner is a curated masterpiece of nature's finest blooms.
          </p>
          <div className="mt-6 flex items-center text-tertiary">
            <span className="text-label-caps font-label-caps mr-2">Discover more</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Artisanal Coffee */}
        <div className="group relative bg-surface-container-low p-8 rounded-card atmospheric-shadow border border-outline-variant/30 hover:-translate-y-2 transition-all duration-500">
          <div className="h-64 mb-8 overflow-hidden rounded-lg">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_mIT47dNbbGKu2mtI6iSDilcm50luEFoo2XR7ms1aOW6icLcSH321VjfWvn3YrZnfJQoMdZn8-J1uczuIlnjoeHVmHv4qMkHFLyTrLdUHpm2DJdb5FEInIUY40xMEnhh5H3iYclrp-o518zmgHUHvYC2jlhHGwqD6DDSIn6VhVsXnQ-FMrNNT53oshlUWRv4q2xw_xTtJN6s0X3z01rsQHZvy6gWO18E0XMexqW7XtFQNkzLetWjntw_0QqcqWq17buobs0zM" 
              alt="Artisanal Coffee" 
            />
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Artisanal Coffee</h3>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            Premium beans roasted to perfection, served with a touch of humanist warmth and floral elegance.
          </p>
          <div className="mt-6 flex items-center text-tertiary">
            <span className="text-label-caps font-label-caps mr-2">View Menu</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>

        {/* Late Night Vibes */}
        <div className="group relative bg-surface-container-low p-8 rounded-card atmospheric-shadow border border-outline-variant/30 hover:-translate-y-2 transition-all duration-500">
          <div className="h-64 mb-8 overflow-hidden rounded-lg">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbHNDDKdKDLk_DzbbAHCR1qVl6BS9tobGESudoMr-KuQsAJwDBojH65PaVA-OYtwkyiFpr5b-AuA0-DS-qWnrW7yJx4iOnrdZfsLRfVBVk-kJ-NcpliK0wws8-BEvLZcgKIZT8yINm5ROaG3OVHYSe_EU-U8Liwuw0rlFNwTYBMrq__dQ1zyCU8EPMQJtOHxJZZLq2X2RbN7AlUhgBFaoe_OWHnUSWNUT1SubqzaxlukZ-IQ51Isq6JJDAVRALYnQ-PmnWpYoq" 
              alt="Late Night Vibes" 
            />
          </div>
          <h3 className="text-headline-sm font-headline-sm text-primary mb-3">Late Night Vibes</h3>
          <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">
            As the sun sets, our sanctuary transforms into a romantic evening escape. Open until 12 AM.
          </p>
          <div className="mt-6 flex items-center text-tertiary">
            <span className="text-label-caps font-label-caps mr-2">Our Evenings</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
