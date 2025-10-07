// Application Constants

export const SOCIAL_LINKS = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
  email: 'your.email@example.com',
}

export const NAVIGATION = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export const SKILLS_DATA = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript', level: 92 },
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
  ],
  backend: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 82 },
    { name: 'Python', level: 80 },
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 83 },
  ],
  tools: [
    { name: 'Git', level: 90 },
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'Figma', level: 85 },
  ],
}

export const PROJECTS_DATA = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration.',
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=E-Commerce',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Full Stack',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Task+Manager',
    technologies: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather application that provides real-time weather data, forecasts, and interactive maps using external APIs.',
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=Weather+App',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Frontend',
  },
  {
    id: 4,
    title: 'Social Media Dashboard',
    description: 'A comprehensive social media analytics dashboard with data visualization, user engagement metrics, and reporting features.',
    image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Dashboard',
    technologies: ['React', 'D3.js', 'Express', 'PostgreSQL'],
    github: 'https://github.com',
    live: 'https://example.com',
    category: 'Full Stack',
  },
]

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'John Doe',
    position: 'CEO at TechCorp',
    image: 'https://via.placeholder.com/100',
    text: 'Outstanding work! The project was delivered on time and exceeded our expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Product Manager at StartupXYZ',
    image: 'https://via.placeholder.com/100',
    text: 'Excellent developer with great communication skills and attention to detail.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'CTO at InnovateLab',
    image: 'https://via.placeholder.com/100',
    text: 'Highly skilled and professional. Would definitely work together again!',
    rating: 5,
  },
]

export const CONTACT_INFO = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, Country',
}

export const SEO_CONFIG = {
  siteName: 'Your Portfolio',
  siteUrl: 'https://yourportfolio.com',
  defaultTitle: 'Portfolio | Your Name - Full Stack Developer',
  defaultDescription: 'Welcome to my portfolio. I am a passionate full-stack developer specializing in React, Node.js, and modern web technologies.',
  defaultImage: '/og-image.jpg',
  twitterHandle: '@yourusername',
}
