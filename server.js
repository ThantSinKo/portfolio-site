const express = require('express');
const app = express();

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); // For form data

// Sample data for projects
const projects = [
  { 
    id: 1, 
    name: "E-Commerce Website", 
    description: "A full-stack e-commerce website with product catalog, shopping cart, and checkout system.",
    technologies: "Node.js, Express, MongoDB, React"
  },
  { 
    id: 2, 
    name: "Weather Dashboard", 
    description: "A weather application that displays current conditions and forecasts based on location.",
    technologies: "JavaScript, OpenWeather API, HTML5, CSS3" 
  },
  { 
    id: 3, 
    name: "Task Management System", 
    description: "A task manager with features for organizing projects, setting deadlines, and tracking progress.",
    technologies: "Node.js, Express, EJS, CSS"
  }
];

// Sample data for blog posts
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Node.js",
    date: "March 25, 2025",
    excerpt: "A beginner's guide to setting up your first Node.js application.",
    content: "Node.js is a powerful JavaScript runtime that allows developers to use JavaScript for server-side programming..."
  },
  {
    id: 2,
    title: "The Power of Express.js",
    date: "March 30, 2025",
    excerpt: "Learn why Express is the most popular Node.js framework.",
    content: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features..."
  },
  {
    id: 3,
    title: "Creating Dynamic Web Pages with EJS",
    date: "April 2, 2025",
    excerpt: "An introduction to EJS templating and how it simplifies dynamic content.",
    content: "EJS (Embedded JavaScript) is a simple templating language that lets you generate HTML markup with plain JavaScript..."
  }
];

// Store messages from contact form
const messages = [];

// Routes
app.get('/', (req, res) => {
  res.render('index', { projects: projects.slice(0, 2) }); // Show only featured projects on homepage
});

app.get('/projects', (req, res) => {
  res.render('projects', { projects });
});

app.get('/blog', (req, res) => {
  res.render('blog', { blogPosts });
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Form handling
app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  
  // Store message
  messages.push({
    id: messages.length + 1,
    name,
    email,
    message,
    date: new Date().toLocaleDateString()
  });
  
  console.log(`New message from ${name} (${email}): ${message}`);
  res.render('contact-success', { name });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Portfolio server is running on port ${PORT}`);
});