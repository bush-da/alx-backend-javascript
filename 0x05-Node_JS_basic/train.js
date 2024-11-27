// const fs = require('fs');
// // read file in sync

// const data = fs.readFileSync('database.csv', 'utf8')
// // read file in async

// fs.readFile('database.csv', 'utf8', (err, data) => {
//     if (err) {
// 	console.error("Error reading file", err)
// 	return
//     }
//     console.log(data)
// })


// const args = process.argv.slice(2);
// console.log(args);

// const my_env = process.env.MY_VAR
// console.log(my_env)

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text/plain');
//     if (req.url === '/') {
// 	res.statusCode = 200;
// 	res.end("hello")
//     } else if (req.url == '/about') {
// 	res.statusCode = 200;
// 	res.end("about page");
//     } else {
// 	res.statusCode = 404;
// 	res.end("404: Page Not Found");
//     }
// });

// server.listen(3000, 'localhost', () => {
//     console.log("Server running at http://localhost:3000/")
// })

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('welcome to my express');
// });


// app.get('/about', (req, res) => {
//     res.send("this is about page");
// });

// app.get('/contact', (req, res) => {
//     res.send("this is contact page");
// });

// app.use((req, res) => {
//     res.status(404).send("404: Page Not Found");
// });

// const PORT = 3000;

// app.listen(PORT, () => {
//     console.log(`Express server running at http://localhost:${PORT}/`)
// })
const express = require('express');
const app = express();

app.get('/user/:id', (req, res) => {
    const user_id = req.params.id;
    res.send(`User ID: ${user_id}`);
});

app.get('/search', (req, res) => {
    const { keyword, page } = req.query;
    res.send(`Searching for ${keyword} on page ${page}`);
});

const logger = (req, res, next) => {
    console.log("custom log");
    next();
};

app.get('/about', logger, (req, res) => {
    res.send("this is about page");
});

app.get('/log', (req, res, next) => {
    console.log('Custom log for /log route');
    next(); // Pass control to the route handler
}, (req, res) => {
    res.send('Check the console for the custom log!');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});


