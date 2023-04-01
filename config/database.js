const mongoose = require("mongoose");

const db = () => {
    mongoose.connect("mongodb://localhost:27017/apiDB", {
        useUnifiedTopology: true
    }).then(() => {
        console.log("mongoDB connected.");
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = db
