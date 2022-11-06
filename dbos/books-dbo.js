//Data Trsform Object

class IssuedBook {
    _id;
    name;
    genre;
    price;
    publihser;
    issuedBy;
    issuedDate;
    returnDate;


    constructor(user) {
        this._id = user.issuedBook._id;
        this.name = user.issuedBook.name;
        this.genre = user.issuedBook.genre;
        this.price = user.issuedBook.price;
        this.publihser = user.issuedBook.publihser;
        this.issuedBy = user.issuedBook.name;
        this.issuedDate = user.issuedDate;
        this.returnDate = user.returnDate;
    }
}

module.exports = IssuedBook;