# Hamisu Website - Deployment Guide

This document provides step-by-step instructions for deploying the Hamisu Interior Design website to various platforms.

## Quick Start

### Local Testing
```bash
cd hamisu-website
python3 -m http.server 8000
# Visit http://localhost:8000
```

---

## Deployment Options

### 1. Vercel (Recommended - Easiest)

**Pros**: Free tier, automatic deployments, excellent performance, CDN included

**Steps**:
1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Your site is live!

**Custom Domain**:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

---

### 2. Netlify

**Pros**: Free tier, drag-and-drop deployment, form handling

**Steps**:
1. Visit [netlify.com](https://netlify.com)
2. Click "New site from Git" or drag-and-drop the folder
3. Select your repository
4. Deploy settings are pre-configured
5. Click "Deploy Site"

**Custom Domain**:
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records

---

### 3. GitHub Pages

**Pros**: Free, integrated with GitHub

**Steps**:
1. Create a GitHub repository named `yourusername.github.io`
2. Push all files to the repository
3. Your site is automatically live at `https://yourusername.github.io`

**Custom Domain**:
1. Add `CNAME` file with your domain name
2. Update DNS records to point to GitHub Pages

---

### 4. AWS S3 + CloudFront

**Pros**: Scalable, reliable, pay-as-you-go

**Steps**:
1. Create S3 bucket with your domain name
2. Enable "Static website hosting"
3. Upload all files
4. Create CloudFront distribution
5. Point domain to CloudFront

---

### 5. Traditional Web Hosting

**Steps**:
1. Upload all files via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Configure DNS to point to your hosting provider
4. Your site is live!

---

## Pre-Deployment Checklist

- [ ] All placeholder images replaced with actual project photos
- [ ] Contact information updated (phone, WhatsApp, address)
- [ ] Social media links configured
- [ ] Google Maps embed updated with correct location
- [ ] Meta tags reviewed and optimized
- [ ] All links tested and working
- [ ] Mobile responsiveness verified
- [ ] Performance tested (Lighthouse score)
- [ ] SEO meta tags verified
- [ ] Analytics code added (if applicable)

---

## Post-Deployment Tasks

### 1. Set Up Analytics
Add Google Analytics to track visitors:
```html
<!-- Add this before </head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

### 2. Set Up Contact Form Backend
Currently, the contact form redirects to WhatsApp. To store submissions:
- Use Formspree, Basin, or similar service
- Or build a backend with Node.js/Python

### 3. Enable HTTPS
- Vercel/Netlify: Automatic
- GitHub Pages: Automatic
- AWS S3: Use CloudFront with ACM certificate
- Traditional hosting: Purchase SSL certificate

### 4. Set Up Email Notifications
Configure WhatsApp Business API or email service for form submissions.

### 5. Monitor Performance
- Set up uptime monitoring
- Monitor Core Web Vitals
- Track user behavior with analytics

---

## Performance Optimization

### Current Performance
- **Page Size**: ~81 KB (uncompressed)
- **Load Time**: <1 second (typical)
- **Lighthouse Score**: 95+ (performance)

### Further Optimizations
1. **Image Optimization**
   - Use WebP format for images
   - Compress images (TinyPNG, ImageOptim)
   - Implement lazy loading

2. **Caching**
   - Enable browser caching
   - Use CDN (Vercel/Netlify/CloudFront)
   - Set appropriate cache headers

3. **Minification**
   - Minify CSS and JavaScript
   - Remove unused code

---

## SSL/HTTPS

All modern hosting platforms provide free HTTPS:
- **Vercel**: Automatic
- **Netlify**: Automatic
- **GitHub Pages**: Automatic
- **AWS**: Use ACM certificate
- **Traditional**: Purchase or use Let's Encrypt

---

## Domain Setup

### DNS Records Needed
Depending on your hosting provider, you may need to add:
- **A Record**: Points to hosting IP
- **CNAME Record**: For subdomains
- **MX Record**: For email (if applicable)

### Popular Domain Registrars
- GoDaddy
- Namecheap
- Google Domains
- Cloudflare

---

## Troubleshooting

### Site Not Loading
1. Check DNS propagation (dns-checker.com)
2. Verify files are uploaded correctly
3. Check browser cache (Ctrl+Shift+Delete)
4. Review hosting provider logs

### Images Not Showing
1. Verify image paths are correct
2. Check image file permissions
3. Ensure images are uploaded to correct directory
4. Check browser console for errors

### Form Not Working
1. Verify WhatsApp number is correct
2. Test on mobile device
3. Check browser console for JavaScript errors
4. Ensure form fields have correct names

### Slow Performance
1. Optimize images
2. Enable gzip compression
3. Use CDN
4. Check server response time
5. Review Lighthouse report

---

## Maintenance

### Regular Tasks
- [ ] Monitor uptime
- [ ] Review analytics
- [ ] Update content as needed
- [ ] Check for broken links
- [ ] Monitor performance metrics
- [ ] Update portfolio with new projects
- [ ] Respond to inquiries promptly

### Backup
- Keep local backup of all files
- Use version control (Git)
- Consider automated backups

---

## Support

For deployment issues:
1. Check platform-specific documentation
2. Review error logs
3. Contact hosting provider support
4. Check community forums

---

**Last Updated**: April 2026
**Website Version**: 1.0.0
