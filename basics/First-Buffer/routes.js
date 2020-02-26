const fs = require('fs'); // import filesystem modules


const  requestHandle = (req,res) => {
    const url = req.url; //get the request url
    const method = req.method;// get the request method
    if (url === '/') { // if first access, show input field to user
        res.write('<html>');
        res.write('<head><title>Enter a message</title><head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'); //on form I'm sending the url and method
        res.write('</html>');
        return res.end(); // I need to return a sign that my response ends
    };
    if (url === '/message' && method === 'POST') { // if user send a value from input, get that value and write a message.txt file
        const dataChunk = []; // variable that I use to store all the chunks of data
        req.on('data', (chunk) => { // event listener of datas
            console.log("The chunk: ")
            console.log(chunk);
            dataChunk.push(chunk); // adding all data chunks to my array of data chunks
        })
        req.on('end', () => {// event listener when the stream of chunks ends
            const parsedData = Buffer.concat(dataChunk).toString(); // variable that get my datachunk and "buffering", concatenate and pass to string all the array of data chunks
            console.log("The parsed chunk: ")
            console.log(parsedData);
            const message = parsedData.split('=')[1];
            fs.writeFileSync('message.txt', message); // write the data on my message.txt file

        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    };
};
module.exports =  requestHandle;
