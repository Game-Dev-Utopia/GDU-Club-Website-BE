import { Router } from "express";
const timelineRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/timelineController.js";

/** POST Methods */
/**
 * @openapi
 * /api/timeline/addtimeline:
 *   post:  
 *     tags:
 *       - Timeline Management
 *     summary: Add a new timeline event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - details
 *               - date
 *               - image
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample Timeline Title
 *               details:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: Developing and Maintaining web applications using React.js and other related technologies
 *               date:
 *                 type: string
 *                 default: 10/2/2024
 *               image:
 *                 type: string
 *                 default: https://example.com/
 *               altName:
 *                 type: string
 *                 default: alt name
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 */
timelineRouter.route("/addtimeline").post(controller.addTimelineEvent);


/** GET Methods */
/**
 * @openapi
 * /api/timeline/getalltimelines:
 *   get:
 *     tags:
 *       - Timeline Management
 *     summary: Get All Timelines
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
timelineRouter.route("/getalltimelines").get(controller.getAllTimeline);





/** DELETE Methods */
/**
 * @openapi
 * '/api/timeline/deletetimeline/{timelineId}':
 *  delete:
 *     tags:
 *     - Timeline Management
 *     summary: Delete Timeline by Id
 *     parameters:
 *      - name: timelineId
 *        in: path
 *        description: The unique Id of the timeline event
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
timelineRouter.route("/deletetimeline/:timelineId").delete(controller.deleteTimelineEvent);


/** UPDATE Methods */


export default timelineRouter;
