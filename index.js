const express = require('express');

//json data import
const { users } = require("./data/users.json");

const app = express();

const port = 8081;

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Server is running",
    });

});

/*
*route : /users
*Method: GET
*Description: Get all users
*Access : Public
*Parameters: None
*/

app.get("/users", (req, res) => {
    res.status(200).json({
        success: true,
        data: users,
    });
});

/*
*route : /users/id
*Method: GET
*Description: Get single user by id
*Access : Public
*Parameters: id
*/
app.get("/users/:id", (req, res) => {
    const { id } = req.params;
    const user = users.find((each) => each.id === id);
    if (!user) {
        return res.status(404).json({
            success: false,
            message: "user not found",
        });
    }
    return res.status(200).json({
        success: true,
        message: user,
    });
});

/*
*route : /users
*Method: POST
*Description: create new user
*Access : Public
*Parameters: None
*/
app.post("/users", (req, res) => {
    const { id, name, surname, email, subscriptionType, subscriptionDate } = req.body;

    const user = users.find((each) => each.id === id);

    if (user) {
        return res.status(404).json({
            success: false,
            message: "This exist with this id",
        });
    }

    users.push({
        id,
        name,
        surname,
        email,
        subscriptionType,
        subscriptionDate,
    });
    return res.status(200).json({
        success: true,
        data: users,
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