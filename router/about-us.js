import { Router } from 'express';
const aboutUsRouter = Router();
import Auth from '../middleware/auth.js';
import * as controller from '../controllers/AboutUsController.js';

/**
 * @openapi
 * 
 * /api/aboutus/getaboutus:
 *   get:
 *     tags:
 *       - About Us
 *     summary: Get About Us Content
 *     description: Retrieves the About Us content from the database
 *     responses:
 *       '200':
 *         description: Fetched Successfully
 *       '404':
 *         description: Not Found
 *       '500':
 *         description: Server Error
 */

aboutUsRouter.route('/getaboutus').get(controller.getAboutUsData);


/**
 * @openapi
 * /api/aboutus/addaboutus:
 *   post:
 *     tags:
 *       - About Us
 *     summary: Update or Create About Us Content
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - boardMembersData
 *               - branchesData
 *               - ourTeamsData
 *               - specialThanksData
 *               - topContributionsAndProjects
 *             properties:
 *               boardMembersData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           bodies:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                 responsibilities:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                           intro:
 *                             type: string
 *                           email:
 *                            type: string
 *                           contact:
 *                            type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                               type: string
 *                           github:
 *                               type: string
 *                           instagram:
 *                               type: string
 *               branchesData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           bodies:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                 responsibilities:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                           intro:
 *                             type: string
 *                           email:
 *                            type: string
 *                           contact:
 *                            type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                               type: string
 *                           github:
 *                               type: string
 *                           instagram:
 *                               type: string
 *               ourTeamsData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           bodies:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                 responsibilities:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                           intro:
 *                             type: string
 *                           email:
 *                             type: string
 *                           contact:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                               type: string
 *                           github:
 *                               type: string
 *                           instagram:
 *                               type: string
 *               specialThanksData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           bodies:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                 responsibilities:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                           intro:
 *                             type: string
 *                           email:
 *                            type: string
 *                           contact:
 *                            type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                               type: string
 *                           github:
 *                               type: string
 *                           instagram:
 *                               type: string
 * 
 *               topContributionsAndProjects:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     description:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           bodies:
 *                             type: array
 *                             items:
 *                               type: object
 *                               properties:
 *                                 name:
 *                                   type: string
 *                                 responsibilities:
 *                                   type: array
 *                                   items:
 *                                     type: string
 *                           intro:
 *                             type: string
 *                           email:
 *                            type: string
 *                           contact:
 *                            type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                               type: string
 *                           github:
 *                               type: string
 *                           instagram:
 *                               type: string
 *     responses:
 *       '200':
 *         description: Updated or Created Successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Server Error
 */

aboutUsRouter.route('/addaboutus').post(controller.postAboutUsData);

export default aboutUsRouter;
