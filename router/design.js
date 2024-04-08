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
 *               - features
 *               - design
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample Design
 *               description:
 *                 type: string
 *                 default: A description of the design
 *               features:
 *                 type: string
 *                 default: Exciting features of the design
 *               design:
 *                 type: string
 *                 default: https://example.com/design
 *               thumbnails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/thumbnail1
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
 *               play_url:
 *                 type: string
 *                 default: https://example.com/play
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: Action
 *               developer_id:
 *                 type: string
 *                 default: developer123
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
 *               - features
 *               - design
 *             properties:
 *               id:
 *                 type: string
 *                 default: 65d73703a8ebb37617be395c
 *               title:
 *                 type: string
 *                 default: Sample Design
 *               description:
 *                 type: string
 *                 default: A description of the design
 *               features:
 *                 type: string
 *                 default: Exciting features of the design
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
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: Action
 *               developer_id:
 *                 type: string
 *                 default: developer123
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
 *               - features
 *               - design
 *             properties:
 *               id:
 *                 type: string
 *                 default: 65d73703a8ebb37617be395c
 *               design:
 *                 type: string
 *                 default: https://example.com/design
 *               thumbnails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/thumbnail1
 *               download_url:
 *                 type: string
 *                 default: https://example.com/download
 *               play_url:
 *                 type: string
 *                 default: https://example.com/play
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