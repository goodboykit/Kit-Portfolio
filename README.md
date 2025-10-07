# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and CSS.

## 🚀 Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive layout that works on all devices
- **Smooth Animations**: Using Framer Motion and AOS for beautiful animations
- **Fast Performance**: Built with Vite for lightning-fast development and optimized builds
- **Interactive Components**: Engaging UI with hover effects and transitions
- **Contact Form**: Integrated contact form with EmailJS
- **SEO Friendly**: Optimized for search engines

## 🛠️ Technologies Used

### Core
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling
- **CSS3** - Custom CSS with CSS variables
- **Responsive Design** - Mobile-first approach

### Animations
- **Framer Motion** - Advanced animations
- **AOS** - Scroll animations
- **React Type Animation** - Typing effect

### Additional Libraries
- **React Icons** - Icon library
- **React Hot Toast** - Toast notifications
- **React Scroll** - Smooth scrolling
- **React Intersection Observer** - Scroll-based visibility
- **EmailJS** - Contact form integration

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/goodboykit/Kit-Portfolio.git
cd Kit-Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

To preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
Kit-Portfolio/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons
│   ├── components/     # React components
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── Hero/
│   │   ├── Navbar/
│   │   ├── Projects/
│   │   └── Skills/
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── styles/         # Global styles
│   │   └── index.css   # Main CSS file with variables
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main App component
│   └── main.jsx        # Entry point
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```

## 🎨 Customization

### Colors
Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary-color: #0ea5e9;
  --secondary-color: #8b5cf6;
  --dark-bg: #0f172a;
  --dark-secondary: #1e293b;
  --dark-tertiary: #334155;
  --light-text: #f8fafc;
  --gray-text: #94a3b8;
}
```

### Content
- Update personal information in component files
- Replace placeholder images with your own
- Modify project data in `Projects.jsx`
- Update skills in `Skills.jsx`
- Add your social media links in `Hero.jsx` and `Footer.jsx`

### EmailJS Setup
To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Update credentials in `src/components/Contact/Contact.jsx`:

```javascript
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  formData,
  'YOUR_PUBLIC_KEY'
)
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **AWS S3/CloudFront**: Upload `dist` folder

## 📄 License

This project is licensed under the ISC License.

## 👤 Author

**Your Name**

- GitHub: [@goodboykit](https://github.com/goodboykit)
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show your support

Give a ⭐️ if you like this project!
