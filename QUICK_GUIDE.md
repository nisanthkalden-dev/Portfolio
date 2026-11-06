# Portfolio Website - Quick Customization Guide 🎨

A quick reference for the most common customizations. Each item shows exactly where to find and what to change.

## 🔥 Essential Changes (Do These First!)

### 1. Your Name & Title
**File:** `index.html` | **Line:** ~80 (Hero Section)
```html
<!-- FIND THIS -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">Your Name</span></h1>

<!-- CHANGE TO -->
<h1 class="hero-title">Hi, I'm <span class="gradient-text">John Doe</span></h1>
```

### 2. Hero Subtitle
**File:** `index.html` | **Line:** ~81
```html
<!-- FIND THIS -->
<p class="hero-subtitle">I'm a <span class="typing-text"></span></p>

<!-- CHANGE TYPING WORDS IN script.js -->
new TypingAnimation(typingElement, [
    'Full Stack Developer',
    'MERN Developer', 
    'Your Title Here'    <-- ADD YOUR TITLES
]);
```

### 3. Profile Image
**File:** `index.html` | **Line:** ~168 (About Section)
```html
<!-- FIND THIS -->
<img src="https://via.placeholder.com/400x400?text=Your+Photo" alt="Profile Photo">

<!-- CHANGE TO YOUR IMAGE URL -->
<img src="path-to-your-image.jpg" alt="Profile Photo">

<!-- OR USE ONLINE IMAGE -->
<img src="https://example.com/my-photo.jpg" alt="Profile Photo">
```

### 4. About Description
**File:** `index.html` | **Line:** ~177
```html
<!-- FIND THIS -->
<p class="about-description">
    I'm a passionate Full Stack Developer...
</p>

<!-- REPLACE WITH YOUR BIO -->
```

### 5. Contact Email
**File:** `index.html` | **Line:** ~532
```html
<!-- FIND THIS -->
<p><a href="mailto:your.email@example.com">your.email@example.com</a></p>

<!-- CHANGE TO YOUR EMAIL -->
<p><a href="mailto:john@example.com">john@example.com</a></p>
```

### 6. Contact Phone
**File:** `index.html` | **Line:** ~542
```html
<!-- FIND THIS -->
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>

<!-- CHANGE TO YOUR PHONE -->
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

### 7. Social Media Links
**File:** `index.html` | **Line:** ~201 & ~559
```html
<!-- FIND THESE AND UPDATE href="" -->
<a href="https://linkedin.com/in/yourprofile" class="social-link">
<a href="https://github.com/yourprofile" class="social-link">
<a href="https://twitter.com/yourprofile" class="social-link">
```

## 📚 Content Changes

### Skills Section
**File:** `index.html` | **Lines:** ~217-290

```html
<!-- SKILL TEMPLATE -->
<div class="skill-item">
    <div class="skill-header">
        <span class="skill-name">Skill Name</span>
        <span class="skill-percent">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

**How to customize:**
1. Find the `<div class="skills-category">` sections
2. Copy/delete skill items as needed
3. Change skill name and percentage
4. Update the `style="width: XX%"` to match percentage

### Education Section
**File:** `index.html` | **Lines:** ~318-365

```html
<!-- EDUCATION TEMPLATE -->
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3 class="timeline-title">Degree Name</h3>
        <p class="timeline-subtitle">Field of Study</p>
        <p class="timeline-institution">University Name</p>
        <p class="timeline-date">2020 - 2024</p>
        <p class="timeline-description">Your description...</p>
    </div>
</div>
```

### Projects Section
**File:** `index.html` | **Lines:** ~407-572

```html
<!-- PROJECT TEMPLATE -->
<div class="project-card" data-category="web">
    <div class="project-image">
        <img src="your-image.jpg" alt="Project">
        <div class="project-overlay">
            <a href="https://live-demo.com" class="project-link" title="Live Demo">
                <i class="fas fa-external-link-alt"></i>
            </a>
            <a href="https://github.com/repo" class="project-link" title="GitHub">
                <i class="fab fa-github"></i>
            </a>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Project Name</h3>
        <p class="project-description">Description...</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
        </div>
    </div>
</div>
```

**Category options:** `web`, `app`, `design`

### Experience Section
**File:** `index.html` | **Lines:** ~588-652

```html
<!-- EXPERIENCE TEMPLATE -->
<div class="experience-item">
    <div class="experience-marker"></div>
    <div class="experience-content">
        <h3 class="experience-title">Job Title</h3>
        <p class="experience-company">Company Name</p>
        <p class="experience-period">Jan 2023 - Present</p>
        <p class="experience-description">Description...</p>
        <ul class="experience-highlights">
            <li>Achievement 1</li>
            <li>Achievement 2</li>
        </ul>
    </div>
</div>
```

## 🎨 Design Changes

### Change Primary Colors
**File:** `style.css` | **Lines:** 8-21

```css
:root {
    /* Primary gradient colors - CHANGE THESE */
    --primary-color: #6366f1;      /* Main color */
    --secondary-color: #8b5cf6;    /* Secondary */
    --tertiary-color: #ec4899;     /* Accent */
}
```

### **Color Presets:**

**Blue Theme**
```css
--primary-color: #3b82f6;
--secondary-color: #2563eb;
--tertiary-color: #06b6d4;
```

**Green Theme**
```css
--primary-color: #10b981;
--secondary-color: #14b8a6;
--tertiary-color: #059669;
```

**Orange Theme**
```css
--primary-color: #f97316;
--secondary-color: #fb923c;
--tertiary-color: #fbbf24;
```

**Purple Theme**
```css
--primary-color: #9333ea;
--secondary-color: #a855f7;
--tertiary-color: #ec4899;
```

**Red Theme**
```css
--primary-color: #dc2626;
--secondary-color: #f87171;
--tertiary-color: #fca5a5;
```

## ⚙️ JavaScript Customizations

### Change Typing Animation Words
**File:** `script.js` | **Line:** ~227

```javascript
new TypingAnimation(typingElement, [
    'Full Stack Developer',      <-- CHANGE THESE
    'MERN Developer',
    'Web Designer',
    'UI/UX Enthusiast',
    'Problem Solver'
]);
```

### Adjust Animation Speed
**File:** `script.js` | **Line:** ~227

```javascript
// Parameters: (element, words, typeSpeed, deleteSpeed)
new TypingAnimation(typingElement, [...], 100, 50);
//                                      ↑    ↑
//                            typeSpeed  deleteSpeed
```

Lower = Faster animation

## 📱 Mobile Menu (Hamburger)

The hamburger menu automatically appears on screens smaller than 768px. No changes needed!

## 🔗 Navigation Links

All navigation links are in the navbar (`<nav>` tag). They automatically match sections by ID.

```html
<!-- NAVBAR LINK -->
<a href="#skills" class="nav-link" data-section="skills">Skills</a>

<!-- MUST HAVE MATCHING SECTION -->
<section class="skills" id="skills">...</section>
```

To add a new section:
1. Add link to navbar
2. Create section with matching ID
3. Add smooth scroll automatically works!

## 🏠 Footer

**File:** `index.html` | **Lines:** ~668-674

```html
<p>&copy; 2024 Your Name. All rights reserved.</p>
<p>Designed & Built with <i class="fas fa-heart"></i> by You</p>
```

## 📊 About Section Highlights

**File:** `index.html` | **Lines:** ~189-200

```html
<div class="about-highlights">
    <div class="highlight-item">
        <h4>50+</h4>           <-- Change number
        <p>Projects Completed</p>  <-- Change label
    </div>
```

## 🎯 Recommended Customization Order

1. ✅ Update name and title (takes 2 min)
2. ✅ Add profile photo (takes 2 min)
3. ✅ Update contact info (takes 3 min)
4. ✅ Add about description (takes 5 min)
5. ✅ Update skills (takes 10 min)
6. ✅ Add education (takes 10 min)
7. ✅ Add projects (takes 20 min)
8. ✅ Add experience (takes 10 min)
9. ✅ Customize colors (takes 5 min)
10. ✅ Update social links (takes 5 min)

**Total estimated time: 1-2 hours**

## 🔍 Finding & Replacing

### Quick Find in VS Code
- **Windows/Linux:** `Ctrl + F`
- **Mac:** `Cmd + F`

Then type what you're looking for (e.g., "Your Name")

### Find & Replace
- **Windows/Linux:** `Ctrl + H`
- **Mac:** `Cmd + H`

## ⚡ Pro Tips

1. **Backup files** before making major changes
2. **Test on mobile** after each section update
3. **Keep sentences short** in descriptions
4. **Use 2-3 words** for job titles
5. **Add real links** to your projects
6. **Verify all images** load correctly
7. **Test form** submission works
8. **Check spelling** before publishing

## 🚀 Ready to Deploy?

1. ✅ Test everything works
2. ✅ Check all links are clickable
3. ✅ Verify images load
4. ✅ Test on mobile
5. ✅ Upload to hosting (Netlify, Vercel, etc.)
6. ✅ Share your portfolio!

---

**Need more help?** Check the full `README.md` file for detailed explanations.

**Happy customizing! 🎉**
