// const http = require('http');
// const fetch = require('node-fetch');

// const port = 3000;

// const server = http.createServer(async (req, res) => {
//   if (req.method === 'POST' && req.url === '/submitForm') {
//     try {
//       let requestBody = '';
//       req.on('data', (chunk) => {
//         requestBody += chunk.toString();
//       });
//       req.on('end', async () => {
//         const formData = JSON.parse(requestBody);
//         const response = await fetch('https://formspree.io/f/xoqgneek', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//             // Add any other headers required by Formspree
//           },
//           body: JSON.stringify(formData),
//         });
//         const responseData = await response.json();
//         res.writeHead(response.status, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(responseData));
//       });
//     } catch (error) {
//       console.error(error);
//       res.writeHead(500, { 'Content-Type': 'application/json' });
//       res.end(JSON.stringify({ message: 'Internal server error' }));
//     }
//   } else {
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: 'Not found' }));
//   }
// });

// server.listen(port, () => {
//   console.log(`Proxy server running at http://localhost:${port}`);
// });
