import http from 'http';
import fs from 'fs/promises';
import path from 'path';

const port = 5000;
const BASE_DIR = process.env.TEST_TMP_PATH || process.cwd();

const authorizedUsers = {
  Caleb_Squires: 'abracadabra',
  Tyrique_Dalton: 'abracadabra',
  Rahima_Young: 'abracadabra',
};

const parseAuthHeader = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Basic ')) return null;
  const credentials = Buffer.from(authHeader.slice(6), 'base64').toString();
  const [username, password] = credentials.split(':');
  return { username, password };
};

const handleUnauthorizedRequest = (res) => {
  res.writeHead(401, {
    'Content-Type': 'application/json',
    'WWW-Authenticate': 'Basic realm="Restricted Area"',
  });
  res.end(JSON.stringify({ error: 'Authorization Required' }));
};

const handlePostRequest = async (req, res) => {
  let body = '';
  req.on('data', (chunk) => (body += chunk.toString()));

  req.on('end', async () => {
    try {
      const guestName = req.url.slice(1);
      const guestData = body ? JSON.parse(body) : { answer: 'yes', drink: 'juice', food: 'pizza' };

      const guestsDir = path.join(BASE_DIR, 'guests');
      await fs.mkdir(guestsDir, { recursive: true });

      const filePath = path.join(guestsDir, `${guestName}.json`);
      await fs.writeFile(filePath, JSON.stringify(guestData, null, 2));

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(guestData));
    } catch (error) {
      console.error('Error:', error);
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
  });
};

const server = http.createServer((req, res) => {
  const auth = parseAuthHeader(req.headers.authorization);

  if (!auth || !authorizedUsers[auth.username] || authorizedUsers[auth.username] !== auth.password) {
    return handleUnauthorizedRequest(res);
  }

  if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else {
    res.writeHead(405, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Method not allowed' }));
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
