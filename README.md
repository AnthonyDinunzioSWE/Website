# FutureVisionMachines Website

A modern, professional website for FutureVisionMachines built with HTML5, CSS3, and JavaScript.

## Features

- 🎨 Modern, glassmorphism design with advanced animations
- 📱 Fully responsive layout for all devices
- ⚡ Fast loading with optimized assets
- 🎭 Interactive UI elements and smooth transitions
- 📧 Contact form with validation
- 🔍 SEO optimized

## Tech Stack

- **Frontend**: HTML5, CSS3 (Custom Grid System), Vanilla JavaScript
- **Fonts**: Space Grotesk, JetBrains Mono
- **Icons**: Lucide Icons
- **Animations**: CSS Animations & Transitions

## Project Structure

```
Website/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles-new.css    # Main stylesheet (current)
│   │   └── styles.css        # Legacy stylesheet
│   ├── js/
│   │   ├── main.js           # Main JavaScript functionality
│   │   └── about-animations.js # About section animations
│   └── images/               # Image assets
├── package.json              # Project metadata
├── render.yaml              # Render.com deployment config
└── README.md                # This file
```

## Deployment on Render.com

This project is configured for easy deployment on Render.com as a static site.

### Steps:

1. **Connect Repository**: Connect your GitHub repository to Render.com
2. **Create Web Service**: Choose "Static Site" option
3. **Configuration**: 
   - Build Command: `echo "Static site - no build required"`
   - Publish Directory: `.` (root directory)
4. **Deploy**: Render will automatically deploy from the connected branch

### Configuration Files:

- `render.yaml`: Contains Render.com deployment configuration
- `package.json`: Provides project metadata and ensures Node.js environment

## Local Development

Simply open `index.html` in a web browser or serve it using a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using Live Server (VS Code extension)
# Right-click index.html and select "Open with Live Server"
```

## Browser Support

- ✅ Chrome (Latest)
- ✅ Firefox (Latest)
- ✅ Safari (Latest)
- ✅ Edge (Latest)

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript bundle
- External font loading optimization
- Responsive images and layouts

## Contact

For questions about this website, please contact FutureVisionMachines.
