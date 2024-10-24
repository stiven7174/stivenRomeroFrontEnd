import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 text-white">
      <div className="flex justify-between items-center">
        <p>&copy; 2024 MyTinerary. All rights reserved.</p>
        <nav className="flex">
          <a href="https://facebook.com/" className="mr-4">Facebook</a>
          <a href="https://x.com" className="mr-4">Twitter</a>
          <a href="https://www.instagram.com/" className="mr-4">Instagram</a>
          <a href="https://web.whatsapp.com/">Contact</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
