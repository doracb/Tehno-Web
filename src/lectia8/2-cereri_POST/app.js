const express = require('express');
const app = express();
const port = 3000;
const Book = require('./Book');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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

app.post('/addBooks', (req, res) => {
    const { id, name, genre, author } = req.body;

    if (id === undefined || !name || !genre || !author) {
        return res.status(400).json({ error: "Missing required fields!" });
    }

    if (typeof id !== "number") {
        return res.status(400).json({ error: "Book id must be a number." });
    }

    for (let book of books) {
        if (book.id === id) {
            return res.status(400).json({ error: "The id must be unique." });
        }
    }

    if (typeof name !== "string" || typeof genre !== "string" || typeof author !== "string") {
        return res.status(400).json({ error: "The name, genre or author of the book must be a string." });
    }

    let newBook = new Book( req.body.id,
                            req.body.name,
                            req.body.genre,
                            req.body.author);
    books.push(newBook);
    console.log(books);
    return res.json(newBook);
});

//http://localhost:3000/