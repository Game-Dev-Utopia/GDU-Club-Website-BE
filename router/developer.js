import { Router } from "express";
const developerRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/developerController.js";

/**
 * @openapi
 * /api/developer/adddeveloper:
 *   post:
 *     tags:
 *       - Developer Management
 *     summary: Add a new developer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the developer
 *               profilePhoto:
 *                 type: string
 *                 description: URL of the profile photo
 *               headline:
 *                 type: string
 *                 description: Headline of the developer
 *               socialMediaHandles:
 *                 type: object
 *                 properties:
 *                   linkedIn:
 *                     type: string
 *                     description: LinkedIn profile URL
 *                   GitHub:
 *                     type: string
 *                     description: GitHub profile URL
 *                   Instagram:
 *                     type: string
 *                     description: Instagram profile URL
 *                   Itch:
 *                     type: string
 *                     description: Itch profile URL
 *                   Steam:
 *                     type: string
 *                     description: Steam profile URL
 *                   Discord:
 *                     type: string
 *                     description: Discord profile URL
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request - Developer name already exists
 *       500:
 *         description: Server Error
 */

developerRouter.route('/adddeveloper').post(Auth, controller.addDeveloper);

/** GET Methods */
/**
 * @openapi
 * /api/developer/getalldevelopers:
 *   get:
 *     tags:
 *       - Developer Management
 *     summary: Get All Developer 
 *     responses:
 *       200:
 *         description: Fetched Successfully
 *       400:
 *         description: Bad Request
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
developerRouter.route("/getalldevelopers").get(controller.getDevelopers);

/** DELETE Methods */
/**
 * @openapi
 * '/api/game/deletedeveloper/{devId}':
 *  delete:
 *     tags:
 *     - Developer Management
 *     summary: Delete Developer by Id
 *     parameters:
 *      - name: devId
 *        in: path
 *        description: The unique Id of the Developer
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
developerRouter.route("/deletedeveloper/:devId").delete(Auth, controller.deleteDeveloper);

/**
 * @openapi
 * /api/developer/update/{devid}:
 *   patch:
 *     tags:
 *       - Developer Management
 *     summary: Update an existing developer
 *     parameters:
 *       - in: path
 *         name: devid
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the developer to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name of the developer
 *               profilePhoto:
 *                 type: string
 *                 description: New URL of the profile photo
 *               headline:
 *                 type: string
 *                 description: New headline of the developer
 *               socialMediaHandles:
 *                 type: object
 *                 properties:
 *                   linkedIn:
 *                     type: string
 *                     description: New LinkedIn profile URL
 *                   GitHub:
 *                     type: string
 *                     description: New GitHub profile URL
 *                   Instagram:
 *                     type: string
 *                     description: New Instagram profile URL
 *                   Itch:
 *                     type: string
 *                     description: New Itch profile URL
 *                   Steam:
 *                     type: string
 *                     description: New Steam profile URL
 *                   Discord:
 *                     type: string
 *                     description: New Discord profile URL
 *     responses:
 *       200:
 *         description: OK - Developer updated successfully
 *       404:
 *         description: Not Found - Developer with the provided ID not found
 *       500:
 *         description: Server Error
 */
developerRouter.route('/update/:devId').patch(Auth, controller.updateDeveloper);

export default developerRouter;