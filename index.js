const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <html>
      <body style="background:black; color:#0ff; font-family:Arial; text-align:center; padding-top:50px;">
        <h1 style="font-size:48px; text-shadow:0 0 20px #0ff;">
          🚀 Futuristic Neon App v2.0
        </h1>
        <p style="font-size:22px; text-shadow:0 0 10px #0ff;">
          Hello from AWS CI/CD Pipeline on ECS Fargate!
        </p>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server running on port 3000");
});

