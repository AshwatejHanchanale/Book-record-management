const express = require("express");
const { getAllUsers, getSingleUserById, deleteUser, updateUserById, createNewUser, getSubscriptionDetailsById } = require("../controller/user-controller");


const { users } = require("../data/users.json");

const router = express.Router();

/*
*route : /users
*Method: GET
*Description: Get all users
*Access : Public
*Parameters: None
*/

router.get("/", getAllUsers);

/*
*route : /users/id
*Method: GET
*Description: Get single user by id
*Access : Public
*Parameters: id
*/
router.get("/:id", getSingleUserById);

/*
*route : /users
*Method: POST
*Description: create new user
*Access : Public
*Parameters: None
*/
router.post("/", createNewUser);

/*
*route : /users/id
*Method: PUT
*Description: updating user
*Access : Public
*Parameters: id
*/
router.put("/:id", updateUserById);

/*
*route : /users/id
*Method: DELETE
*Description: Delete user by id
*Access : Public
*Parameters: id
*/
router.delete("/users/:id", deleteUser);

/*
*route : /users/subscription-details/:id
*Method: GET
*Description: get all user subscription details
*Access : Public
*Parameters: id
*/
router.get('/subscription-details/:id', getSubscriptionDetailsById);

module.exports = router;