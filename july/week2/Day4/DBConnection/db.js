const mongoose = require("mongoose");


const connectionDB = async () => {
    try {
        const connection = await mongoose.connect("mongodb://127.0.0.1:27017/MyDb");
        console.log("Data base connected")
        // userModel.insertOne({
        //     name: "xyz",
        //     age: 30,
        //     email: "xyz@gmail.com",
        //     password: "1234"
        // })
        // console.log("data")
    } catch (error) {
        console.log("Error is ", error)
    }
}

module.exports = connectionDB