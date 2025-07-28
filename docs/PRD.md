# Product Requirements Document: The Tree Amigos Landing Page

## Project Overview
Build a static landing page for The Tree Amigos tree care company to be hosted on GitHub Pages. The site should establish credibility, communicate expertise, and drive conversions through phone calls or contact form submissions.

## Company Information
- **Company Name:** The Tree Amigos
- **Tagline:** "We'll cut you... any tree!"
- **Service Area:** Ogden/Salt Lake City area
- **Target Audience:** High-end homeowners who value their plants and want professional tree care services

## Technical Requirements

### Platform & Hosting
- Static website (HTML, CSS, JavaScript)
- Optimized for GitHub Pages hosting
- Mobile-responsive design
- Fast loading performance

### Configuration Management
- Create a `config.js` or similar file containing all contact information and business details
- All contact placeholders should reference this central configuration file
- This allows easy updates across the entire site by editing a single file

## Design Requirements

### Brand Guidelines
- **Mood:** Professional, knowledgeable, and friendly
- **Logo:** Company has existing logo (to be provided separately)
- **Color Scheme:** Suggest natural, professional colors (greens, earth tones) but await specific brand colors
- **Typography:** Clean, readable fonts that convey professionalism

### Visual Design Principles
- Clean, modern layout
- High-quality imagery showcasing tree care work
- Professional appearance that appeals to affluent homeowners
- Balanced use of whitespace
- Consistent visual hierarchy

## Site Structure & Content

### 1. Header/Navigation
- Company logo
- Company name
- Sticky navigation with smooth scroll to sections
- Phone number (prominent, clickable on mobile)
- Navigation items: Services, About, Contact

### 2. Hero Section
- Compelling headline incorporating the tagline
- Brief value proposition focused on expertise and plant care
- Primary CTA: "Get Free Estimate" (links to contact form)
- Secondary CTA: Phone number button
- Hero image: Professional tree care in action or beautiful maintained trees

### 3. Services Section
- Section title: "Our Services" or "How We Care for Your Trees"
- Two main service categories:
  
  **Production Tree Care:**
  - Tree Pruning & Trimming
  - Tree Removal
  - Stump Grinding
  - Cabling & Bracing
  - Crown Reduction
  
  **Specialty Services:**
  - Tree Health Consultations
  - Disease & Pest Diagnosis
  - Plant Healthcare Programs
  - Risk Assessment
  - Arborist Reports

### 4. Value Proposition Section
- Title: "Why Choose The Tree Amigos"
- Key differentiators:
  - Certified arborists
  - Focus on tree health and longevity
  - Serving high-end properties in Ogden/SLC
  - Free estimates and consultations
  - Professional, knowledgeable team
  - Commitment to preserving valuable trees

### 5. Contact Section
- Section title: "Get Your Free Estimate"
- Two-column layout:
  - Left: Contact form
  - Right: Contact information and service area details

#### Contact Form Requirements:
- Fields:
  - Name (required)
  - Email (required)
  - Phone (required)
  - Address/Property Location
  - Service Needed (dropdown)
  - Message/Description
- Form should be functional (recommend using Formspree or similar service)
- Success/error messages
- Anti-spam measures (honeypot field)

### 6. Footer
- Company name and tagline
- Copyright notice
- Contact information
- Service area
- Link to privacy policy (if needed)

## Placeholder Content Structure

Create a `siteConfig.js` file with the following structure:

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
  social: {
    facebook: "#",
    instagram: "#"
  }
};
```

## SEO Requirements
- Proper meta tags for each page
- Semantic HTML structure
- Alt text for all images
- Local SEO optimization:
  - Include city names in content
  - Structured data for local business
- Page title: "The Tree Amigos - Professional Tree Care in Ogden & Salt Lake City"
- Meta description focusing on expertise and service area

## Performance Requirements
- Optimize all images (WebP format preferred)
- Lazy load images below the fold
- Minify CSS and JavaScript
- Total page size under 2MB
- Load time under 3 seconds on 3G

## Future Expansion Considerations
Structure the code to easily add:
- Gallery/portfolio section
- Blog or educational content
- Team member profiles
- Detailed service pages
- Customer testimonials
- Seasonal service offerings

## Deliverables
1. Complete static website files
2. README with setup and deployment instructions
3. Configuration file for easy content updates
4. Basic documentation for future modifications

## Success Metrics
- Professional appearance that builds trust
- Clear calls-to-action
- Easy contact methods
- Mobile-friendly experience
- Fast loading times
- Easy to maintain and update