import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-background text-on-background antialiased selection:bg-primary/20">
      {/* Header Section */}
      <header className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-tertiary-container"></div>
          <span className="text-label-caps font-label-caps text-tertiary uppercase tracking-[0.3em]">Botanical Memories</span>
          <div className="h-px w-12 bg-tertiary-container"></div>
        </div>
        <h1 className="font-headline-xl text-headline-xl md:text-headline-xl mb-6">A Sanctuary in Bloom</h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto italic">
          Capturing the romantic, textured layers of our hidden Bangkok oasis. Explore the eclectic fusion of botanical art and culinary elegance.
        </p>
      </header>

      {/* Gallery Grid */}
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-section-gap">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Item 1 */}
          <GalleryItem 
            title="The Communal Heart" 
            category="Atmosphere" 
            desc="Golden lighting and lush accents create an intimate dining experience." 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBzelbMO9tOrD4nwim_AaxlpJP-useC0pIto1_ihPTL0cxo5yG3OGCesQqOlpWpU66h3om-7oo1VSySeDQ-e2mlkEQD8tlXZAp0RRGQYp3JqCcRG4XbOlEmOAOHYb9BBDnNumOiOiTVpA_XRQ2KmEgYfo1OG6ZZhW7FOOaVTWS8zQXx654j6hkONJ7JVQOVD10GRUwAZR2v_DgPqyD489bb5Q-guIupL-OljeKhtQXJ8RU_uM--fS9I-EYQ8lOtKYpJrp1h9WkU"
            height="h-[400px]"
          />
          {/* Item 2 */}
          <GalleryItem 
            title="Living Canvas" 
            category="Editorial" 
            desc="Every corner tells a story through layered art and organic textures." 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuCvOXp4QpyGYaP74VbTL-Nnj7MYn6itcCNTZyWMYCIn0rB1FXY8wgTc5qdpmWmlBMxjaER-z1wvYi_vUNhc95t--mvbgVL1JC5qFe7Z9sO3gr0Cluf79y4-HDKXqWigCkOdV85WPVhvJ3RVrVme3k_lUvkrb4V--UieGFv0wLTHMunPmTx5rzEn_BO_KM0cL7DSQCWdZaC69D3V-tJao5hn-boDXJlK1Acdg5seBYlaGeUkQyLkssuZdSLEZNV6W2VKmLyFZErC"
            height="h-[520px]"
            span="lg:row-span-2"
          />
          {/* Item 3 */}
          <GalleryItem 
            title="Petals & Portraits" 
            category="Bloom" 
            desc="Capturing the delicate interplay between nature and nostalgic imagery." 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZQGdRIbc4zpyZS98Vcpyul2lJBEaf7nPpbaAdZO-KlH1SOBcN3L2GSXZtV7922tgKkJt5Q3uYS9ybKAtKr0hKx6UTNZJIJJ_0G4qOXXKy7q8-GGcleHcTXJiE_0AK3X7RMSEZz8S5iZLXqbYhEkgbRJ2vkTR9pPxVJ_E-xUUPRRoeIB0Q_R0GfX7hRPiSIqSNy0QJieXnBqrwRutno3r8MEly9sSyhyrV6k8iQ6tQhr3FPt0GLXV1-bgz1oDhXKSoSv8eIPw"
            height="h-[380px]"
          />
          {/* Item 4 */}
          <GalleryItem 
            title="The Grand Entry" 
            category="Threshold" 
            desc="A welcoming portal into our floral-scented world." 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAsutCEM_DDZOwprNu8EIo5Jnr1NqmoMkYktIhFyRPLj5HJZk6FOpbM8UjSxqhDeyoT-fBRrnetG76lpvWh-VwLADpAGg9SD8f5t1S1ryU0AU1nuIpBQ8ZTDYY5dY_orgj53wYLX6qI2qm0JJcr9fnoxUj-eh66ziH9a6KeqIFuB2q_VqjEHma2YYzb4JsJ0XPR4d_zfVFhRUZnmrzdq0PT9kBARxtttZAvtordZtsqXcFu3g_2rYP5W7r9rt4kavdtlmhvBtea"
            height="h-[450px]"
          />
          {/* Item 5 */}
          <GalleryItem 
            title="Elegant Still Life" 
            category="Hospitality" 
            desc="Woven textiles and golden accents waiting for your arrival." 
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuARyLLgXHi074Br6XbqAZXErBxbQlJO3A2Urvs3UM7b5mPi4SjHTSB25nLWVL1tMdb6ifbl0BkS0YR-nvXA-9QsahrkQnEoyqdqP7YY3UCeBs_i-V1ayJjSPsvujMVONHBhI9p-gtdHOxFwRw042uCgCweYV0G_cQRgEXMPCudsKsAJDFhRGJzR3agLe7HqqVWou39AyRU2guWKl1SSbkj7LwGRuI7G8_OfPh3mEZRIljnhCQ-UIz5SPohTBi4XfrK2xYtXusmz"
            height="h-[380px]"
          />
        </div>

        {/* Decorative Floral SVG Flourish */}
        <div className="flex justify-center mt-section-gap opacity-30">
          <span className="material-symbols-outlined text-tertiary scale-[3]" style={{ fontVariationSettings: "'FILL' 1" }}>local_florist</span>
        </div>
      </main>
    </div>
  );
};

const GalleryItem = ({ title, category, desc, img, height, span = "" }) => (
  <div className={`group relative overflow-hidden rounded-xl bg-surface-container shadow-sm border border-outline-variant/20 ${height} ${span}`}>
    <img alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={img} />
    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
      <span className="text-label-caps font-label-caps text-on-primary-container mb-2">{category}</span>
      <h3 className="text-on-primary font-headline-sm text-headline-sm">{title}</h3>
      <p className="text-on-primary/80 font-body-md text-body-md mt-2 line-clamp-2">{desc}</p>
    </div>
  </div>
);

export default Gallery;
