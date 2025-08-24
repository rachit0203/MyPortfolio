import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import ParticlesBackground from "../components/ParticlesBackground";
import { useEffect, useState } from "react";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Add scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollIndicator(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark">
                Full Stack Web Developer
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Hi, I'm <span className="gradient-text">Rachit Mishra</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto"
            >
              I build exceptional digital experiences that are fast, accessible,
              and visually appealing. Specializing in modern web technologies
              and cloud solutions.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/projects"
                className="btn btn-primary flex items-center justify-center gap-2 group"
              >
                View My Work
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                download
                className="btn btn-outline flex items-center justify-center gap-2 group"
              >
                Download CV
                <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <AnimatePresence>
            {showScrollIndicator && (
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                initial={{ opacity: 1 }}
                exit={{
                  opacity: 0,
                  y: 20,
                  transition: { duration: 0.5 },
                }}
              >
                <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-1">
                  <motion.div 
                    className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Quick Intro Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Turning Ideas Into{" "}
              <span className="gradient-text">Digital Reality</span>
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Frontend Development",
                  description:
                    "Building responsive and interactive user interfaces with React.js, Next.js, and modern CSS.",
                  emoji: "💻",
                },
                {
                  title: "Backend Solutions",
                  description:
                    "Creating robust server-side applications with Node.js, Express, and various databases.",
                  emoji: "⚙️",
                },
                {
                  title: "Cloud & DevOps",
                  description:
                    "Deploying and managing applications on cloud platforms with CI/CD pipelines.",
                  emoji: "☁️",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="text-4xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center text-primary dark:text-primary-dark font-medium group"
              >
                Learn more about me
                <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
