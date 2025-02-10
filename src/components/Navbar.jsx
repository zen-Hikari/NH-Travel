import Logo from './assets/logo.svg';
import './Global.css';
import { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk toggle menu hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full z-10 bg-transparent text-white py-10">
      <div className="mx-auto sm:mx-[50px] flex justify-between items-center px-8">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex flex-col justify-center items-center space-y-2"
          onClick={toggleMenu}
        >
          <span className={`span-line w-8 h-[4px] rounded-2xl bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-3' : ''}`}></span>
          <span className={`span-line w-5 ml-auto h-[4px] rounded-2xl bg-white transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`span-line w-8 h-[4px] rounded-2xl bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-3' : ''}`}></span>
        </button>

        {/* Menu Links */}
        <div className={`link-menu flex gap-10 text-lg font-semibold ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
          <a href="#" className="hover:text-gray-300 transition">Home</a>
          <a href="#about" className="hover:text-gray-300 transition">About</a>
          <a href="#discover" className="hover:text-gray-300 transition">Discover</a>
          <a href="#place" className="hover:text-gray-300 transition">Place</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
