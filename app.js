const HTTP = require('http');
const PORT = process.env.PORT || 3000;

const SERVER = HTTP.createServer((req, res) => {
    let method = req.method;
    let path = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`${method} ${path} was requested \n`);
    res.end();
});

SERVER.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})