import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-surface-container-low dark:bg-surface-container-highest border-t border-outline-variant/50">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-mobile md:px-margin-desktop py-16 max-w-container-max mx-auto">
        <div className="md:col-span-1">
          <div className="text-headline-sm font-headline-sm italic text-primary mb-6">Flower Cafe</div>
          <p className="text-body-md font-body-md text-on-surface-variant pr-4">
            A hidden botanical sanctuary for coffee lovers and romantic souls in the heart of Bangkok.
          </p>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps font-label-caps text-primary mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="text-body-md font-body-md text-on-surface-variant">Khlong Tan, Khlong Toei, Bangkok 10110</li>
            <li className="text-body-md font-body-md text-on-surface-variant">+66 94 287 8935</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps font-label-caps text-primary mb-6">Hours</h4>
          <ul className="space-y-4">
            <li className="text-body-md font-body-md text-on-surface-variant">Daily: 10 AM - 12 AM</li>
            <li className="text-body-md font-body-md text-on-surface-variant">Live Music: Fri &amp; Sat</li>
          </ul>
        </div>
        <div className="md:col-span-1">
          <h4 className="text-label-caps font-label-caps text-primary mb-6">Social</h4>
          <div className="flex space-x-6">
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">
              <span className="material-symbols-outlined">camera</span>
            </a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">
              <span className="material-symbols-outlined">Notebook</span>
            </a>
            <a className="text-on-surface-variant hover:text-tertiary transition-colors" href="#">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-8 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-body-md font-body-md text-on-surface-variant/70 text-xs">
          © 2024 Flower Cafe Bangkok. All rights reserved.
        </p>
        <div className="flex space-x-8">
          <a className="text-xs font-label-caps text-on-surface-variant/70 hover:text-primary" href="#">Privacy Policy</a>
          <a className="text-xs font-label-caps text-on-surface-variant/70 hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
