const express = require("express");
const {dbConnect} = require("./config/dbConnect");
const postRouter = require("./modules/posts/post.route");

const app = express();

app.all("/", (req, res)=>{
    res.status(200).send("Welcome to my server. use /post all posts")
})

app.use("/post", postRouter);

async function start(){
    await dbConnect();
    
    app.listen(4000,(err) =>{
        console.log("server listening on htttp://localhost:4000");
    });
}

start();
