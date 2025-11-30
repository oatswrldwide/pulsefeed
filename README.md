# PulseFeed - Real-time Anonymous Employee Feedback Platform

<p align="center">
  <img src="assets/resources/pulse-icon.svg" alt="PulseFeed Logo" width="120" height="120">
</p>

<p align="center">
  <strong>Modern SaaS platform for anonymous employee feedback with real-time analytics and sentiment analysis</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#project-structure">Project Structure</a> •
  <a href="#technology-stack">Tech Stack</a> •
  <a href="#usage">Usage</a> •
  <a href="#license">License</a>
</p>

---

## 🚀 Overview

PulseFeed is a comprehensive employee feedback platform that enables organizations to collect anonymous feedback, analyze sentiment in real-time, and make data-driven decisions to improve workplace culture and employee engagement.

### Key Highlights

- ✅ **100% Anonymous** - Complete privacy protection with encrypted data transmission
- 📊 **Real-time Analytics** - AI-powered sentiment analysis and trend tracking
- 📱 **Mobile Optimized** - Responsive design for seamless experience on any device
- 🔒 **Enterprise Security** - SOC 2 Type II certified with bank-level encryption
- 💬 **Interactive Feedback** - Emoji reactions, hashtags, and threaded discussions
- 📈 **HR Dashboard** - Comprehensive analytics and moderation tools for HR teams

---

## ✨ Features

### For Employees
- **Anonymous Posting** - Share feedback without revealing identity
- **Sentiment-based Reactions** - React to posts with emoji feedback
- **Hashtag Support** - Categorize feedback with smart tagging
- **Real-time Updates** - See new feedback as it's posted
- **Mobile-first Design** - Access from any device

### For HR/Admins
- **Analytics Dashboard** - Comprehensive insights and trends
- **Sentiment Analysis** - AI-powered emotion detection
- **Content Moderation** - Review and manage feedback
- **Data Export** - Export data for further analysis
- **Alert System** - Get notified of critical feedback
- **Customizable Settings** - Configure platform to your needs

---

## 📂 Project Structure

```
pulsefeed/
├── index.html              # Landing page with features, pricing, and demos
├── assets/                 # Static assets directory
│   └── resources/          # Images, icons, and media files
│       ├── pulse-icon.svg  # Logo/favicon
│       └── .gitkeep        # Placeholder for additional resources
├── css/                    # Stylesheets
│   └── styles.css          # Main stylesheet with animations and utilities
├── js/                     # JavaScript files
│   └── main.js             # Application logic and functionality
├── pages/                  # Application pages
│   ├── admin.html          # HR Admin dashboard
│   └── employee.html       # Employee feedback interface
└── README.md               # Project documentation (this file)
```

### File Descriptions

**Root Files:**
- `index.html` - Marketing landing page with full feature showcase, pricing tiers, testimonials, and interactive demos

**Assets:**
- `assets/resources/` - Contains logos, icons, images, and other static media files
- `pulse-icon.svg` - SVG logo with gradient design

**CSS:**
- `styles.css` - Contains all custom styles including:
  - Gradient effects and animations
  - Card hover effects
  - Custom scrollbar styling
  - Mobile responsive utilities
  - Loading spinners and transitions

**JavaScript:**
- `main.js` - Core application logic including:
  - PulseFeedApp class with state management
  - Demo data initialization
  - Sentiment analysis mock functionality
  - Real-time updates simulation
  - Event handlers and interactions

**Pages:**
- `admin.html` - HR dashboard with analytics, charts, moderation tools, and settings
- `employee.html` - Clean interface for employees to post and view anonymous feedback

---

## 🛠 Technology Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with custom properties
- **Tailwind CSS** - Utility-first CSS framework (via CDN)
- **Vanilla JavaScript** - Pure JS for application logic

### Libraries & Tools
- **Anime.js** - Smooth animations and transitions
- **Typed.js** - Typewriter effects
- **ECharts** - Interactive charts and visualizations
- **P5.js** - Creative particle effects

### Design
- **Inter Font** - Modern, clean typography
- **Gradient Design** - Eye-catching color schemes
- **Responsive Layout** - Mobile-first approach

---

## 🚦 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools required - pure HTML/CSS/JS
- Optional: Local web server for testing

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/oatswrldwide/pulsefeed.git
   cd pulsefeed
   ```

2. **Open in browser**
   
   **Option A: Direct file access**
   ```bash
   # Simply open index.html in your browser
   open index.html  # macOS
   # or
   start index.html  # Windows
   # or
   xdg-open index.html  # Linux
   ```

   **Option B: Local server (recommended)**
   ```bash
   # Using Python
   python -m http.server 8000
   # or Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if you have npx)
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Navigate to the application**
   ```
   http://localhost:8000
   ```

### Quick Start

1. **Landing Page** - Open `index.html` to see the marketing site
2. **Employee View** - Click "Try Demo" or navigate to `/pages/employee.html`
3. **Admin Dashboard** - Navigate to `/pages/admin.html`

---

## 💻 Usage

### For Developers

#### Customizing Styles
Edit `css/styles.css` to customize:
- Color schemes and gradients
- Animation timings
- Typography
- Component styles

#### Modifying Application Logic
Edit `js/main.js` to customize:
- Demo data
- Sentiment analysis rules
- Event handlers
- API integrations (when ready)

#### Adding Pages
1. Create new HTML file in `pages/` directory
2. Link to shared CSS: `<link rel="stylesheet" href="../css/styles.css">`
3. Link to shared JS: `<script src="../js/main.js"></script>`
4. Update navigation in `index.html`

### Deployment

#### Static Hosting (Recommended)
Deploy to any static hosting service:

- **Vercel**
  ```bash
  vercel deploy
  ```

- **Netlify**
  ```bash
  netlify deploy
  ```

- **GitHub Pages**
  ```bash
  git push origin main
  # Enable GitHub Pages in repository settings
  ```

- **AWS S3**
  ```bash
  aws s3 sync . s3://your-bucket-name --exclude ".git/*"
  ```

#### Docker (Optional)
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

```bash
docker build -t pulsefeed .
docker run -p 8080:80 pulsefeed
```

---

## 🎨 Customization

### Branding

1. **Logo**: Replace `assets/resources/pulse-icon.svg` with your logo
2. **Colors**: Update gradient colors in `css/styles.css`
3. **Content**: Edit HTML files to match your messaging

### Configuration

The application currently runs in demo mode with mock data. To connect to a real backend:

1. Replace demo data in `js/main.js`
2. Implement API calls to your backend
3. Update authentication flow
4. Configure real-time updates (WebSocket/SSE)

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is provided as-is for demonstration purposes.

---

## 🙏 Acknowledgments

- Tailwind CSS for the utility framework
- Anime.js for smooth animations
- ECharts for data visualizations
- Inter font family for typography

---

## 📞 Support

For support, questions, or feature requests:
- Open an issue on GitHub
- Contact: [Your contact information]

---

<p align="center">
  Built with ❤️ for better workplace culture
</p>

<p align="center">
  <sub>PulseFeed © 2025</sub>
</p>
