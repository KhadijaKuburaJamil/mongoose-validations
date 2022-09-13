const router = require("express").Router;
const {register} = require("./auth.controler");

const authRouter = router();

authRouter.post("/", register);

module.exports = {authRouter};