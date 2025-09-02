const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connection=mongoose.connect("mongodb://127.0.0.1:27017/MyDb");
        console.log("Mongo DB connected");

        // userModel.insertOne({name:"balia",age:30,email:"balia@gmail.com",password:"987654"});

        // const user=new userModel({
        //     name:"vik",
        //     age:33,
        //     email:"vik@gmail.com",
        //     password:"7384294"
        // })

        // await user.save()

        // const data=await userModel.findOne();
        // console.log(data)
        // console.log("data saved")

        await userModel.findByIdAndUpdate({_id:'686e1825b8be0dcb38a32de1'},{name:"viky patra",age:34,email:"viky@gmail.com",password:"6578"})
        console.log("data updated")
        await userModel.findByIdAndDelete({_id:'686e1825b8be0dcb38a32de1'});
        console.log("data deleted")

    } catch (error) {
        console.log("Error",error)
    }

}

const userSchema=mongoose.Schema({
 name:{
    type:String,
    required:true
 },
 age:{
    type:Number,
    required:true
 },
 email:{
    type:String,
    required:true
 },
 password:{
    type:String,
    required:true
 }
})

const userModel=mongoose.model("user",userSchema);

module.exports=userModel

module.exports=connectDB;