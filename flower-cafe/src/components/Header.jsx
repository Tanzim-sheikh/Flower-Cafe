import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-surface/90 backdrop-blur-md sticky top-0 z-50 border-b border-outline-variant/30 shadow-sm">
      <nav className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <Link to="/" className="text-headline-md font-headline-md italic text-primary">Flower Cafe</Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/">Home</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/menu">Menu</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/gallery">Gallery</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/about">About</Link>
          <Link className="text-label-caps font-label-caps text-on-surface-variant hover:text-primary transition-colors" to="/contact">Contact</Link>
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-full font-label-caps text-label-caps hover:scale-95 transition-transform">
          Reserve a Table
        </button>
      </nav>
    </header>
  );
};

export default Header;
