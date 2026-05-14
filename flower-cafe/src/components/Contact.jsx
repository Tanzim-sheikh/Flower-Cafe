import React from 'react';

const Contact = () => {
  return (
    <div className="font-body-md text-on-background">
      <main>
        {/* Banner */}
        <section className="relative h-[60vh] overflow-hidden">
          <img 
            alt="Flower Cafe Interior" 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvZQGdRIbc4zpyZS98Vcpyul2lJBEaf7nPpbaAdZO-KlH1SOBcN3L2GSXZtV7922tgKkJt5Q3uYS9ybKAtKr0hKx6UTNZJIJJ_0G4qOXXKy7q8-GGcleHcTXJiE_0AK3X7RMSEZz8S5iZLXqbYhEkgbRJ2vkTR9pPxVJ_E-xUUPRRoeIB0Q_R0GfX7hRPiSIqSNy0QJieXnBqrwRutno3r8MEly9sSyhyrV6k8iQ6tQhr3FPt0GLXV1-bgz1oDhXKSoSv8eIPw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-12 left-0 w-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
            <span className="text-label-caps font-label-caps text-secondary mb-4 block">GET IN TOUCH</span>
            <h1 className="text-headline-xl-mobile md:text-headline-xl font-headline-xl text-primary">Visit Our Sanctuary</h1>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
            {/* Left Column: Info & Map */}
            <div className="lg:col-span-5 space-y-12">
              <div className="space-y-8">
                <ContactInfoItem icon="location_on" title="Our Address" content="Khlong Tan, Khlong Toei, Bangkok 10110" />
                <ContactInfoItem icon="call" title="Phone" content="+66 94 287 8935" />
                <ContactInfoItem icon="schedule" title="Opening Hours" content="10 AM - 12 AM Daily" />
              </div>
              {/* Map Placeholder */}
              <div className="editorial-shadow rounded-brand overflow-hidden h-[350px] relative group border border-outline-variant/30">
                <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-primary text-4xl mb-4">map</span>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-6">Flower Cafe Khlong Tan Bangkok</p>
                    <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-brand hover:bg-primary hover:text-on-primary transition-all text-label-caps font-label-caps">
                      <span className="material-symbols-outlined text-sm">directions</span>
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Reservation Form */}
            <div className="lg:col-start-7 lg:col-span-6">
              <div className="bg-surface-container-low p-8 md:p-12 rounded-brand editorial-shadow relative border border-outline-variant/20">
                <div className="absolute -top-6 -right-6 text-primary/10 w-24 h-24 hidden md:block">
                  <span className="material-symbols-outlined text-[80px]">local_florist</span>
                </div>
                <h2 className="text-headline-md font-headline-md text-primary mb-2">Reserve Your Table</h2>
                <p className="text-body-md font-body-md text-on-surface-variant mb-10">Escape the bustle of Bangkok in our lush floral haven. We recommend booking 24 hours in advance.</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="NAME" placeholder="Your Name" type="text" />
                    <FormInput label="EMAIL" placeholder="your@email.com" type="email" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="DATE" type="date" />
                    <div className="space-y-1">
                      <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">GUESTS</label>
                      <select className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-body-md font-body-md appearance-none">
                        <option>2 People</option>
                        <option>4 People</option>
                        <option>6+ People</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">MESSAGE</label>
                    <textarea className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-body-md font-body-md resize-none" placeholder="Any special requests or allergies?" rows="3"></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-4 rounded-brand text-label-caps font-label-caps hover:bg-primary-container hover:text-on-primary-container transition-all shadow-lg active:scale-[0.98] mt-4" type="submit">
                    Confirm Reservation Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Aesthetic Footer Image */}
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="relative rounded-brand overflow-hidden h-[400px]">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDo2Jdpk2P7o8gPq8e-qv6cp4qfawAW6QrBOSSoUqqz4iR4BQfQR1Nry8gf9QWvwPMcDl62M9ctGLz9-mCaG-_AmgDYyeM1KudKkzdS5tCV4MKVMpHzNrid-9HqPUiGGuUchUmg35OpYSVSOI0RB7_WfjRWXd6R3yCrsSDJDp_9Eu2wRcPXMLNR1rmWIO9ugh5uBdt1vbtEGcTEIhFJgWtb9bR2gwUX4PDZNKrkNBuYva8Hy7NrNDolifpGSSzV8xfONXXRn3qf"
              alt="Atmospheric Table"
            />
            <div className="absolute inset-0 bg-primary/20 flex items-center justify-center text-center p-8">
              <div className="max-w-2xl">
                <span className="text-label-caps font-label-caps text-white mb-6 block">SLOW LIVING</span>
                <h3 className="text-headline-lg font-headline-lg text-white">"A hidden floral retreat where every petal tells a story."</h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

const ContactInfoItem = ({ icon, title, content }) => (
  <div className="flex items-start gap-4">
    <span className="material-symbols-outlined text-primary mt-1">{icon}</span>
    <div>
      <h3 className="text-headline-sm font-headline-sm mb-2">{title}</h3>
      <p className="text-body-lg font-body-lg text-on-surface-variant">{content}</p>
    </div>
  </div>
);

const FormInput = ({ label, placeholder, type }) => (
  <div className="space-y-1">
    <label className="text-label-caps font-label-caps text-on-surface-variant ml-1">{label}</label>
    <input 
      className="w-full bg-transparent border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-colors py-3 text-body-md font-body-md" 
      placeholder={placeholder} 
      type={type} 
    />
  </div>
);

export default Contact;
