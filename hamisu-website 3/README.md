# Hamisu Interior Design Website

A premium, fully responsive HTML/CSS/JavaScript website for **Hamisu 哈米舒艺居**, a Malaysian interior design company specialising in warm minimalist and Japandi-style spaces.

## Overview

This is a modern, performance-optimized static website built with pure HTML, CSS, and vanilla JavaScript (no frameworks). The design reflects Hamisu's warm minimalist aesthetic with an elegant Japandi influence.

### Key Features

✓ **Fully Responsive Design** - Desktop, tablet, and mobile optimized
✓ **Premium Aesthetics** - Warm minimalist color palette with Japandi styling
✓ **Advanced Portfolio** - Interactive lightbox with thumbnail navigation
✓ **Smart Filtering** - Filter portfolio by room type (Bedroom, Living Room, Wardrobe, Full Home)
✓ **Mobile Navigation** - Smooth hamburger menu for mobile devices
✓ **Scroll Animations** - Smooth fade-in animations on scroll
✓ **WhatsApp Integration** - Direct contact buttons and floating WhatsApp button
✓ **SEO Optimized** - Semantic HTML, meta tags, and local business schema markup
✓ **Fast Loading** - No heavy dependencies, optimized for performance
✓ **Vercel Ready** - Static files ready for deployment

## Project Structure

```
hamisu-website/
├── index.html              # Main HTML file with all sections
├── css/
│   └── styles.css         # Complete stylesheet with responsive design
├── js/
│   └── main.js            # Vanilla JavaScript for interactivity
├── images/                # Image directory (for future replacement)
├── assets/                # Additional assets directory
└── README.md              # This file
```

## Website Sections

1. **Navigation** - Fixed top navigation with logo, menu links, WhatsApp icon, and CTA button
2. **Hero Section** - Full-screen hero with elegant headline and call-to-action buttons
3. **Portfolio** - 6 project cards with category filtering and lightbox modal
4. **Services** - 4 service offerings with descriptions
5. **About** - Company philosophy and core values
6. **Process** - 4-step workflow visualization
7. **Map** - Google Maps embed with studio location and contact info
8. **Contact** - Contact form with WhatsApp integration
9. **Footer** - Branding, quick links, and social media
10. **Floating Button** - Always-visible WhatsApp contact button

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Warm Cream | #F5F0E8 | Primary background |
| Soft Beige | #EDE8DF | Secondary background |
| Deep Brown | #2C1F14 | Dark accents, text |
| Warm Brown | #8B6347 | Wood tone accents |
| Muted Gold | #C4954A | Gold accents, highlights |
| Grey Text | #6B6560 | Body text |
| Off White | #FDFAF6 | White elements |

## Typography

- **Headlines**: Cormorant Garamond (elegant, refined)
- **Body Text**: DM Sans (clean, readable)
- **Chinese Text**: Noto Serif SC (elegant Chinese characters)

All fonts are loaded from Google Fonts CDN.

## Responsive Breakpoints

- **Desktop**: 1200px+ (3-column portfolio grid)
- **Tablet**: 768px - 1024px (2-column portfolio grid)
- **Mobile**: Below 768px (1-column portfolio grid, hamburger menu)

## JavaScript Features

### Mobile Navigation
- Hamburger menu toggle for mobile devices
- Smooth menu animations
- Auto-close on link click

### Navbar Scroll Effect
- Adds subtle border on scroll
- Maintains fixed positioning

### Portfolio Filtering
- Filter by category: All, Bedroom, Living Room, Wardrobe, Full Home
- Smooth animations on filter change
- Active state indication

### Lightbox Modal
- Click "View Project" to open modal
- Thumbnail navigation
- Arrow key navigation (left/right)
- Escape key to close
- Click outside to close
- Smooth fade animations

### Contact Form
- Integrates with WhatsApp API
- Pre-fills message with form data
- Opens WhatsApp Web/App directly

### Scroll Animations
- Elements fade in as they enter viewport
- Uses Intersection Observer API
- Smooth transitions

## SEO Features

- **Title Tag**: "Hamisu Interior | Warm Minimalist Interior Design Shah Alam Malaysia"
- **Meta Description**: Optimized for local search
- **Semantic HTML**: Proper heading hierarchy and structure
- **Local Business Schema**: JSON-LD markup for local business information
- **Alt Tags**: All images have descriptive alt text
- **Open Graph Tags**: Social media sharing optimization

## Customization Guide

### Replacing Placeholder Images

All portfolio images are currently SVG placeholders. To replace them:

1. Replace the SVG data URIs in `index.html` with actual image URLs
2. Or save images to `images/` folder and reference them:
   ```html
   <img src="images/project-1.jpg" alt="Project name">
   ```

### Updating Contact Information

Edit these values in `index.html`:
- WhatsApp number: `https://wa.me/601135887299`
- Phone number: `+60 11-3588 7299`
- Address: Update the map embed and contact section
- Social media links: Update footer social links

### Modifying Colors

Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-bg: #F5F0E8;
    --secondary-bg: #EDE8DF;
    --dark-accent: #2C1F14;
    /* ... etc */
}
```

### Adding More Portfolio Projects

1. Add a new card in the portfolio grid
2. Add project data to the `portfolioData` object in `js/main.js`
3. Assign appropriate `data-category` attribute

## Browser Compatibility

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations

- No external frameworks or heavy libraries
- Optimized CSS with minimal specificity
- Vanilla JavaScript for fast execution
- Intersection Observer for efficient scroll animations
- SVG icons for crisp rendering
- Lazy loading ready for images

## Deployment

### Vercel (Recommended)
1. Push to GitHub repository
2. Connect to Vercel
3. Deploy automatically on push

### Other Static Hosts
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

Simply upload all files to your hosting provider.

## Local Development

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

## File Sizes

- `index.html`: ~35 KB
- `css/styles.css`: ~28 KB
- `js/main.js`: ~18 KB
- **Total**: ~81 KB (before gzip compression)

## Future Enhancements

- [ ] Add actual project images
- [ ] Implement backend contact form
- [ ] Add blog section
- [ ] Integrate with CMS
- [ ] Add testimonials section
- [ ] Implement booking system
- [ ] Add before/after image slider
- [ ] Multi-language support

## Support & Maintenance

For updates or modifications:
1. Edit HTML structure in `index.html`
2. Update styles in `css/styles.css`
3. Modify JavaScript in `js/main.js`
4. Test on multiple devices
5. Deploy to production

## License

© 2026 Hamisu 哈米舒艺居. All rights reserved.

---

**Built with care for warm, minimalist spaces.** ✨
