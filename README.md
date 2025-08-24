# Personal Portfolio Website

A modern, responsive, and interactive personal portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases my skills, projects, and experience as a Full Stack Web Developer with expertise in modern web technologies and cloud solutions.

## 🚀 Features

- **Modern UI/UX** with smooth animations and transitions
- **Dark/Light Mode** with system preference detection
- **Responsive Design** that works on all devices
- **Interactive Elements** with Framer Motion
- **Particle.js Background** for an engaging hero section
- **Contact Form** with EmailJS integration
- **Project Showcase** with filtering and modal details
- **SEO Optimized** with proper meta tags

## 🛠️ Technologies Used

- ⚛️ React 18
- 🚀 Vite
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 📦 React Icons
- 📧 EmailJS
- 🎯 React Router
- 🎨 Hero Icons
- 🧪 React TSParticles

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Create a `.env` file in the root directory and add your environment variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` folder with the production build.

## 📝 Customization

1. **Update Personal Information**:
   - Update the personal information in the `src/data` directory
   - Replace the profile picture in the `public` folder
   - Update the social media links in the `Footer` and `Contact` components

2. **Styling**:
   - Customize colors in `tailwind.config.js`
   - Update global styles in `src/index.css`

3. **EmailJS Setup**:
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create an email service and template
   - Update the environment variables in `.env`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
