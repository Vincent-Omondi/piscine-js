import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const PORT = 5000;
const GUESTS_DIRECTORY = './guests'; // Adjust this path if needed

const server = http.createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  const guestName = path.basename(req.url);
  const filePath = path.join(GUESTS_DIRECTORY, `${guestName}.json`);

  if (req.method === 'GET') {
    try {
      const data = await fs.readFile(filePath, 'utf8');
      res.statusCode = 200;
      res.end(data);
    } catch (error) {
      if (error.code === 'ENOENT') {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'guest not found' }));
      } else {
        console.error('Server error:', error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    }
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', async () => {
      try {
        const guestData = JSON.parse(body);
        await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));
        res.statusCode = 201;
        res.end(JSON.stringify(guestData));
      } catch (error) {
        console.error('Server error:', error);
        res.statusCode = 500;
        res.end(JSON.stringify({ error: 'server failed' }));
      }
    });
  } else {
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'not found' }));
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});