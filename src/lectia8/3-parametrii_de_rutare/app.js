const express = require('express');
const app = express();
const port = 3000;
const Book = require('./Book');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const bookRouter = express.Router();
app.use('/api', bookRouter);

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

bookRouter.route('/books')
    .get((req, res) => {
        let filteredBooks = [];
        if (req.query.genre) {
            filteredBooks = books.filter(x => x.genre == req.query.genre);
        } else {
            filteredBooks = books;
        }

        res.json(filteredBooks);
    })
    .post((req, res) => {
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

        let newBook = new Book(req.body.id, req.body.name, req.body.genre, req.body.author);
        books.push(newBook);
        console.log(books);

        return res.json(newBook);
    });

bookRouter.route('/books/sorted')
    .get((req, res) => {
        let sortedBooks = [...books].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });

        res.json(sortedBooks);
    });

bookRouter.route('/books/:bookId')
    .put((req, res) => {
        bookModif = books.find(x => x.id == req.params.bookId);

        bookModif.name = req.body.name;
        bookModif.genre = req.body.genre;
        bookModif.author = req.body.author;

        return res.json(bookModif);
    });

bookRouter.route('/books/:bookId')
    .delete((req, res) => {
        const index = books.findIndex(x => x.id === Number(req.params.bookId));
        if (index === -1) {
            return res.status(400).json({ error: "Book id not found - cannot be deleted." });
        }
        
        const deletedBook = books.splice(index, 1);

        return res.json(deletedBook);
    });

//http://localhost:3000/