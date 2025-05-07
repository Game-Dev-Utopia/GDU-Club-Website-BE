import { Router } from "express";
import * as controller from "../controllers/blogController.js";
const BlogRouter = Router();

BlogRouter.route('/').post(controller.addBulkBlogs);

export default BlogRouter;