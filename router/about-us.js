import { Router } from 'express';
const aboutUsRouter = Router();
import Auth from '../middleware/auth.js';
import * as controller from '../controllers/AboutUsController.js';

/** GET Methods */
/**
 * @openapi
 * /api/aboutus/getcontent:
 *   get:
 *     tags:
 *       - About Us
 *     summary: Get About Us Content
 *     responses:
 *       200:
 *         description: Fetched Successfully
 *       404:
 *         description: Not Found
 *       500:
 *         description: Server Error
 */
aboutUsRouter.route('/getcontent').get(controller.getAboutUsContent);

aboutUsRouter.route('/addfutureplan').post(Auth, controller.addFuturePlan);
aboutUsRouter.route('/updatefutureplan/:id').put(Auth, controller.updateFuturePlan);
aboutUsRouter.route('/deletefutureplan/:id').delete(Auth, controller.deleteFuturePlan);


/** POST Methods */
/**
 * @openapi
 * /api/aboutus/updatecontent:
 *   post:
 *     tags:
 *       - About Us
 *     summary: Update or Create About Us Content
 *     security:
 *       - Auth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - team
 *             properties:
 *               title:
 *                 type: string
 *                 default: About Us Title
 *               description:
 *                 type: string
 *                 default: A brief description about us
 *               team:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       default: Team Member Name
 *                     role:
 *                       type: string
 *                       default: Team Member Role
 *     responses:
 *       200:
 *         description: Updated or Created Successfully
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Server Error
 */
aboutUsRouter.route('/updatecontent').post(Auth, controller.updateAboutUsContent);

export default aboutUsRouter;
