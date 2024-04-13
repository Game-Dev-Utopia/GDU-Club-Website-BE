import { Router } from "express";
const achievementRouter = Router();
import Auth from "../middleware/auth.js"
import * as controller from '../controllers/achievementController.js';

/** POST Methods */
/**
 * @openapi
 * /api/achievement/addachievement:
 *   post:
 *     tags:
 *       - Achievements
 *     summary: Add a new achievement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - date
 *               - ranked
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample achievement
 *               description:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: a description item
 *               date:
 *                 type: date
 *                 default: Thu Feb 29 2024 20:45:04 GMT+0530 (India Standard Time)
 *               image:
 *                 type: string
 *                 default: https://example.com/achievement 
 *               ranked:
 *                 type: boolean
 *                 default: false
 *               rank:
 *                 type: number
 *                 default: 1
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * /api/achievement/addachievementtop3:
 *   post:
 *     tags:
 *       - Achievements
 *     summary: Add a new achievement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - date
 *               - ranked
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample achievement
 *               description:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: a description item
 *               date:
 *                 type: date
 *                 default: Thu Feb 29 2024 20:45:04 GMT+0530 (India Standard Time)
 *               image:
 *                 type: string
 *                 default: https://example.com/achievement 
 *               ranked:
 *                 type: boolean
 *                 default: false
 *               rank:
 *                 type: number
 *                 default: 1
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * 
 * /api/achievement/getachievements:
 *   get:
 *     tags:
 *       - Achievements
 *     summary: Get all Achievements
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error
 *
 * /api/achievement/updateachievement:
 *   put:
 *     tags:
 *       - Achievements
 *     summary: Update a Achievement
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id
 *               - title
 *               - description
 *               - date
 *             properties:
 *               id:
 *                  type: string
 *                  default: 65e0a3c1579882608d624b80
 *               title:
 *                 type: string
 *                 default: Sample Design
 *               description:
 *                 type: string
 *                 default: A description of the design
 *               date:
 *                 type: date
 *                 default: Thu Feb 29 2024 20:45:04 GMT+0530 (India Standard Time)
 *               image:
 *                 type: string
 *                 default: https://example.com/design
 *               ranked:
 *                 type: boolean
 *                 default: false
 *               rank:
 *                 type: number
 *                 default: 1
 * 
 *     responses:
 *       201:
 *         description: Fetched
 *       500:
 *         description: Server Error



 * @openapi
 * /api/achievement/deleteachievement:
 *   delete:
 *     tags:
 *       - Achievements
 *     summary: Delete a Achievement
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
 *                 default: 65e09fc0f7c25a801f0af301
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

achievementRouter.route("/addachievement").post(controller.addAchievement)
achievementRouter.route("/addachievementtop3").post(controller.addAchievementToTop3);
achievementRouter.route("/getachievements").get(controller.getAchievements)
achievementRouter.route("/updateachievement").put(controller.updateAchievement)
achievementRouter.route("/deleteachievement").delete(controller.deleteAchievement)

export default achievementRouter;