import * as controller from "../controllers/sponsersController.js"
import express from "express";
const sponserRouter = express.Router();

/**
 * @openapi
 * /api/sponser/addsponser:
 *   post:
 *     tags:
 *       - Sponsers
 *     summary: Add a new sponser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - logo
 *               - link
 *               - description
 *               - endDate
 *             properties:
 *               name:
 *                 type: string
 *                 default: First Sponser
 *               email:
 *                 type: string
 *                 default: sponser@gmail.com
 *               phone:
 *                 type: Number
 *                 default: 9876543210
 *               logo:
 *                 type: string
 *                 default: https://example.com/logo
 *               link:
 *                 type: string
 *                 default: https://sponser.com/
 *               description:
 *                 type: string
 *                 default: A description of the sponser
 *               endDate:
 *                 type: date
 *                 default: Thu Feb 29 2024 20:45:04 GMT+0530 (India Standard Time)
 *               type:
 *                 type: string
 *                 default: Media Partner 

 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * 
 * /api/sponser/getsponsers:
 *   get:
 *     tags:
 *       - Sponsers
 *     summary: Get all sponsers
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error
 *
 * /api/sponser/updatesponser:
 *   put:
 *     tags:
 *       - Sponsers
 *     summary: Update a sponser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - name
 *               - email
 *               - phone
 *               - logo
 *               - link
 *               - description
 *               - endDate
 *             properties:
 *               id:
 *                  type: string
 *                  default: 65f33c18efc637a4b746634b
 *               name:
 *                 type: string
 *                 default: First Sponser
 *               email:
 *                 type: string
 *                 default: sponser@gmail.com
 *               phone:
 *                 type: Number
 *                 default: 9876543210
 *               logo:
 *                 type: string
 *                 default: https://example.com/logo
 *               link:
 *                 type: string
 *                 default: https://sponser.com/
 *               description:
 *                 type: string
 *                 default: A description of the sponser
 *               endDate:
 *                 type: date
 *                 default: Thu Feb 29 2024 20:45:04 GMT+0530 (India Standard Time)
 *               type:
 *                 type: string
 *                 default: Media Partner
 * 
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error


 * @openapi
 * /api/sponser/deletesponser:
 *   delete:
 *     tags:
 *       - Sponsers
 *     summary: Delete a Sponser
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *             properties:
 *               id:
 *                 type: string
 *                 default: 65f33c18efc637a4b746634b
 *     
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

sponserRouter.route("/addsponser").post(controller.addSponser);
sponserRouter.route("/getsponsers").get(controller.getSponsers);
sponserRouter.route("/updatesponser").put(controller.updateSponser);
sponserRouter.route("/deletesponser").delete(controller.deleteSponser);

export default sponserRouter