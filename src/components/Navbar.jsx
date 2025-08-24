import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../contexts/ThemeContext';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-dark/80 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative px-2 py-1 text-sm font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary dark:text-primary-dark'
                  : 'text-gray-700 hover:text-primary dark:text-gray-300 dark:hover:text-primary-dark'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="activeNavLink"
                  className="absolute left-0 bottom-0 w-full h-0.5 bg-primary dark:bg-primary-dark"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white dark:bg-dark shadow-lg"
          >
            <div className="container mx-auto px-4 py-2 flex flex-col space-y-2 pb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-3 rounded-md text-base font-medium ${
                    location.pathname === link.path
                      ? 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark'
                      : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
