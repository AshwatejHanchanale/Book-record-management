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


/*
*route : /Books/issued/by-user
*Method: POST
*Description: creating new book
*Access : Public
*data : auther,name,genre,price,publisher,id
*/
router.post("/", (req, res) => {
    const { data } = req.body;

    if (!data) {
        return res.status(400).json({
            success: false,
            message: "No data provided",
        });
    }

    const book = books.find((each) => each.id === id);

    if (book) {
        return res.status(404).json({
            success: false,
            message: "book already exist with thid id, please use a unique id",
        });
    }

    const allBooks = [...books, data];
    return res.status(201).json({
        success: true,
        data: allBooks,
    });

});

/*
*route : /Books/:id
*Method: PUT
*Description: update book
*Access : Public
*data : auther,name,genre,price,publisher,id
*/
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { data } = req.body;

    const book = books.find((each) => each.id === id);
    if (!book) {
        res.status(404).json({
            success: false,
            message: "book not found with this id ",
        });
    }
    const updateData = books.map((each) => {
        if (each.id === id) {
            return { ...each, ...data };
        }
        return each;
    });
    return res.status(200).json({
        success: true,
        data: updateData,
    });
});



//default export
module.exports = router;