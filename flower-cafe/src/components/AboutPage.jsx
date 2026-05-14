import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
      <main>
        <section className="relative min-h-[80vh] flex flex-col md:flex-row items-stretch overflow-hidden">
          <div className="w-full md:w-1/2 p-margin-mobile md:p-margin-desktop flex flex-col justify-center bg-surface-container-low relative z-10">
            <div className="max-w-xl mx-auto md:mx-0">
              <span className="text-label-caps font-label-caps text-secondary mb-6 block">OUR HERITAGE</span>
              <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-primary mb-8 leading-tight">A Sanctuary for the Senses in Bangkok</h1>
              <div className="space-y-6 text-body-lg font-body-lg text-on-surface-variant leading-relaxed italic">
                <p>In the quiet corners of Khlong Tan, where the hum of the city softens into a rhythmic whisper, you’ll find our sanctuary. Flower Cafe was born from a singular vision: to weave the untamed beauty of Thai botany into the refined ritual of high-end coffee culture.</p>
                <p>We believe that every cup should be an invitation to slow down, a romantic dialogue between the earth’s finest blossoms and the soul of the artisan.</p>
              </div>
              <div className="mt-12">
                <div className="w-16 h-[1px] bg-secondary mb-4"></div>
                <p className="text-label-caps font-label-caps text-secondary">ESTABLISHED 2024</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-[500px] md:h-auto relative">
            <img 
              alt="Flower Cafe interior" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsutCEM_DDZOwprNu8EIo5Jnr1NqmoMkYktIhFyRPLj5HJZk6FOpbM8UjSxqhDeyoT-fBRrnetG76lpvWh-VwLADpAGg9SD8f5t1S1ryU0AU1nuIpBQ8ZTDYY5dY_orgj53wYLX6qI2qm0JJcr9fnoxUj-eh66ziH9a6KeqIFuB2q_VqjEHma2YYzb4JsJ0XPR4d_zfVFhRUZnmrzdq0PT9kBARxtttZAvtordZtsqXcFu3g_2rYP5W7r9rt4kavdtlmhvBtea"
            />
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-4 italic">Crafted with Intention</h2>
            <div className="w-24 h-[1px] bg-outline-variant mx-auto mb-12"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            <PhilosophyCard icon="auto_stories" title="Our Story" desc="What began as a small boutique flower shop evolved into a narrative-driven cafe. We honor the heritage of our neighborhood while introducing a contemporary, botanical-inspired elegance to every guest." />
            <PhilosophyCard icon="potted_plant" title="Our Space" desc='Designed as a "living gallery," our space is curated daily with fresh seasonal blooms. It is a tactile experience where the scent of jasmine mingles with the aroma of freshly roasted beans.' />
            <PhilosophyCard icon="coffee" title="Our Coffee" desc="We source single-origin beans from the northern highlands of Thailand, roasting them in small batches to preserve their delicate floral notes and honey-like sweetness." />
          </div>
        </section>

        <section className="bg-primary py-section-gap relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <img className="w-full h-full object-cover mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZomRerDjZfg82h_AD5aidg0C8SDWdowiPew4lM34ZQIXVTzTSWhnKIfaFGspJr6tJJl0AqUlU2JbTH8RjJP-KJEgfY20WKRNLEjN1093cHYB2f-4o9O_bXfzDhJAlYWqkG87mrWTUEvioKJ9QJXquE_0Z3H_4JkCuKW50iHc4Q5M3ORMfQzogsPMRnwcBRDea0WU4WWwdJRTojd4zwbQ8nDtYh8PhYIw78Yz-Nptxvn3w3Dxsg_81_DLJHEl3gtRLse5uZN_5" alt="Floral Texture" />
          </div>
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative z-10">
            <div className="max-w-2xl text-on-primary">
              <span className="text-label-caps font-label-caps text-on-primary-container tracking-widest mb-6 block">THE EXPERIENCE</span>
              <h2 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl mb-8">Slow Living, Elevated.</h2>
              <p className="text-body-lg font-body-lg opacity-90 leading-relaxed mb-10">In a world that never stops moving, Flower Cafe is your permission to pause. Our editorial-style atmosphere encourages reflection, conversation, and the simple joy of a perfectly balanced latte served amidst a garden in bloom.</p>
              <div className="flex flex-wrap gap-12 mt-16">
                <StatItem val="100+" label="BOTANICAL SPECIES" />
                <StatItem val="15k" label="CUPS SERVED" />
                <StatItem val="12" label="ARTISAN ROASTS" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/5 rounded-card -rotate-2 group-hover:rotate-0 transition-transform"></div>
              <img 
                alt="Cafe atmosphere" 
                className="relative rounded-card w-full h-[600px] object-cover atmospheric-shadow" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbTYhHb3OqTkOYR1nFU3J9_Dw9ORAAbHQezz0f_oC7vuVP70otdhVWCrIiEnqwL1244_EHS3kKGYb9GfVh6ZcOmya04zdygf1VGKPn4hM-vajbU3gx_cjgNdJpzKnRZ72UNytc-8DwIchvFogbOmEmXkTBv1xBR9-t2T64z7DJF2RN-q3ZA1iJtg7bRTCnjjVurzPggsVVVsH-63vx986IZB5n_FfyV0W2bjII4j9NqBKPtJj04Y3BnA8FhuB-4RwymR6SHiMR"
              />
              <div className="absolute bottom-8 left-8 bg-surface/90 backdrop-blur-sm p-6 rounded-lg border border-outline-variant/30 max-w-xs">
                <p className="text-body-md font-body-md italic text-primary">"A hidden gem where the beauty of nature meets the soul of Bangkok's coffee scene."</p>
                <p className="text-label-caps font-label-caps text-secondary mt-4">— BANGKOK LIFESTYLE GUIDE</p>
              </div>
            </div>
            <div className="pl-0 md:pl-12">
              <h2 className="text-headline-lg-mobile md:text-headline-lg font-headline-lg text-primary mb-8 italic">Our Philosophy</h2>
              <div className="space-y-12">
                <PhilosophyItem num="01" title="Sustainability" desc="We work directly with local farmers and floral artisans, ensuring a circular economy that supports our Thai roots and minimizes environmental impact." />
                <PhilosophyItem num="02" title="Artistry" desc="From the hand-carved furniture to the custom-made ceramic cups, every detail is a piece of art designed to enhance your sensory journey." />
                <PhilosophyItem num="03" title="Community" desc="We are more than a cafe; we are a gathering place for creatives, dreamers, and those seeking a moment of quiet inspiration in the heart of the city." />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const PhilosophyCard = ({ icon, title, desc }) => (
  <div className="bg-surface-container-lowest p-10 rounded-[14px] atmospheric-shadow border border-outline-variant/10 group transition-all duration-500 hover:-translate-y-2">
    <div className="w-12 h-12 bg-primary-fixed rounded-full flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-on-primary transition-colors">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <h3 className="text-headline-sm font-headline-sm text-primary mb-6">{title}</h3>
    <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed">{desc}</p>
  </div>
);

const StatItem = ({ val, label }) => (
  <div>
    <div className="text-headline-lg font-headline-lg text-primary-fixed mb-1">{val}</div>
    <div className="text-label-caps font-label-caps opacity-70 uppercase">{label}</div>
  </div>
);

const PhilosophyItem = ({ num, title, desc }) => (
  <div className="flex gap-6">
    <div className="text-headline-sm font-headline-sm text-secondary shrink-0">{num}</div>
    <div>
      <h4 className="text-headline-sm font-headline-sm text-primary mb-3">{title}</h4>
      <p className="text-body-md font-body-md text-on-surface-variant">{desc}</p>
    </div>
  </div>
);

export default AboutPage;
