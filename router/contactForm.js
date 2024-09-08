import { Router } from "express";
const contactFormRouter = Router();

import Auth from "../middleware/auth.js";
import * as controller from "../controllers/contactFormController.js";


/** POST Methods */
/**
 * @openapi
 * /api/form/addform:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new form
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - formName
 *               - response
 *             properties:
 *               formName:
 *                 type: string
 *                 default: John Doe
 *               response:
 *                 type: object

 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * 
 * /api/form/getform:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get all form responses
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error
 * 
 */

/** DELETE Methods */
/**
 * @openapi
 * /api/form/deleteform:
 *   delete:
 *     tags:
 *       - Form Management
 *     summary: Delete all 
 *     responses:
 *       '200':
 *         description: Successfully deleted all Form data
 *       '500':
 *         description: Server Error
 */

contactFormRouter.route("/getform").get(controller.getForm);
contactFormRouter.route("/addform").post(controller.addFormResponse);
contactFormRouter.route("/deleteform").delete(controller.clearAllContact);

export default contactFormRouter;