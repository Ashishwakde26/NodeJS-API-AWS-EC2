const mongoose = require('mongoose');


async function dbconnect () {
    mongoose.connect("mongodb+srv://Ashishw:Password123@cluster0.fpwyooj.mongodb.net/?retryWrites=true&w=majority").then(()=> {
        console.log("Database Connection successful")
    }).catch((e) => console.log(e));
}

module.exports = dbconnect