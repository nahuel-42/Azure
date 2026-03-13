const http = require('http');


const server = http.createServer((req, res) => {
	const envVar = process.env.PORT || 'Variable no definida';
	const ambiente = process.env.AMBIENTE || 'Variable ambiente no definida';
	res.end(`Hola desde Azure App Service \nMY_ENV_VAR: ${envVar}\nambiente: ${ambiente}`);
});

server.listen(process.env.PORT || 3000);