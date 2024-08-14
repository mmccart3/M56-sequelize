const {Router} = require("express");
const bookRouter = Router();
const addBook = require("../controllers/addBook")
// import listbooks from controllers folder
// import update author from controller folder
// import update genre from controller folder
// import deleteBook from controllers folder

// CREATE
bookRouter.post("/addBook", addBook)

// READ = list all books in the table
//bookRouter.get("/listBooks", listBooks)

//UPDATE = update author
// bookRouter. 

//UPDATE = update genre
// bookRouter.

//DELETE = delete a title
// bookRouter.

module.exports = bookRouter