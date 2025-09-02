const express=require("express");
const { createUser, getUser } = require("../controller/user.controller");

const router=express.Router();

router.post("/user",createUser);
router.get("/",getUser);

module.exports=router