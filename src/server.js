require("dotenv").config();
const express = require("express");
const bookRouter = require("./routes/bookRoutes");
// import authorRouter
const app = express();
app.use(express.json());
app.use(bookRouter);
const Book = require("./db/models/bookmodel")
//import author model

function syncTables() {
    Book.sync({alter:true})
    //sync author table
}


const port = process.env.PORT || 5001;


app.get("/health", (req,res) => {
    res.status(200).json({
        msg : "Server API is healthy"
    })
})
syncTables();
app.listen(port,() => console.log(`Server running on port ${port}`))