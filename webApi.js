const http = require('http');
const PORT = 8080;

const newServer = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    console.log(` Request received: ${ req.url }`);   
    if (req.url === '/books') {
        res.write('<style>.input { border : 1px solid black; padding: 5px; margin: 5px; border-radius: 5px; background-color: aquamarine}</style>');
        res.write('<h1>Books</h1>');
        res.write('<ul><li>Book 1</li><li>Book 2</li><li>Book 3</li></ul>');
        res.write('<button class="input" type="button">return</button>');
        res.end();
    } else {
        res.write('<h1>Hello World</h1>');
        res.write('<style>body {background-color: lightblue;}</style>');
        res.write('<style>.test {color: red; font-size: 20px; font-family: sans-serif monospace}</style>');
        res.write('<p class="test">My first server</p>')
        res.write('<a href="https://www.google.com">Google</a> <br/>');
        res.end('<i>End of message</i>\n');
    }
});


newServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// newServer.close();