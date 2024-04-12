import { Router } from 'express';
const aboutUsRouter = Router();
import Auth from '../middleware/auth.js';
import * as controller from '../controllers/AboutUsController.js';

/**
 * @openapi
 * /api/aboutus/getcontent:
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

aboutUsRouter.route('/getcontent').get(controller.getAboutUsData);


/**
 * @openapi
 * /api/aboutus/updatecontent:
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
 *               - branchesData
 *               - topContributionsAndProjects
 *               - ourTeamsData
 *               - specialThanksData
 *               - headCouncilData
 *             properties:
 *               branchesData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           designation:
 *                             type: string
 *                           desc:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://linkedin.com/", "id"]
 *                           github:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://github.com/", "id"]
 *                           instagram:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://instagram.com/", "id"]
 *               topContributionsAndProjects:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           designation:
 *                             type: string
 *                           desc:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://linkedin.com/", "id"]
 *                           github:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://github.com/", "id"]
 *                           instagram:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://instagram.com/", "id"]
 *               ourTeamsData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           designation:
 *                             type: string
 *                           desc:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://linkedin.com/", "id"]
 *                           github:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://github.com/", "id"]
 *                           instagram:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://instagram.com/", "id"]
 *               specialThanksData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           designation:
 *                             type: string
 *                           desc:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://linkedin.com/", "id"]
 *                           github:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://github.com/", "id"]
 *                           instagram:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://instagram.com/", "id"]
 * 
 *               boardMembersData:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     title:
 *                       type: string
 *                     data:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                           designation:
 *                             type: string
 *                           desc:
 *                             type: string
 *                           profileImageURL:
 *                             type: string
 *                           bgImageURL:
 *                             type: string
 *                           linkedin:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://linkedin.com/", "id"]
 *                           github:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://github.com/", "id"]
 *                           instagram:
 *                             type: array
 *                             items:
 *                               type: string
 *                             example: ["https://instagram.com/", "id"]
 *     responses:
 *       '200':
 *         description: Updated or Created Successfully
 *       '401':
 *         description: Unauthorized
 *       '500':
 *         description: Server Error
 */

aboutUsRouter.route('/updatecontent').post(controller.postAboutUsData);

export default aboutUsRouter;
