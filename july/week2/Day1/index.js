const http=require("http");

const MyServer=http.createServer((req,res)=>{
    console.log("Server is running on port 8000");
    console.log(req.url)
    res.end("response send")
})

MyServer.listen(8000);