const router = require("express").Router;
const {
    getPost,
    getAllPost,
    createPost
} = require("./post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPost).post(createPost);
// postRouter.route("/:postId").patch(updatePost).delete(deletePost).get(getPost);

module.exports =postRouter