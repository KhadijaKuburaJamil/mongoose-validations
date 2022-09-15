const express = require("express");
const {dbConnect} = require("./config/dbConnect");
const {postRouter} = require("./modules/posts/post.route");
const {authRouter} = require("./modules/users/auth.route");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).send("Welcome to my server. use /post all posts")
});

app.use("/auth", authRouter);
app.use("/posts", postRouter);

async function start(){
    await dbConnect();
    
    app.listen(4000,(err) =>{
        console.log("server listening on htttp://localhost:4000");
    });
}

start();
