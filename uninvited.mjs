import { createServer } from 'node:http';
import { writeFile } from 'node:fs';
const PORT = 5000;

const handleRequest = (request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`);
    const guestName = url.pathname.substring(1);
    response.setHeader('Content-Type', 'application/json');

    if (request.method !== 'POST') {
        response.statusCode = 405;
        return response.end(JSON.stringify({ error: "Method Not Allowed" }));
    }

    let body = '';
    request.on('data', chunk => body += chunk);
    
    request.on('end', () => {
        writeFile(`guests/${guestName}.json`, body, (err) => {
            if (err) {
                console.error('File write error:', err);
                response.statusCode = 500;
                return response.end(JSON.stringify({ error: "Internal Server Error" }));
            }

            response.statusCode = 201;
            response.end(body);
        });
    });

    request.on('error', () => {
        response.statusCode = 400;
        response.end(JSON.stringify({ error: "Bad Request" }));
    });
};

const server = createServer(handleRequest);

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
