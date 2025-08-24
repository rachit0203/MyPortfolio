import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiGraphql, SiMongodb, SiPostgresql, SiTailwindcss, SiJest } from 'react-icons/si';

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact className="w-8 h-8" />, level: 95 },
    { name: 'TypeScript', icon: <SiTypescript className="w-8 h-8" />, level: 90 },
    { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8" />, level: 90 },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8" />, level: 85 },
    { name: 'GraphQL', icon: <SiGraphql className="w-8 h-8" />, level: 80 },
    { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8" />, level: 85 },
    { name: 'PostgreSQL', icon: <SiPostgresql className="w-8 h-8" />, level: 80 },
    { name: 'AWS', icon: <FaAws className="w-8 h-8" />, level: 75 },
    { name: 'Docker', icon: <FaDocker className="w-8 h-8" />, level: 80 },
    { name: 'Git', icon: <FaGitAlt className="w-8 h-8" />, level: 90 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8" />, level: 95 },
    { name: 'Jest', icon: <SiJest className="w-8 h-8" />, level: 85 },
  ];

  const experiences = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      duration: '2021 - Present',
      description: 'Leading the development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
    },
    {
      role: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      duration: '2019 - 2021',
      description: 'Developed and maintained multiple client projects. Implemented CI/CD pipelines and improved application performance by 40%.',
    },
    {
      role: 'Frontend Developer',
      company: 'WebCraft Studios',
      duration: '2017 - 2019',
      description: 'Built responsive user interfaces and collaborated with designers to implement pixel-perfect designs.',
    },
  ];

  const education = [
    {
      degree: 'Master of Computer Science',
      institution: 'Tech University',
      year: '2015 - 2017',
      description: 'Specialized in Software Engineering and Cloud Computing',
    },
    {
      degree: 'Bachelor of Technology in Computer Science',
      institution: 'State University',
      year: '2011 - 2015',
      description: 'Graduated with honors',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h1>
            <div className="w-24 h-1 bg-primary dark:bg-primary-dark mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I'm a passionate Full Stack Developer with expertise in modern web technologies and cloud solutions.
              I love building things that live on the internet.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 items-center">
            <motion.div 
              className="md:col-span-1 flex justify-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 dark:border-primary-dark/30">
                  <img 
                    src="/profile.jpg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/256';
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-primary dark:bg-primary-dark text-white px-6 py-2 rounded-full font-medium">
                  Available for work
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="md:col-span-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold mb-6">Who am I?</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                I'm a Full Stack Developer with over 5 years of experience in building web applications. 
                My journey in web development started when I was in college, and since then, I've been 
                passionate about creating seamless user experiences and robust backend systems.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I specialize in JavaScript technologies across the stack (React, Node.js, Express, MongoDB) 
                and have extensive experience working with cloud platforms like AWS. I'm a strong believer in 
                clean code, testing, and continuous learning.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/resume.pdf"
                  download
                  className="btn btn-primary flex items-center gap-2 group"
                >
                  Download CV
                  <FiDownload className="group-hover:translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline"
                >
                  Contact Me
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Skills</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with on a regular basis.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center justify-center mb-4 text-primary dark:text-primary-dark">
                  {skill.icon}
                </div>
                <h3 className="text-center font-medium mb-2">{skill.name}</h3>
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="gradient-text">Experience</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A summary of my professional journey so far.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-12 border-l-2 border-gray-200 dark:border-gray-700 last:pb-0 last:border-0 group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute -left-2 w-4 h-4 rounded-full bg-primary dark:bg-primary-dark group-hover:scale-125 transition-transform"></div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-sm text-primary dark:text-primary-dark font-medium">{exp.duration}</span>
                  <h3 className="text-xl font-bold mt-1 mb-2">{exp.role}</h3>
                  <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{exp.company}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="gradient-text">Education</span></h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My academic background and qualifications.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-sm hover:shadow-md transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary dark:bg-primary-dark/20 dark:text-primary-dark mb-4">
                  {edu.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-300 mb-3">{edu.institution}</h4>
                <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
