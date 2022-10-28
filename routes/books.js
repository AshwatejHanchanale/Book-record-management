const express = require("express");
const { books } = require('../data/books.json');
const { users } = require('../data/users.json');
const { route } = require("./users");

const router = express.Router();

/*
*route : /Books
*Method: GET
*Description: get all books
*Access : Public
*Parameters: none
*/
router.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        data: books,
    });
});

/*
*route : /Books/id
*Method: GET
*Description: get books by id
*Access : Public
*Parameters: id
*/
router.get('/:id', (req, res) => {
    const { id } = req.params;

    const book = books.find((each) => each.id === id);

    if (!book)
        return res.status(404).json({
            success: false,
            message: "books not found",
        });

    return res.status(200).json({
        success: true,
        data: book,
    });
});

/*
*route : /Books/issued
*Method: GET
*Description: get all issued book
*Access : Public
*Parameters: none
*/
router.get('/issued/books', (req, res) => {
    const userWithIssuedBooks = users.filter((each) => {
        if (each.issuedBook) return each;
    });

    const issuedBooks = [];

    userWithIssuedBooks.forEach((each) => {
        const book = books.find((book) => book.id === each.issuedBook);

        book.issuedBy = each.name;
        book.issuedDate = each.issuedDate;
        book.returnDate = each.returnDate;

        issuedBooks.push(book);
    });

    if (issuedBooks.length === 0)
        return res.status(404).json({
            success: false,
            message: "No books issued yet",
        });

    return res.status(200).json({
        success: true,
        data: issuedBooks,
    });
});


//default export
module.exports = router;