# The Music Baby

A music application built with Node.js and static assets.

## Local Development

To run the development server:

```bash
npm install
npm run dev
```

The server will start at `http://127.0.0.1:3000`

## Deployment to Vercel

This project is configured for Vercel deployment. To deploy:

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**:
   ```bash
   vercel
   ```

3. **Or connect your Git repository**:
   - Push your code to GitHub
   - Go to [vercel.com](https://vercel.com)
   - Import your repository
   - Vercel will auto-detect the configuration and deploy

## Project Structure

```
.
├── src/
│   └── index.js              # Node.js server
├── 019ff6e5-466d-7237-b87f-4dcf415b9c12.arena.site/  # Website files
├── package.json              # Dependencies and scripts
├── vercel.json               # Vercel configuration
└── .vercelignore             # Files to exclude from deployment
```

## Features

- ✅ **Mobile Responsive** - Fully optimized for all device sizes
- ✅ **Touch-Friendly** - Enhanced controls for touch devices
- ✅ **Performance Optimized** - Intelligent caching strategies
- ✅ **Progressive Enhancement** - Works on all browsers
- ✅ **Security Headers** - Built-in security headers for production

## Mobile Optimization Details

The website includes:
- Responsive CSS media queries for tablets (≤768px) and phones (≤480px)
- Touch-friendly button sizing (minimum 44x44px)
- Optimized background image handling for mobile
- Apple mobile web app support
- Smart cache control for assets and content

## Environment Variables

The server automatically uses the `PORT` environment variable set by Vercel. No additional configuration needed.

