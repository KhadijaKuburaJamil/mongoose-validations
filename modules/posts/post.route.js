const router = require("express").Router;
const {
    getAllPosts,
    createPost,
    deletePost,
    getSinglePost,
    updatePost
} = require("./post.controller");

const postRouter = router();

postRouter.route("/").get(getAllPosts).post(createPost);
postRouter
  .route("/:postId")
  .patch(updatePost)
  .delete(deletePost)
  .get(getSinglePost);

module.exports = {postRouter};