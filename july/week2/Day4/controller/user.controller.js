const userModel = require("../models/user.model");

exports.createUser = async (req, res) => {
    try {
        const dataBody = req.body;

        console.log(dataBody)

        const user = new userModel(dataBody);
        await user.save();
        res.status(201).json({
            message: "User created successfully",
            // user,
        });

        // res.send("data saved")
    } catch (error) {
        console.log("error is", error)
    }

}

exports.getUser=async(req,res)=>{
  try {
    const userData=await userModel.find();
    if(!userData){
        return res.status(400).json({
            success:false,
            message:"data not found"
        })
    }else{
        return res.status(200).json({
            success:true,
            message:"Successfuly data fetched",
            userData
        })
    }
  } catch (error) {
    
  }
}
