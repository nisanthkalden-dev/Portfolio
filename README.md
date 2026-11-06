# Personal Portfolio Website 🚀

A modern, fully responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, interactive elements, and a professional design perfect for showcasing your work.

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file (all sections)
├── style.css           # CSS styling with animations
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## ✨ Features

### Design & UX
- ✅ Dark theme with modern gradients
- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scrolling navigation
- ✅ Sticky navbar with active section highlighting
- ✅ Professional typography using Poppins font

### Animations & Interactivity
- ✅ Page loader animation
- ✅ Typing animation for skills (hero section)
- ✅ Scroll reveal animations
- ✅ Smooth section transitions
- ✅ Hover effects on cards and buttons
- ✅ Animated progress bars for skills
- ✅ Project filtering by category
- ✅ Parallax effect on floating shapes

### Sections Included
1. **Hero** - Landing section with typing animation
2. **About** - Bio with highlights and social links
3. **Skills** - Categorized skills with progress bars
4. **Education** - Timeline design for degrees/certifications
5. **Projects** - Filterable project showcase with tech stacks
6. **Experience** - Work history timeline
7. **Contact** - Contact form and methods
8. **Footer** - Copyright and credits

### Additional Features
- ✅ Back-to-top button
- ✅ Mobile hamburger menu
- ✅ Form validation
- ✅ Social media links
- ✅ Keyboard navigation support
- ✅ Responsive image handling
- ✅ Performance optimized

## 🚀 Getting Started

### Quick Start
1. Save all three files (index.html, style.css, script.js) in the same folder
2. Open `index.html` in your web browser
3. Customize content (see below)

### Live Viewing
- **Local**: Open the HTML file directly in your browser
- **Online**: Upload to any hosting service (Netlify, Vercel, GitHub Pages, etc.)

## 🎨 Customization Guide

### 1. Update Personal Information

**In `index.html`, find and replace these sections:**

```html
<!-- Hero Section -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>

<!-- About Section -->
<p class="about-description">I'm a passionate Full Stack Developer...</p>

<!-- Contact Section -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

### 2. Customize Skills

Find the Skills section and modify:

```html
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">React.js</span>
        <span class="skill-percent">90%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

**Tips:**
- Keep percentages between 0-100%
- Add or remove skill items as needed
- Categories can be customized

### 3. Update Education

Modify the timeline items:

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="timeline-title">Your Degree Title</h3>
        <p class="timeline-subtitle">Your Field</p>
        <p class="timeline-institution">Your University</p>
        <p class="timeline-date">2020 - 2024</p>
        <p class="timeline-description">Your description here...</p>
    </div>
</div>
```

### 4. Add Your Projects

Replace placeholder projects:

```html
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="path-to-your-image.jpg" alt="Project">
        <div class="project-overlay">
            <a href="https://your-live-demo.com" class="project-link">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="https://github.com/yourrepo" class="project-link">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Name</h3>
        <p class="project-description">Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

**Project Categories Available:**
- `data-category="all"` - Show in all filters
- `data-category="web"` - Web projects
- `data-category="app"` - Applications
- `data-category="design"` - Design work

### 5. Update Work Experience

Modify experience items:

```html
<div class="experience-item">
    <div class="experience-marker"></div>
    <div class="experience-content">
        <h3 class="experience-title">Your Job Title</h3>
        <p class="experience-company">Company Name</p>
        <p class="experience-period">Month Year - Present</p>
        <p class="experience-description">Your responsibilities...</p>
        <ul class="experience-highlights">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

### 6. Update Social Links

Find social media icons and update href:

```html
<a href="https://linkedin.com/in/yourprofile" class="social-link" title="LinkedIn">
    <i class="fab fa-linkedin"></i>
</a>
```

**Available Icons (from Font Awesome):**
- LinkedIn: `fa-linkedin`
- GitHub: `fa-github`
- Twitter: `fa-twitter`
- Instagram: `fa-instagram`
- Portfolio: `fa-globe`

### 7. Add Profile Photo

Replace the placeholder image:

```html
<img src="path-to-your-photo.jpg" alt="Profile Photo">
```

**Recommended:**
- Size: 400x400px or larger
- Format: JPG, PNG, WebP
- Quality: High resolution

### 8. Update Typing Animation

In `script.js`, find and modify the typing words array:

```javascript
new TypingAnimation(typingElement, [
    'Full Stack Developer',
    'MERN Developer',
    'Your Title 1',
    'Your Title 2',
    'Your Title 3'
]);
```

### 9. Modify Color Theme

In `style.css`, update CSS variables at the top:

```css
:root {
    /* Primary gradient colors */
    --primary-color: #6366f1;      /* Indigo */
    --secondary-color: #8b5cf6;    /* Purple */
    --tertiary-color: #ec4899;     /* Pink */
    
    /* Background colors */
    --bg-dark: #0f172a;            /* Dark background */
    --bg-darker: #0a0e27;          /* Darker background */
    --bg-light: #1e293b;           /* Light overlay */
    
    /* Text colors */
    --text-light: #e2e8f0;         /* Light text */
    --text-muted: #94a3b8;         /* Muted text */
    --border-color: #334155;       /* Border color */
}
```

**Popular Color Combinations:**
- Blue theme: `#3b82f6`, `#8b5cf6`, `#ec4899`
- Green theme: `#10b981`, `#14b8a6`, `#06b6d4`
- Orange theme: `#f97316`, `#fb923c`, `#fbbf24`

### 10. Update Footer

Modify copyright and credits:

```html
<p>&copy; 2024 Your Name. All rights reserved.</p>
<p>Designed & Built with <i class="fas fa-heart"></i> using HTML, CSS & JavaScript</p>
```

## 🖼️ Adding Images & Assets

### Project Images
1. Create an `/images` folder in your project directory
2. Add project screenshots/images
3. Update image paths in HTML:
```html
<img src="images/project1.jpg" alt="Project Name">
```

### Profile Photo
- Place in project folder or use a URL
- Update path in About section

### Using External Images
```html
<!-- Placeholder service (replace with your images) -->
<img src="https://via.placeholder.com/400x250?text=Project+Name" alt="Project">

<!-- Your image URL -->
<img src="https://example.com/images/project.jpg" alt="Project">
```

## 📱 Responsive Breakpoints

The website includes responsive design for:
- **Desktop**: 1200px and above
- **Tablets**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 360px

No custom adjustments needed for most devices!

## 🔗 Navigation Setup

The navbar automatically detects scroll position and highlights the active section. Navigation links use `data-section` attributes:

```html
<a href="#home" class="nav-link" data-section="home">Home</a>
```

The section ID must match the href and data-section value.

## 📝 Contact Form Setup

### Current Setup
The contact form currently shows success/error messages locally without sending actual emails.

### To Add Real Email Functionality

**Option 1: EmailJS (Recommended)**
```javascript
// Add EmailJS script before closing </body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>

// In script.js, modify ContactForm class:
submitForm(data) {
    emailjs.init('YOUR_PUBLIC_KEY');
    emailjs.send('SERVICE_ID', 'TEMPLATE_ID', {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message
    }).then(() => {
        this.showStatus('Message sent successfully!', 'success');
    });
}
```

**Option 2: Formspree**
1. Go to [formspree.io](https://formspree.io)
2. Create an account and set up form
3. Replace form action: `<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">`

**Option 3: Backend API**
Create your own API endpoint and send form data to it.

## 🎯 SEO Optimization

Update the meta tags in `<head>`:

```html
<title>Your Name - Full Stack Developer Portfolio</title>
<meta name="description" content="Portfolio of [Your Name], a full stack developer specializing in...">
```

## 📊 Performance Tips

1. **Optimize Images**: Compress images before adding
2. **Use WebP Format**: Convert images to WebP for better performance
3. **Lazy Loading**: Add `loading="lazy"` to images
4. **Minify Code**: For production, minify CSS and JavaScript

## 🐛 Troubleshooting

### Typing animation not working
- Check that `.typing-text` element exists in HTML
- Ensure script.js is loaded correctly

### Scroll animations not triggering
- Add `scroll-reveal` class to elements you want to animate
- Check browser console for JavaScript errors

### Hamburger menu not showing on mobile
- Verify viewport meta tag is present
- Check CSS media queries in style.css

### Links not scrolling properly
- Ensure section IDs match href values
- Check that navbar height is accounted for (80px)

### Images not loading
- Verify correct image paths
- Check file names and extensions
- Try using absolute URLs for external images

## 🚀 Deployment

### Option 1: Netlify (Recommended)
1. Go to [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag files to deploy
3. Your site is live!

### Option 2: Vercel
1. Go to [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 3: GitHub Pages
1. Create a GitHub repository
2. Push your files
3. Enable GitHub Pages in settings
4. Your site is live at `username.github.io`

### Option 4: Traditional Hosting
1. Upload files via FTP/File Manager
2. Ensure index.html is in root directory
3. Access via your domain

## 📚 Browser Support

- ✅ Chrome/Edge (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 📖 Customization Examples

### Change Typing Speed
In `script.js`:
```javascript
new TypingAnimation(typingElement, [...], 50, 25); // Faster typing
```

### Adjust Scroll Reveal Threshold
In `script.js`:
```javascript
this.options = {
    threshold: 0.5, // Change from 0.1
    rootMargin: '0px 0px -50px 0px'
};
```

### Modify Button Colors
In `style.css`:
```css
.btn-primary {
    background: linear-gradient(135deg, #your-color-1, #your-color-2);
}
```

## 🎓 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript.info](https://javascript.info)
- [Font Awesome Icons](https://fontawesome.com/icons)

## 📄 License

This portfolio template is free to use and modify for personal projects.

## 💡 Tips for Best Results

1. **Keep content concise** - Users prefer short, impactful text
2. **Update regularly** - Add new projects and experiences
3. **Use high-quality images** - Professional photos stand out
4. **Test on mobile** - Always check mobile responsiveness
5. **Customize colors** - Match your personal brand
6. **Add personality** - Make it uniquely yours
7. **Keep loading fast** - Optimize images and code
8. **Mobile-first approach** - Design for mobile first

## 🤝 Support & Questions

For issues or questions:
1. Check the Troubleshooting section above
2. Review browser console for error messages
3. Verify all file paths are correct
4. Check Font Awesome CDN is loading

## 🎉 Final Notes

- This is a **production-ready template**
- Feel free to modify everything to match your needs
- Add your own styling and features as needed
- Share your portfolio online to showcase your work!

---

**Made with ❤️ for developers**

Good luck with your portfolio! 🚀
