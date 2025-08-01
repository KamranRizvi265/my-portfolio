# Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a clean design with smooth animations and mobile-friendly navigation.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, smooth scrolling, and dynamic content
- **Contact Form**: Functional contact form with validation
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Animations**: CSS animations and JavaScript interactions
- **SEO Friendly**: Semantic HTML structure

## Sections

1. **Hero Section**: Introduction with call-to-action buttons
2. **About Section**: Personal information and statistics
3. **Projects Section**: Showcase of your work
4. **Skills Section**: Technical skills and technologies
5. **Contact Section**: Contact form and information
6. **Footer**: Social links and copyright

## Customization Guide

### Personal Information

1. **Update your name and title** in `index.html`:
   ```html
   <h1 class="hero-title">
       Hi, I'm <span class="highlight">Your Name</span>
   </h1>
   <p class="hero-subtitle">Full Stack Developer & Creative Problem Solver</p>
   ```

2. **Update the about section** with your personal information:
   ```html
   <p>
       I'm a passionate developer with a love for creating meaningful digital experiences...
   </p>
   ```

3. **Update statistics** in the about section:
   ```html
   <div class="stat">
       <h3>3+</h3>
       <p>Years Experience</p>
   </div>
   ```

### Projects

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Description of your project...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
            <a href="your-live-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live
            </a>
        </div>
    </div>
</div>
```

### Skills

Update the skills section with your actual skills:

```html
<div class="skill-item">
    <i class="fab fa-react"></i>
    <span>React</span>
</div>
```

### Contact Information

Update your contact details:

```html
<div class="contact-item">
    <i class="fas fa-envelope"></i>
    <span>your.email@example.com</span>
</div>
<div class="contact-item">
    <i class="fab fa-github"></i>
    <span>github.com/yourusername</span>
</div>
<div class="contact-item">
    <i class="fab fa-linkedin"></i>
    <span>linkedin.com/in/yourusername</span>
</div>
```

### Social Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="your-github"><i class="fab fa-github"></i></a>
    <a href="your-linkedin"><i class="fab fa-linkedin"></i></a>
    <a href="your-twitter"><i class="fab fa-twitter"></i></a>
</div>
```

## Color Scheme

The current color scheme uses:
- Primary Blue: `#2563eb`
- Secondary Yellow: `#fbbf24`
- Dark Gray: `#1f2937`
- Light Gray: `#f8fafc`

To change colors, update the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #fbbf24;
    --dark-color: #1f2937;
    --light-color: #f8fafc;
}
```

## Fonts

The website uses Inter font from Google Fonts. To change fonts:

1. Update the Google Fonts link in `index.html`
2. Change the font-family in `styles.css`:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

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
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider sharing them with the community.

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing your portfolio, feel free to open an issue or reach out!

---

**Happy coding! 🚀** 