import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 px-4">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-primary dark:text-primary-dark mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link
            to="/"
            className="btn btn-primary inline-flex items-center gap-2 group"
          >
            <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
