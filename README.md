# Swiftel - Fiber Internet Service Provider Website

A modern, responsive website for Swiftel, a fictional fiber-internet service provider in Kenya. Built with clean HTML, CSS, and JavaScript.

## Features

- ⚡ **Hero Section** - Eye-catching header with tagline and call-to-action buttons
- 📦 **Plans & Packages** - Three subscription tiers (Basic, Standard, Premium) with clear pricing
- ✨ **Why Choose Us** - Features section highlighting reliability, speed, and customer service
- 📍 **Coverage Areas** - Service coverage information for Nairobi and surrounding areas
- 📧 **Contact Form** - Sign-up form with validation for customer inquiries
- 🎨 **Modern Design** - Clean teal/navy color scheme with smooth animations
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## Color Scheme

- **Primary (Teal)**: `#008080`
- **Secondary (Dark Navy)**: `#013440`
- **Background**: `#FFFFFF` and `#F8F8F8`
- **Button Hover**: `#006666` (darker teal)

You can customize these colors in the CSS variables section at the top of `styles.css`.

## Getting Started

### Option 1: Direct HTML/CSS/JS (No Build Required)

Simply open `index.html` in your web browser. No build process required!

### Option 2: Using Vite (Optional - for development)

If you want to use Vite for development with hot reload:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
swiftel/
├── index.html      # Main HTML file with all sections
├── styles.css      # All CSS styles and color scheme
├── script.js       # JavaScript for interactivity and form handling
├── package.json    # Node.js dependencies (optional, for Vite)
└── README.md       # This file
```

## Website Sections

1. **Navigation** - Fixed navbar with smooth scroll links
2. **Hero** - High-impact hero section with tagline and CTAs
3. **Plans** - Three internet packages (Basic, Standard, Premium) with pricing
4. **Why Choose Us** - Feature cards highlighting benefits
5. **Coverage** - Service areas in Nairobi and beyond
6. **Contact** - Sign-up form and contact information
7. **Footer** - Links, social media, and legal information

## Customization

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --primary-color: #008080;        /* Change to your brand's primary */
    --secondary-color: #013440;      /* Change to your brand's secondary */
    --primary-hover: #006666;        /* Button hover color */
    /* ... other colors */
}
```

### Updating Plans/Pricing

Edit the plan cards in `index.html` within the `#plans` section. Update:
- Plan names
- Prices (KES amounts)
- Speeds (Mbps)
- Features list

### Modifying Content

- **Hero Section**: Edit the hero title and subtitle in `index.html`
- **Coverage Areas**: Update the area lists in the coverage section
- **Contact Info**: Modify phone numbers, email, and address in the contact section
- **Footer**: Update social media links and footer content

## Form Handling

The contact form currently uses mock data (logs to console). To integrate with a backend:

1. Update the form submission handler in `script.js`
2. Replace the console.log with a fetch API call to your backend endpoint
3. Handle success/error responses appropriately

Example backend integration code is commented in `script.js` for reference.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Notes

- All content is fictional and created for demonstration purposes
- Phone numbers and email addresses are placeholder values
- Coverage areas listed are examples - update with actual service areas
- Images use placeholder/generic designs - replace with actual brand assets

## Future Enhancements

- Backend integration for contact form
- Real-time coverage checker
- Online payment integration
- Customer portal/login
- Live chat support
- Blog/news section
- Testimonials/reviews section
- Dark mode toggle
- Multi-language support (English/Swahili)
