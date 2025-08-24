import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../contexts/ThemeContext';

const Layout = () => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'dark' : ''}`}>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-grow"
      >
        <Outlet />
      </motion.main>
      <Footer />
    </div>
  );
};

export default Layout;
