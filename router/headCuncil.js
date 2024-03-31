import { Router } from "express";
const headCouncilRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/headCouncilController.js";

/** POST Methods */
/**
 * @openapi
 * /api/headcouncil/addheadcouncil:
 *   post:  
 *     tags:
 *       - Head Council Management
 *     summary: Add a new head council member
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - position
 *               - image
 *               - backgroundImage
 *               - description
 *               - email
 *               - phone
 *               - social_media
 *             properties:
 *               name:
 *                 type: string
 *                 default: John Doe
 *               position:
 *                 type: string
 *                 default: President
 *               image:
 *                 type: string
 *                 default: https://example.com/image.jpg
 *               backgroundImage:
 *                 type: string
 *                 default: https://example.com/image.jpg
 *               description:
 *                 type: string
 *                 default: A description of the head council member
 *               email:
 *                 type: string
 *                 default: example@gmail.com
 *               phone:
 *                 type: integer
 *                 default: 7774860123
 *               social_media:
 *                 type: object
 *                 properties:
 *                   linkedin:
 *                      type: string
 *                      default: ''
 *                   instagram:
 *                      type: string
 *                      default: ''
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 */
headCouncilRouter.route("/addheadcouncil").post(controller.addHeadCouncil);



/** GET Methods */
/**
 * @openapi
 * /api/headcouncil/getallheadcouncil:
 *   get:
 *     tags:
 *       - Head Council Management
 *     summary: Get All Head Council Members
 *     responses:
 *       200:
 *         description: OK
 *       500:
 *         description: Server Error
 */

headCouncilRouter.route("/getallheadcouncil").get(controller.getAllHeadCouncil);



/** DELETE Methods */
/**
 * @openapi
 * '/api/headcouncil/deleteheadcouncil/{headCouncilId}':
 *   delete:
 *     tags:
 *       - Head Council Management
 *     summary: Delete Head Council Member
 *     parameters:
 *      - name: headCouncilId
 *        in: path
 *        description: The unique Id of the headCouncil member
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

headCouncilRouter.route("/deleteheadcouncil/:headCouncilId").delete(controller.deleteHeadCouncil);




/** PATCH Methods */
/**
 * @openapi
 * '/api/headcouncil/updateheadcouncil/{headCouncilId}':
 *   patch:
 *     tags:
 *       - Head Council Management
 *     summary: Update Head Council Member
 *     parameters:
 *       - name: headCouncilId
 *         in: path
 *         description: The unique Id of the headCouncil member
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 default: John Doe
 *               position:
 *                 type: string
 *                 default: President
 *               image:
 *                 type: string
 *                 default: https://example.com/image.jpg
 *               backgroundImage:
 *                 type: string
 *                 default: https://example.com/image.jpg
 *               description:
 *                 type: string
 *                 default: A description of the head council member
 *               email:
 *                 type: string
 *               phone:
 *                 type: integer
 *                 default: 7774860123
 *               social_media:
 *                 type: object
 *                 properties:
 *                   linkedin:
 *                     type: string
 *                     default: ''
 *                   instagram:
 *                     type: string
 *                     default: ''
 *           example:
 *             name: John Doe
 *             position: President
 *             image: https://example.com/image.jpg
 *             backgroundImage: https://example.com/image.jpg
 *             description: A description of the head council member
 *             email: john.doe@example.com
 *             phone: 7774860123
 *             social_media:
 *               linkedin: linkedin.com/in/johndoe
 *               instagram: instagram.com/johndoe
 *     responses:
 *       '200':
 *         description: Updated
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Server Error
 */
headCouncilRouter.route("/updateheadcouncil/:headCouncilId").patch(controller.updateHeadCouncil);





export default headCouncilRouter;