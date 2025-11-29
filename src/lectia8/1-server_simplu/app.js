const express = require('express');
const app = express();
const port = 3000;
const Book = require('./Book');

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
});

app.listen(port, () => {
    console.log('Server running on port ' + port);
});

let books = [new Book(1, "Dune", "sf", "Frank Herbert"),
new Book(2, "Shogun", "historical", "James Clavell"),
new Book(3, "Frankenstein", "sf", "Mary Shelley")
];

app.get('/books', (req, res) => {
    let filteredBooks = [];
    if (req.query.genre) {
        filteredBooks = books.filter(x => x.genre == req.query.genre);
    } else {
        filteredBooks = books;
    }

    res.json(filteredBooks);
});

app.get('/books/sorted', (req, res) => {
    let sortedBooks = [...books].sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    res.json(sortedBooks);
});

//http://localhost:3000/