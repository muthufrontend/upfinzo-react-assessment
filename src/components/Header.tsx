import { useState, useEffect } from 'react';
import content from '../data/siteContent.json';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nav = content.header.nav;
  useEffect(() => {
    window.history.scrollRestoration = 'manual'; // disable auto restore
    window.scrollTo(0, 0);
  }, []);


  return (
    <header className="relative z-10 border-b border-gray-800">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          <img src="/Logo.svg" alt="UzOFin" className="h-8 w-auto" />
        </div>

        <nav className="hidden md:flex space-x-8">
          {nav.map((item, i) => (
            <a key={i} href="#" className="text-gray-400 hover:text-white transition">{item}</a>
          ))}
        </nav>

        <button className="border-purple-500 border bg-gradient-to-r from-[#8C01FA] to-[#000000] hover:opacity-90 transition text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50">
          {content.header.cta}
        </button>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 border-t border-gray-800">
          {nav.map((item, i) => (
            <a key={i} href="#" className="block px-4 py-3 text-gray-300 hover:text-white">{item}</a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;