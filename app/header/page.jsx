import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-600 text-white p-4 text-center">
      <h1 className="text-4xl font-bold">
      Madhav M <sup className="text-sm">He/Him</sup>
      </h1>
      <nav className="mt-4 flex justify-center space-x-6">
        <a href="#about" className="text-white text-lg">About Me</a>
        <a href="#projects" className="text-white text-lg">Projects</a>
        <a href="#education" className="text-white text-lg">Education</a>
        <a href="#contact" className="text-white text-lg">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
