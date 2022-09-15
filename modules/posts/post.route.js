const router = require("express").Router;
const {
    getAllPosts,
    createPost,
    deletePost,
    getSinglePost,
    updatePost
} = require("./post.controller");
const {authRequired} = require("../middleware/authRequired")

const postRouter = router();

postRouter.route("/").all(authRequired).get(getAllPosts).post(createPost);
postRouter
  .route("/:postId")
  .all(authRequired)
  .get(getSinglePost)
  .patch(updatePost)
  .delete(deletePost);
  

module.exports = {postRouter};