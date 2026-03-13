const http = require('http');

const server = http.createServer((req, res) => {
const envVar = process.env.MY_ENV_VAR || 'Variable no definida';
res.end(`Hola desde Azure App Service 🚀\nMY_ENV_VAR: ${envVar}`);
});

server.listen(process.env.PORT || 3000);