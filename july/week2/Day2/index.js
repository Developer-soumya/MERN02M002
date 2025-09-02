//  this is for import the express
 const express= require("express");

//  this is for creating the application
 const app=express();

 app.use(express.json());

 //  This is your port number
 const port=8080;

//  user defined middle ware
  const validation=(req,res,n)=>{
    console.log("validation ho raha he");
    n()
  }

  const auth=(req,res,next)=>{
    console.log("auth ho raha he");
    next()
  }

  app.use(validation)
  app.use(auth);

 app.get('/',(req,res)=>{
    // const {q,s}=req.query;
    // console.log(q)
    // console.log(s)
    console.log("get method called")
    res.send("<h1>get request called</h1>");
 })

 app.post('/user',(req,res)=>{

     const data=req.body;
     console.log(data)
    // res.send(data)
    res.status(200).json(data)
 })

 app.put('/user/:id',(req,res)=>{
    res.send("put request called")
 })

 app.delete('/user/:id',(req,res)=>{
    const {id}=req.params;
    console.log("ID is ",id)
    res.send("delete request called")
 })

//  this is for running the server
 app.listen(port,(req,res)=>{
   console.log("My server is running on port ",port)
 })