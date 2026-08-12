import http from 'http';
import { fileURLToPath } from 'url';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../019ff6e5-466d-7237-b87f-4dcf415b9c12.arena.site');

// MIME type mapping
const getMimeType = (ext) => {
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.svg': 'image/svg+xml',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.ico': 'image/x-icon',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
    '.ttf': 'font/ttf',
  };
  return mimeTypes[ext.toLowerCase()] || 'application/octet-stream';
};

const server = http.createServer((req, res) => {
  // Normalize URL and prevent directory traversal
  let urlPath = req.url === '/' ? 'index.html' : req.url.split('?')[0];
  
  // Security: normalize path to prevent traversal attacks
  urlPath = path.normalize(urlPath).replace(/^(\.\.[\/\\])+/, '');
  
  let filePath = path.join(siteDir, urlPath);
  
  // Ensure the resolved path is within siteDir
  if (!filePath.startsWith(siteDir)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('Forbidden');
    return;
  }
  
  fs.readFile(filePath, (err, data) => {
    if (err) {
      // Try index.html as fallback for directory requests
      if (err.code === 'EISDIR') {
        fs.readFile(path.join(filePath, 'index.html'), (err2, data2) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
            return;
          }
          res.writeHead(200, { 'Content-Type': getMimeType('.html') });
          res.end(data2);
        });
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
      }
      return;
    }
    
    const ext = path.extname(filePath);
    const contentType = getMimeType(ext);
    
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log('\n🎵 The Music Baby - Server\n');
  console.log(`✅ Server is running on port ${PORT}!\n`);
  if (PORT === 3000) {
    console.log('👉 Open your browser at:\n');
    console.log('   http://127.0.0.1:3000\n');
    console.log('Press CTRL+C to stop the server\n');
  }
});
