const http = require('http');

const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;



    if(url === '/') {

        res.write('<html>');
        res.write('<head><title>Acess page</title></head>')
        res.write('<body>');
        res.write('<h1>Welcome!</h1>');
        res.write('<p>This page allows you to submit a user in our system!</p>');
        res.write(`<form action='/create-users' method='POST'><input type='text'name='username'><button type="submit">Create</button></form>`);
        res.write('</body>');
        res.write('<html>');
        return res.end();

    } else if (url === '/create-users' && method === 'POST') {

        const users = [];
        let newUsers = '';
        req.on('data', (chunk) => {
            newUsers = Buffer.from(chunk).toString();
        });
        req.on('end', () => {
            users.push(newUsers);
            console.log(users[0]);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();

    } else if(url === '/users' && method === 'GET') {
        res.write('<html>');
        res.write('<head><title>Users list</title></head>')
        res.write('<body>');
        res.write('<h1>List of all users:</h1>');
        res.write('<ul>');
        res.write(`<li>User 1</li>`);
        res.write(`<li>User 2</li>`);
        res.write(`<li>User 3</li>`);
        res.write('</ul>');
        res.write('</body>');
        res.write('<html>');
        return res.end();

    };
});
server.listen(3000);