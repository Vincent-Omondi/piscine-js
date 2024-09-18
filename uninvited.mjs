import { createServer } from 'node:http';
import { writeFile } from 'node:fs/promises';
import path from 'node:path';

const PORT = 5000;
const GUESTS_DIR = 'guests';

const handlePostRequest = async (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const guestName = url.pathname.slice(1);

    try {
        const body = await getRequestBody(request);
        const filePath = path.join(GUESTS_DIR, `${guestName}.json`);
        
        await writeFile(filePath, body);
        
        sendJsonResponse(response, 201, JSON.parse(body));
    } catch (error) {
        console.error('Error handling POST request:', error);
        sendJsonResponse(response, 500, { error: "server failed" });
    }
};

const getRequestBody = (request) => {
    return new Promise((resolve, reject) => {
        let body = '';
        request.on('data', chunk => body += chunk);
        request.on('end', () => resolve(body));
        request.on('error', reject);
    });
};

const sendJsonResponse = (response, statusCode, data) => {
    response.writeHead(statusCode, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(data));
};

const server = createServer((request, response) => {
    if (request.method === 'POST') {
        handlePostRequest(request, response);
    } else {
        sendJsonResponse(response, 405, { error: "wrong method" });
    }
});

server.listen(PORT, () => {
    console.log(`Server started on localhost:${PORT}!`);
});