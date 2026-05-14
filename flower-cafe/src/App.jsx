import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Experience from './components/Experience';
import About from './components/About';
import AboutPage from './components/AboutPage';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

const Home = () => (
  <>
    <Hero />
    <Experience />
    <About />
  </>
);

function App() {
  return (
    <Router>
      <div className="app bg-background min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
