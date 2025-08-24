import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const socialLinks = [
  {
    name: 'GitHub', 
    icon: <FaGithub className="w-5 h-5" />,
    url: 'https://github.com/rachit0203',
    ariaLabel: 'Visit my GitHub profile'
  },
  {
    name: 'LinkedIn',
    icon: <FaLinkedin className="w-5 h-5" />,
    url: 'https://www.linkedin.com/in/mishra-rachit/',
    ariaLabel: 'Connect with me on LinkedIn'
  },
  {
    name: 'Twitter',
    icon: <FaTwitter className="w-5 h-5" />,
    url: 'https://x.com/_rachit_mishra',
    ariaLabel: 'Follow me on Twitter'
  },
  {
    name: 'Email',
    icon: <FaEnvelope className="w-5 h-5" />,
    url: 'mishrarachitalld@example.com',
    ariaLabel: 'Send me an email'
  }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">Rachit Mishra</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Full Stack Developer & Cloud Enthusiast
            </p>
          </div>
          
          <div className="flex space-x-6
          ">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-gray-500 dark:text-gray-500 text-sm">
          <p>© {currentYear} Rachit Mishra. All rights reserved.</p>
          <p className="mt-2">
            Built with ❤️ using React, Tailwind CSS, and Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
