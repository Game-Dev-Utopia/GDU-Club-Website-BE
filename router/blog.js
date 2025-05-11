import { Router } from "express";
import * as controller from "../controllers/blogController.js";
const BlogRouter = Router();

BlogRouter.route('/proxy').get(controller.proxyBlogContent);
BlogRouter.route('/').get(controller.getAllBlogs);
BlogRouter.route('/').post(controller.addBulkBlogs);

export default BlogRouter;