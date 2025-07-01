import { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#skills", text: "Skills" },
    { href: "#projects", text: "Projects" },
    { href: "#experience", text: "Experience" },
    { href: "#education-certifications", text: "Education" },
    { href: "#contact", text: "Contact" },
  ];

  return (
    <nav className="bg-slate-800 p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-cyan-400 hover:text-cyan-300">
          Madhur N Patel
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="hover:text-cyan-400 transition-colors duration-200">
              {link.text}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-slate-200 hover:text-cyan-400 focus:outline-none focus:text-cyan-400"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              // X icon for close
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3">
          <ul className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-2 px-3 text-center text-slate-200 hover:bg-slate-700 hover:text-cyan-400 rounded transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)} // Close menu on link click
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
