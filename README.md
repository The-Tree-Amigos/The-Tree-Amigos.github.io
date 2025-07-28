# The Tree Amigos - Professional Tree Care Website

A modern, responsive landing page for The Tree Amigos tree care company, designed for GitHub Pages hosting.

## 🌳 Features

- **Responsive Design**: Mobile-first approach optimized for all devices
- **Professional Styling**: Clean, modern design with tree care industry colors
- **Contact Form**: Functional contact form with validation (Formspree integration ready)
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized for fast loading times
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic markup

## 📁 Project Structure

```
tree-amigos/
├── index.html          # Main landing page
├── siteConfig.js       # Centralized configuration
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── main.js         # JavaScript functionality
├── images/             # Image assets
├── docs/
│   └── PRD.md         # Product Requirements Document
├── CLAUDE.md          # Claude Code guidance
└── README.md          # This file
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Add images** to the `images/` directory:
   - `logo.png` (40x40px) - Company logo
   - `hero-tree-care.jpg` - Hero section background image
   - `favicon.ico` - Website favicon
3. **Configure contact form** (see Contact Form Setup below)
4. **Update business information** in `siteConfig.js` if needed
5. **Deploy to GitHub Pages** (see Deployment section)

## 📧 Contact Form Setup

The contact form is ready for Formspree integration:

1. **Sign up** at [Formspree.io](https://formspree.io)
2. **Create a new form** and get your form endpoint
3. **Update the form action** in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```
4. **Test the form** to ensure it's working properly

### Alternative Form Services
- Netlify Forms (if hosting on Netlify)
- Emailjs
- Getform
- FormKeep

## ⚙️ Configuration

All business information is centralized in `siteConfig.js`. Update this file to change:

- Company contact information
- Service offerings
- Business hours
- Social media links
- Value propositions

The website will automatically populate content from this configuration.

## 🎨 Customization

### Colors
The site uses a professional green color scheme:
- Primary Green: `#4a7c59`
- Dark Green: `#2d5016`
- Light backgrounds and earth tones

### Typography
- Primary font: Segoe UI (system font for performance)
- Responsive typography scales appropriately on all devices

### Layout
- Mobile-first responsive design
- CSS Grid and Flexbox for layouts
- Sticky navigation header
- Smooth scrolling between sections

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and up
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## 🔧 Performance Features

- **Lazy loading** for images
- **CSS and JS minification** ready
- **WebP image format** support
- **Optimized fonts** (system fonts for speed)
- **Minimal JavaScript** dependencies

## 🌐 Deployment to GitHub Pages

1. **Push code** to your GitHub repository
2. **Go to repository Settings** → Pages
3. **Select source**: Deploy from a branch
4. **Choose branch**: main (or master)
5. **Select folder**: / (root)
6. **Save** and wait for deployment

Your site will be available at: `https://yourusername.github.io/tree-amigos`

### Custom Domain (Optional)
1. Add a `CNAME` file to the root with your domain name
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

## 🧪 Testing

### Manual Testing Checklist
- [ ] All navigation links work correctly
- [ ] Contact form validates properly
- [ ] Phone numbers are clickable on mobile
- [ ] Site is responsive on all screen sizes
- [ ] Images load correctly with proper alt text
- [ ] Page loads quickly (under 3 seconds)

### Browser Testing
Test in these browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 SEO Features

- **Page title**: Optimized for local search
- **Meta description**: Compelling and keyword-rich
- **Structured data**: Local business markup
- **Open Graph tags**: Social media sharing
- **Semantic HTML**: Proper heading hierarchy
- **Alt text**: All images have descriptive alt text

## 🔒 Security

- **Honeypot field**: Spam protection in contact form
- **Input validation**: Client-side form validation
- **No sensitive data**: No API keys or secrets in frontend code

## 📝 Content Guidelines

- **Professional tone**: Knowledgeable and friendly
- **Local SEO**: Include Ogden and Salt Lake City keywords
- **Value-focused**: Emphasize expertise and tree health
- **Call-to-action**: Clear CTAs for phone calls and estimates

## 🤝 Contributing

1. Review the `docs/PRD.md` for project requirements
2. Check `CLAUDE.md` for development guidelines
3. Test changes thoroughly before deployment
4. Maintain the professional appearance and performance standards

## 📞 Support

For questions about this website:
- Review the documentation in `docs/`
- Check the configuration in `siteConfig.js`
- Ensure all required images are in place
- Test the contact form setup

---

**The Tree Amigos** - "We'll cut you... any tree!" 🌳