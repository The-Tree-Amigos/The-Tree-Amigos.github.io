# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static landing page for The Tree Amigos tree care company, designed to be hosted on GitHub Pages. The site targets high-end homeowners in the Ogden/Salt Lake City area and focuses on converting visitors through phone calls or contact form submissions.

## Technical Architecture

### Static Website Structure
- Pure HTML, CSS, and JavaScript (no build process currently)
- Optimized for GitHub Pages hosting
- Mobile-responsive design with performance focus
- Target: <2MB total page size, <3s load time on 3G

### Configuration Management
All business information should be centralized in a `siteConfig.js` file with this structure:
```javascript
const siteConfig = {
  company: {
    name: "The Tree Amigos",
    tagline: "We'll cut you... any tree!",
    email: "info@placeholder.com", 
    phone: "(555) 123-4567",
    address: "123 Main Street, Ogden, UT 84401"
  },
  serviceArea: "Ogden and Salt Lake City Area",
  hours: "Monday - Saturday: 7:00 AM - 6:00 PM",
  social: { facebook: "#", instagram: "#" }
};
```

## Site Structure Requirements

### Core Sections
1. **Header/Navigation** - Logo, sticky nav, prominent phone number
2. **Hero Section** - Compelling headline with tagline, dual CTAs (estimate form + phone)
3. **Services Section** - Two categories: Production Tree Care and Specialty Services
4. **Value Proposition** - "Why Choose The Tree Amigos" with key differentiators
5. **Contact Section** - Functional contact form + business information
6. **Footer** - Company info, copyright, service area

### Contact Form Requirements
- Required fields: Name, Email, Phone, Address, Service Type, Message
- Use external service (Formspree recommended) for form processing
- Include anti-spam honeypot field
- Proper success/error message handling

## Content Guidelines

### Brand Voice
- Professional, knowledgeable, and friendly
- Target affluent homeowners who value plant care
- Emphasize expertise and tree health focus

### SEO Requirements
- Page title: "The Tree Amigos - Professional Tree Care in Ogden & Salt Lake City"
- Include local keywords (Ogden, Salt Lake City) throughout content
- Semantic HTML structure with proper heading hierarchy
- Alt text for all images
- Structured data for local business

## Performance Standards

### Image Optimization
- Use WebP format when possible
- Implement lazy loading for below-the-fold images
- Compress all images appropriately

### Code Optimization
- Minify CSS and JavaScript before deployment
- Use semantic HTML for accessibility and SEO
- Ensure mobile-first responsive design

## Future Expansion Structure

The codebase should be structured to easily accommodate:
- Gallery/portfolio section for showcasing work
- Blog or educational content section
- Team member profile pages
- Detailed individual service pages
- Customer testimonials section
- Seasonal service offerings

## Development Notes

- No package.json or build tools currently configured
- This is a greenfield project - expect to create the initial website structure
- Focus on clean, maintainable code that can be easily updated by non-developers
- All contact information references should use the central config file