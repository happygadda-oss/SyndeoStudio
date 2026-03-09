# Syndeo Studio - Premium Social Media Marketing Agency Website

A complete, professional multi-page portfolio website built with modern web technologies.

## 🌟 Features

- **5 Premium Pages**: Home, About, Services, Portfolio, Contact
- **Luxury Design**: Dark/Light theme sections with premium aesthetics
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Smooth Animations**: Fade-ins, hover effects, and scroll animations
- **Functional Contact Form**: Backend-powered form submission
- **Professional Navigation**: Fixed header with mobile menu
- **Custom Styling**: Tailwind CSS + custom CSS
- **Interactive Elements**: JavaScript-powered interactivity

## 📁 Project Structure

```
syndeo-studio/
├── index.html          # Home page
├── about.html          # About page
├── services.html       # Services page
├── portfolio.html      # Portfolio page
├── contact.html        # Contact page
├── styles.css          # Custom CSS styles
├── script.js           # JavaScript functionality
├── server.js           # Node.js Express backend
├── package.json        # Dependencies
└── README.md           # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

### Installation

1. **Navigate to the project directory**
   ```bash
   cd syndeo-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

## 🛠️ Development Mode

For development with auto-reload:

```bash
npm run dev
```

This uses nodemon to automatically restart the server when files change.

## 📄 Pages Overview

### 1. Home Page (index.html)
- Hero section with bold headline
- Services preview grid
- Why choose us section
- Call-to-action section

### 2. About Page (about.html)
- Company introduction
- Statistics showcase
- Mission & Vision
- Our approach/process

### 3. Services Page (services.html)
Detailed sections for all 8 services:
- Poster Designing
- Video Editing
- SEO Optimization
- UI/UX Optimization
- Branding
- Professional Instagram Account Handling
- Post Scheduling
- Organic Growth & Lead Generation

### 4. Portfolio Page (portfolio.html)
- Top 5 poster designs grid
- 3 featured video projects
- Results statistics
- Hover effects and overlays

### 5. Contact Page (contact.html)
- Functional contact form
- Contact information cards
- Email, phone, Instagram, WhatsApp
- Social media links

## 🎨 Design System

### Color Palette
- **Dark Primary**: #0a0a0f
- **Dark Secondary**: #1a1a24
- **Light Primary**: #f8f9fa
- **Light Secondary**: #64748b
- **Accent Primary**: #8b5cf6 (Purple)
- **Accent Secondary**: #6366f1 (Blue)

### Typography
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

### Key Components
- Premium gradient buttons
- Animated service cards
- Interactive portfolio items
- Smooth hover effects
- Responsive navigation

## ⚙️ Backend Features

### Contact Form API
- **Endpoint**: POST `/api/contact`
- **Fields**: name, email, message
- **Validation**: Email format, required fields
- **Response**: JSON success/error messages

### Server Routes
- `/` - Home page
- `/about` - About page
- `/services` - Services page
- `/portfolio` - Portfolio page
- `/contact` - Contact page
- `/api/contact` - Form submission API

## 🔧 Customization

### Update Company Information

1. **Contact Details** (in all files' footer and contact page)
   - Email: `hello@syndeostudio.com`
   - Phone: `+1 (555) 123-4567`
   - Instagram: `@syndeostudio`

2. **Colors** (in `styles.css`)
   - Edit CSS variables in `:root`

3. **Services** (in `services.html`)
   - Add/edit service sections

4. **Portfolio Items** (in `portfolio.html`)
   - Replace placeholder content with actual work

### Adding Email Functionality

Uncomment the nodemailer code in `server.js` and configure:

```bash
npm install nodemailer
```

Then update the email credentials in `server.js`.

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📦 Dependencies

### Production
- **express**: Web server framework
- **cors**: Cross-origin resource sharing

### Development
- **nodemon**: Auto-restart on file changes

## 🎯 Performance Optimizations

- CSS minification ready
- Lazy loading support for images
- Smooth scroll behavior
- Optimized animations
- Efficient event listeners

## 🔒 Security

- Input validation on contact form
- CORS configuration
- XSS protection ready
- Environment variables support

## 📈 Future Enhancements

- Add actual portfolio images/videos
- Integrate email service (SendGrid, Mailgun)
- Add Google Analytics
- Implement blog section
- Add testimonials section
- Create admin dashboard
- Add case studies

## 🐛 Troubleshooting

### Port Already in Use
If port 3000 is already in use:
```bash
PORT=3001 npm start
```

### Dependencies Not Installing
Clear npm cache and retry:
```bash
npm cache clean --force
npm install
```

### Form Not Submitting
Check:
1. Server is running
2. Browser console for errors
3. Network tab in DevTools

## 📞 Support

For issues or questions:
- Email: hello@syndeostudio.com
- Website: [Your Website]

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Tailwind CSS for utility classes
- Google Fonts (Inter & Playfair Display)
- Express.js framework

---

**Built with ❤️ for Syndeo Studio**

Premium Social Media Marketing Agency
