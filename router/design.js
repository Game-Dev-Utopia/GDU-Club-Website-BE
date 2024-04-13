import { Router } from "express";
const designRouter = Router();
import Auth from "../middleware/auth.js"
import * as controller from '../controllers/designController.js';


/** POST Methods */
/**
 * @openapi
 * /api/design/adddesign:
 *   post:
 *     tags:
 *       - Design Management
 *     summary: Add a new Design
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - designs
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample Design
 *               description:
 *                 type: string
 *                 default: A description of the design
 *               designs:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/deisgn1
 *               achievements:
 *                 type: array
 *                 items:
 *                  type: object
 *                  properties:
 *                    image:
 *                      type: string
 *                      default: https://example.com/achievement_image
 *                    title:
 *                      type: string
 *                      default: Achievement Title
 *                    description:
 *                      type: string
 *                      default: Description of the achievement
 *               download_url:
 *                 type: string
 *                 default: https://example.com/download
 *               developer_ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: developer_ids
 *               likeCount:
 *                  type: number
 *               shareCount:
 *                  type: number

 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * 
 * /api/design/getdesigns:
 *   get:
 *     tags:
 *       - Design Management
 *     summary: Get all Designs
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error
 * 
 * 
 *
 * /api/design/updatedesign:
 *   patch:
 *     tags:
 *       - Design Management
 *     summary: Update a Design
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - designs
 *             properties:
 *               id:
 *                 type: string
 *                 default: enter id
 *               title:
 *                 type: string
 *                 default: Sample Design
 *               description:
 *                 type: string
 *                 default: A description of the design
 *               designs:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/deisgn1
 *               achievements:
 *                 type: array
 *                 items:
 *                  type: object
 *                  properties:
 *                    image:
 *                      type: string
 *                      default: https://example.com/achievement_image
 *                    title:
 *                      type: string
 *                      default: Achievement Title
 *                    description:
 *                      type: string
 *                      default: Description of the achievement
 *               download_url:
 *                 type: string
 *                 default: https://example.com/download
 *               developer_ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: developer_ids
 *               likeCount:
 *                  type: number
 *               shareCount:
 *                  type: number
 * 
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error


 * /api/design/updatedesignassets:
 *   patch:
 *     tags:
 *       - Design Management
 *     summary: Add a new Design
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - designs
 *             properties:
 *               id:
 *                 type: string
 *                 default: 65d73703a8ebb37617be395c
 *               designs:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/deisgn1
 *               download_url:
 *                 type: string
 *                 default: https://example.com/download
 * responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error
*/




/** DELETE Methods */
/**
 * @openapi
 * '/api/design/{id}':
 *  delete:
 *     tags:
 *     - Design Management
 *     summary: Delete user by Id
 *     parameters:
 *      - name: id
 *        in: path
 *        description: The unique Id of the user
 *        required: true
 *     responses:
 *      200:
 *        description: Removed
 *      400:
 *        description: Bad request
 *      404:
 *        description: Not Found
 *      500:
 *        description: Server Error
 */

designRouter.route("/adddesign").post(controller.addDesign);
designRouter.route("/getdesigns").get(controller.getDesigns);
designRouter.route("/updatedesign").patch(controller.updateDesign);
designRouter.route("/updatedesignassets").patch(controller.updateDesignAssets);
designRouter.route("/:id").delete(controller.deleteDesign);


export default designRouter;