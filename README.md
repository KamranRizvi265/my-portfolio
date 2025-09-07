# 🏴‍☠️ Kamran's One Piece Portfolio

A modern, responsive One Piece-themed portfolio website built with HTML, CSS, and JavaScript. Features a pirate-themed design with smooth animations, treasure-hunting adventures, and mobile-friendly navigation. Perfect for showcasing data science projects and skills with a fun, anime-inspired twist!

## Features

- **🏴‍☠️ One Piece Theme**: Complete pirate-themed design with treasure hunting aesthetics
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **✨ Modern UI**: Clean, professional design with smooth animations and gradient backgrounds
- **🎮 Interactive Elements**: Hover effects, smooth scrolling, treasure glow animations, and dynamic content
- **📮 Contact Form**: Functional contact form with Formspree integration
- **🍔 Mobile Navigation**: Hamburger menu for mobile devices with smooth transitions
- **🎨 Smooth Animations**: CSS animations including gradient shifts, floating elements, and treasure glow effects
- **🔍 SEO Friendly**: Semantic HTML structure with proper meta tags
- **🎯 Data Science Focus**: Specifically designed to showcase data science projects and skills
- **⚓ Pirate Statistics**: Interactive stats section showing years sailing, treasures found, and devil fruits mastered

## Sections

1. **🏠 Home (Hero Section)**: Pirate introduction with treasure-hunting call-to-action buttons
2. **👤 About Section**: Personal information and pirate statistics (Years Sailing, Treasures Found, Devil Fruits)
3. **⚔️ Adventures (Projects Section)**: Showcase of data science projects and coding adventures
4. **💪 Powers (Skills Section)**: Technical skills organized into Devil Fruit categories
5. **📮 Contact Section**: Join the crew form and contact information
6. **🏴‍☠️ Footer**: Social links and pirate copyright

## Customization Guide

### Personal Information

1. **Update your name and title** in `index.html`:
   ```html
   <h1 class="hero-title">
       Ahoy! I'm <span class="highlight">Your Name</span> 🏴‍☠️
   </h1>
   <p class="hero-subtitle">Data Scientist & Treasure Hunter of the Digital Seas</p>
   ```

2. **Update the about section** with your personal information:
   ```html
   <p>
       Just like Monkey D. Luffy gathers his crew, I'm assembling the ultimate team of algorithms and techniques 
       to conquer the Grand Line of Data Science! With my Devil Fruit powers in Python, statistics, and AI, 
       I transform chaotic data islands into treasure maps of insights and intelligent solutions.
   </p>
   ```

3. **Update statistics** in the about section:
   ```html
   <div class="stat">
       <h3>1+</h3>
       <p>Years Sailing</p>
   </div>
   <div class="stat">
       <h3>7+</h3>
       <p>Treasures Found</p>
   </div>
   <div class="stat">
       <h3>5+</h3>
       <p>Devil Fruits</p>
   </div>
   ```

### Projects (Adventures)

Replace the sample projects with your own data science adventures:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-tv"></i>
    </div>
    <div class="project-content">
        <h3>🏴‍☠️ Netflix Treasure Hunt</h3>
        <p>Like a true pirate exploring the Grand Line, I navigated through Netflix's vast dataset to discover hidden treasures of content trends, genre popularity, and production islands using my visualization powers!</p>
        <div class="project-tech">
            <span class="tech-tag">🐍 Python</span>
            <span class="tech-tag">📊 Pandas</span>
            <span class="tech-tag">📈 Matplotlib</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> 🏴‍☠️ Treasure Map
            </a>
        </div>
    </div>
</div>
```

### Skills (Devil Fruit Powers)

Update the skills section with your actual skills organized into categories:

```html
<div class="skill-category">
    <h3>🏴‍☠️ Data Science Devil Fruits</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-python"></i>
            <span>Python</span>
        </div>
        <div class="skill-item">
            <i class="fas fa-chart-bar"></i>
            <span>Pandas</span>
        </div>
        <div class="skill-item">
            <i class="fas fa-calculator"></i>
            <span>NumPy</span>
        </div>
    </div>
</div>

<div class="skill-category">
    <h3>🗺️ Treasure Map Creation</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fas fa-table"></i>
            <span>Excel</span>
        </div>
        <div class="skill-item">
            <i class="fas fa-chart-area"></i>
            <span>Power BI</span>
        </div>
    </div>
</div>
```

### Contact Information

Update your contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <a href="mailto:your.email@example.com">your.email@example.com</a>
</div>
<div class="contact-item">
    <i class="fab fa-github"></i>
    <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">github.com/yourusername</a>
</div>
<div class="contact-item">
    <i class="fab fa-linkedin"></i>
    <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourusername</a>
</div>
```

### Social Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="https://github.com/yourusername"><i class="fab fa-github"></i></a>
    <a href="https://www.linkedin.com/in/yourusername/"><i class="fab fa-linkedin"></i></a>
    <a href="https://www.instagram.com/yourusername/"><i class="fab fa-instagram"></i></a>
</div>
```

## Color Scheme

The current One Piece-themed color scheme uses:
- Primary Red: `#e74c3c` (Straw Hat Red)
- Secondary Orange: `#f39c12` (Treasure Gold)
- Dark Blue: `#2c3e50` (Ocean Depths)
- Light Gray: `#f8fafc` (Cloud White)
- Green Accent: `#27ae60` (Forest Green)
- Blue Accent: `#3498db` (Sky Blue)

The portfolio uses gradient backgrounds and dynamic color animations. To change colors, update the specific color values in `styles.css`:

```css
/* Main colors used throughout */
.nav-logo a { color: #e74c3c; }
.highlight { color: #f39c12; }
.btn-primary { background: linear-gradient(135deg, #e74c3c, #f39c12); }
.hero { background: linear-gradient(135deg, #2c3e50 0%, #34495e 25%, #e74c3c 50%, #f39c12 75%, #27ae60 100%); }
```

## Fonts

The website uses two fonts from Google Fonts:
- **Fredoka**: Primary font for headings and playful elements (perfect for the One Piece theme)
- **Inter**: Secondary font for body text and professional content

To change fonts:

1. Update the Google Fonts link in `index.html`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
   ```

2. Change the font-family in `styles.css`:
   ```css
   body {
       font-family: 'Fredoka', 'Inter', sans-serif;
   }
   ```

## Current Projects (Adventures)

The portfolio currently showcases these data science adventures:

### 🤖 Jarvis Voice Assistant
- **Description**: Intelligent voice assistant with speech recognition, Wikipedia search, and web browser integration
- **Technologies**: Python, Speech Recognition, Text-to-Speech, Web Integration
- **GitHub**: [Jarvis Voice Assistant](https://github.com/KamranRizvi265/Jarvis)

### 🏴‍☠️ Netflix Treasure Hunt
- **Description**: Data analysis of Netflix's vast dataset to discover content trends and genre popularity
- **Technologies**: Python, Pandas, Matplotlib
- **GitHub**: [Netflix Analysis](https://github.com/KamranRizvi265/Data_Science_Projects/blob/main/netflix_analysis.ipynb)

### 🏦 Pirate Treasury System
- **Description**: C-based console application for secure treasure management with file handling
- **Technologies**: C, File Handling, Structures
- **GitHub**: [User Management System](https://github.com/KamranRizvi265/C_Projects/blob/main/User%20Management/user_management.c)

## Current Skills (Devil Fruit Powers)

### 🏴‍☠️ Data Science Devil Fruits
- Python, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn

### 🗺️ Treasure Map Creation
- Excel, Power BI, IBM Watson Studio, SQL

### ⚓ Pirate Tools & Weapons
- Git, Jupyter Notebook, VS Code, Google Colab

## Contact Information

**Kamran Rizvi** - Data Science & AI Student
- **Email**: [kamranrizvicadet@gmail.com](mailto:kamranrizvicadet@gmail.com)
- **GitHub**: [github.com/KamranRizvi265](https://github.com/KamranRizvi265)
- **LinkedIn**: [linkedin.com/in/kamran-rizvi-6349761bb](https://www.linkedin.com/in/kamran-rizvi-6349761bb/)
- **Instagram**: [@_silent._.assassin](https://www.instagram.com/_silent._.assassin/)

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select source branch (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify

1. Drag and drop your project folder to Netlify
2. Your site will be deployed automatically
3. You can set up a custom domain in the site settings

### Vercel

1. Connect your GitHub repository to Vercel
2. Vercel will automatically deploy your site
3. You can set up a custom domain in the project settings

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Tips

1. **Optimize images**: Use WebP format and compress images
2. **Minify CSS/JS**: Use tools like UglifyJS and CSSNano
3. **Enable compression**: Use Gzip or Brotli compression
4. **Use CDN**: Serve fonts and libraries from CDN

## File Structure

```
portfolio/
├── index.html          # Main HTML file with One Piece theme
├── styles.css          # CSS styles with pirate animations
├── script.js           # JavaScript functionality
├── MyPhoto(1).png      # Profile photo
├── .gitignore          # Git ignore file
└── README.md           # This file
```

## Contributing

Feel free to fork this project and customize it for your own portfolio! If you make improvements or add new pirate-themed features, consider sharing them with the community.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your One Piece portfolio, feel free to:
- Open an issue on GitHub
- Reach out via email: [kamranrizvicadet@gmail.com](mailto:kamranrizvicadet@gmail.com)
- Connect on LinkedIn: [linkedin.com/in/kamran-rizvi-6349761bb](https://www.linkedin.com/in/kamran-rizvi-6349761bb/)

---

**Happy treasure hunting! 🏴‍☠️⚓** 