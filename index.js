const express = require('express');

const app = express();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
    });

});

app.get("*", (req, res) => {
    res.status(400).json({
        message: "server is not route",
    });

});

app.listen(port, () => {
    console.log(`serveris ruunig at port ${port}`);

});