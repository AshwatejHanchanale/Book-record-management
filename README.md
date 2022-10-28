# Book-record-management

this is a book record management API Backend for the management of records and books


#routes and Endpoints

## /users
post: create a new user ✔
get: get all list of users ✔

## /users/{id}
GET: get a user by id  ✔
PUT: update a user by id
DELETE: delete a user by id (check if he/she still has an issued book)(IS there any fine to be paid).


##/users/subscription-details/{id}
GET: Get user subscription details
1.Date of subscription
2. valid till 
3. fine if any

## /books
GET: get all books
POST: ceate/Add a new book

## /books{id}
GET: GEt a book by id
POST : Update a book by id

## /books/issued/books
GET: GEt all the issued books

## /Book/issued/withFine
GEt: Get all issued books with fine

##Subscription types
Basic (3 months)
Stadard(6 months)
premium(12 months)


if the subscribtion date is 01/10/2022
and subscription type is standard
the valid till date will be 01/04/2023

If he has an issued book  and the issued book s to be returned at 01/01/2023
and he misses it, then he gets a fine of 100rs


if has an issued book and the issued book is to be returned at 01/01/2023
if he missed the date of return 