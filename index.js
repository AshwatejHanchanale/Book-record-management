const express = require('express');
const dotenv = require("dotenv");
const DbConnection = require("./databaseConnection");


//importing routes
const userRouter = require("./routes/users");
const booksRouter = require("./routes/books");

dotenv.config();

const app = express();

DbConnection();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
    });

});

app.use('/users', userRouter);
app.use('/books', booksRouter);


app.get("*", (req, res) => {
    res.status(400).json({
        message: "server is not route",
    });

});

app.listen(port, () => {
    console.log(`serveris ruunig at port ${port}`);

});