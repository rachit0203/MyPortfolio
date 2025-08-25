import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiCode } from 'react-icons/fi';

const projects = [
  {
    id: 1,
    title: 'Vibely – A Real-Time Language Learning & Communication Platform',
    description: 'Vibely is a web application designed for language learners, enabling real-time chat and video calling to practice and enhance conversation skills.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Vite'],
    image: '/projects/vibely.jpg',
    github: 'https://github.com/rachit0203/Vibely',
    demo: 'https://govibely.onrender.com/',
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description: 'A modern personal portfolio website showcasing my skills, projects, and experience with a sleek dark theme and smooth animations.',
    tags: ['React', 'JavaScript', 'Framer Motion', 'Tailwind CSS', 'Vite', 'EmailJS'],
    image: '/projects/portfolio.jpg',
    github: 'https://github.com/rachit0203/MyPortfolio',
    demo: 'https://mishrarachit.onrender.com/',
  },
  {
    id: 3,
    title: 'Disease Prediction Model – A Machine Learning Approach',
    description: 'A machine learning application that predicts multiple diseases based on user-provided symptoms through intuitive input.',
    tags: ['Python', 'Scikit-Learn', 'Streamlit'],
    image: '/projects/social-dashboard.jpg',
    github: 'https://github.com/rachit0203/DiseasePredictionModel',
    demo: 'https://social-dashboard.example.com',
  },
  {
    id: 4,
    title: 'Two-Good-Co',
    description: 'A sleek, interactive landing page showcasing bold typography, smooth animations, and embedded video to captivate and inform visitors.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/recipe-finder.jpg',
    github: 'https://github.com/rachit0203/Two-good-co',
    demo: 'https://recipe-finder.example.com',
  },
  // {
  //   id: 5,
  //   title: 'Portfolio Website',
  //   description: 'A personal portfolio website built with React, Framer Motion, and Tailwind CSS.',
  //   tags: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite'],
  //   image: '/projects/portfolio.jpg',
  //   github: 'https://github.com/yourusername/portfolio',
  //   demo: 'https://yourportfolio.example.com',
  // },
  // {
  //   id: 6,
  //   title: 'Weather App',
  //   description: 'A weather application that displays current weather and forecast using the OpenWeatherMap API.',
  //   tags: ['React', 'OpenWeatherMap API', 'Geolocation', 'CSS Modules'],
  //   image: '/projects/weather-app.jpg',
  //   github: 'https://github.com/yourusername/weather-app',
  //   demo: 'https://weatherapp-demo.example.com',
  // },
];

const Projects = () => {
  const [selectedTag, setSelectedTag] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  // Get all unique tags from projects
  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];

  // Filter projects based on selected tag
  const filteredProjects = selectedTag === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(selectedTag));

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset'; // Re-enable scrolling
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h1>
          <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Click on any project to learn more about it.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedTag === tag
                  ? 'bg-primary text-white dark:bg-primary-dark'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => openModal(project)}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/400x250/1a1a1a/ffffff?text=Project+Image';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary-dark"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs font-medium text-primary bg-primary/10 dark:text-primary-dark dark:bg-primary-dark/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="h-64 md:h-80 w-full overflow-hidden">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = 'https://placehold.co/800x400/1a1a1a/ffffff?text=Project+Image';
                      }}
                    />
                  </div>
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full text-gray-800 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                        {selectedProject.title}
                      </h2>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {selectedProject.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm font-medium text-primary bg-primary/10 dark:text-primary-dark dark:bg-primary-dark/20 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {selectedProject.github && (
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-outline flex items-center gap-2 group"
                        >
                          <FiGithub className="group-hover:translate-y-0.5 transition-transform" />
                          View Code
                        </a>
                      )}
                      {selectedProject.demo && (
                        <a
                          href={selectedProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary flex items-center gap-2 group"
                        >
                          <FiExternalLink className="group-hover:translate-y-0.5 transition-transform" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="prose dark:prose-invert max-w-none">
                    <h3>Project Overview</h3>
                    <p>{selectedProject.description}</p>
                    <h3>Project Details</h3>
                    <p>
                      This project was built using {selectedProject.tags.join(', ')}. It includes features like:
                    </p>
                    <ul>
                      <li>Responsive design that works on all devices</li>
                      <li>Modern UI/UX with smooth animations</li>
                      <li>Optimized performance and accessibility</li>
                      <li>Clean and maintainable code structure</li>
                    </ul>
                    <h3>Technologies Used</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
