const jwt = require("jsonwebtoken");

exports.authRequired =(req, res, next) => {
    const authorization = req.headers.authorization;
    if (!authorization) {
        return res.status(402).json ({error: "Please login to use the platform"})
    }

    // const token = authorization.split(" Bearer ")[0]
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(402).json({error: "Please login to use the platform"});
    }

    const user = jwt.verify(
        token,
        "f2bbfb2fd2ad8872cbd1b2f4b54cd7611c45bed447d594653e149010724dda2e"
    );

    req.user = user;

    next();
};