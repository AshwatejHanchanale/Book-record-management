const express = require("express");
const { books } = require('../data/books.json');
const { users } = require('../data/users.json');
const { route } = require("./users");


const { UserModel, BookModel } = require("../models");
const { getAllBooks, getSingleBookById, getAllIssuedBooks, addNewBook, updateBookById, getSingleBookByName } = require("../controller/book-controller");

const router = express.Router();

/*
*route : /Books
*Method: GET
*Description: get all books
*Access : Public
*Parameters: none
*/
router.get('/', getAllBooks);


/*
*route : /Books/id
*Method: GET
*Description: get books by id
*Access : Public
*Parameters: id
*/
router.get('/:id', getSingleBookById);

router.get('/getBook/name/:name', getSingleBookByName);

/*
*route : /Books/issued
*Method: GET
*Description: get all issued book
*Access : Public
*Parameters: none
*/
router.get('/issued/books', getAllIssuedBooks);


/*
*route : /Books/issued/by-user
*Method: POST
*Description: creating new book
*Access : Public
*data : auther,name,genre,price,publisher,id
*/
router.post("/", addNewBook);

/*
*route : /Books/:id
*Method: PUT
*Description: update book
*Access : Public
*data : auther,name,genre,price,publisher,id
*/
router.put("/:id", updateBookById);



//default export
module.exports = router;