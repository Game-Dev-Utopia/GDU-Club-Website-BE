import { Router } from "express";
const branchRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/branchController.js";


/** POST Methods */
/**
 * @openapi
 * /api/branches/addBranch:
 *   post:
 *     tags:
 *       - Branch Management
 *     summary: Add a new branch
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Computer Science Club"
 *               description:
 *                 type: string
 *                 example: "A club for computer enthusiasts"
 *               image:
 *                 type: string
 *                 example: "https://example.com/csclub.jpg"
 *               backgroundImage:
 *                 type: string
 *                 example: "https://example.com/background.jpg"
 *               establishedYear:
 *                 type: integer
 *                 example: 2020
 *               collegeAffiliation:
 *                 type: string
 *                 example: "Example University"
 *               location:
 *                 type: string
 *                 example: "Example City"
 *               contactInformation:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: "csclub@example.com"
 *                   phone:
 *                     type: string
 *                     example: "1234567890"
 *                   socialMediaLinks:
 *                     type: object
 *                     properties:
 *                       linkedIn:
 *                         type: string
 *                         example: "linkedin.com/csclub"
 *                       instagram:
 *                         type: string
 *                         example: "instagram.com/csclub"
 *               events:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     eventName:
 *                       type: string
 *                       example: "Tech Expo 2024"
 *                     eventDate:
 *                       type: string
 *                       example: "2024-05-15"
 *                     eventDescription:
 *                       type: string
 *                       example: "Showcasing the latest in technology"
 *               members:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     memberId:
 *                       type: string
 *                       example: "6617748b7b3a4d6a572a7fb6"
 *                     role:
 *                       type: string
 *                       example: "President"
 *               games:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     gameId:
 *                       type: string
 *                       example: "game123"
 *                     role:
 *                       type: string
 *                       example: "Organizer"
 *     responses:
 *       '201':
 *         description: Branch added successfully
 *         content:
 *           application/json:
 *             example:
 *               msg: Branch added successfully
 *               branch:
 *                 name: Computer Science Club
 *                 description: A club for computer enthusiasts
 *                 image: https://example.com/csclub.jpg
 *                 backgroundImage: https://example.com/background.jpg
 *                 establishedYear: 2020
 *                 collegeAffiliation: Example University
 *                 location: Example City
 *                 contactInformation:
 *                   email: csclub@example.com
 *                   phone: "1234567890"
 *                   socialMediaLinks:
 *                     linkedIn: linkedin.com/csclub
 *                     instagram: instagram.com/csclub
 *                 events:
 *                   - eventName: Tech Expo 2024
 *                     eventDate: 2024-05-15
 *                     eventDescription: Showcasing the latest in technology
 *                 members:
 *                   - memberId: "6617748b7b3a4d6a572a7fb6"
 *                     role: President
 *                 games:
 *                   - gameId: game123
 *                     role: Organizer
 *       '400':
 *         description: Please use a unique branch name
 *         content:
 *           application/json:
 *             example:
 *               error: Please use a unique branch name
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 *               details: Error details message
 */

branchRouter.route("/addBranch").post(controller.addBranch);



/** GET Methods */
/**
 * @openapi
 * /api/branches/getallbranches:
 *   get:
 *     tags:
 *       - Branch Management
 *     summary: Get all branches
 *     description: Retrieve a list of all branches
 *     responses:
 *       '200':
 *         description: Successful operation
 *         content:
 *           application/json:
 *             example:
 *               branches:
 *                 - name: Computer Science Club
 *                   description: A club for computer enthusiasts
 *                   image: https://example.com/csclub.jpg
 *                   establishedYear: 2020
 *                   collegeAffiliation: Example University
 *                   location: Example City
 *                 - name: Electronics Club
 *                   description: A club for electronics enthusiasts
 *                   image: https://example.com/electronicsclub.jpg
 *                   establishedYear: 2018
 *                   collegeAffiliation: Example University
 *                   location: Example City
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 *               details: Error details message
 */
branchRouter.route("/getallbranches").get(controller.getAllBranches);




/** DELETE Methods */
/**
 * @openapi
 * /api/branches/deletebranch/{branchId}:
 *   delete:
 *     tags:
 *       - Branch Management
 *     summary: Delete a branch
 *     description: Delete a branch by its ID
 *     parameters:
 *       - in: path
 *         name: branchId
 *         required: true
 *         description: ID of the branch to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Branch deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               msg: Branch deleted successfully
 *       '404':
 *         description: Branch not found
 *         content:
 *           application/json:
 *             example:
 *               error: Branch not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 *               details: Error details message
 */
branchRouter.route("/deletebranch/:branchId").delete(controller.deleteBranch);


/** PATCH Methods */
/**
 * @openapi
 * /api/branches/updateBranch/{branchId}:
 *   patch:
 *     tags:
 *       - Branch Management
 *     summary: Update an existing branch
 *     parameters:
 *       - name: branchId
 *         in: path
 *         description: ID of the branch to update
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
 *                 example: "New Computer Science Club"
 *               description:
 *                 type: string
 *                 example: "A club for technology enthusiasts"
 *               image:
 *                 type: string
 *                 example: "https://example.com/newcsclub.jpg"
 *               backgroundImage:
 *                 type: string
 *                 example: "https://example.com/newbackground.jpg"
 *               establishedYear:
 *                 type: integer
 *                 example: 2021
 *               collegeAffiliation:
 *                 type: string
 *                 example: "New Example University"
 *               location:
 *                 type: string
 *                 example: "New Example City"
 *               contactInformation:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                     example: "newcsclub@example.com"
 *                   phone:
 *                     type: string
 *                     example: "9876543210"
 *                   socialMediaLinks:
 *                     type: object
 *                     properties:
 *                       linkedIn:
 *                         type: string
 *                         example: "linkedin.com/newcsclub"
 *                       instagram:
 *                         type: string
 *                         example: "instagram.com/newcsclub"
 *               events:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     eventName:
 *                       type: string
 *                       example: "New Tech Expo 2024"
 *                     eventDate:
 *                       type: string
 *                       example: "2024-06-15"
 *                     eventDescription:
 *                       type: string
 *                       example: "Showcasing the latest in innovation"
 *               members:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     memberId:
 *                       type: string
 *                       example: "6617748b7b3a4d6a572a7fb6"
 *                     role:
 *                       type: string
 *                       example: "Vice President"
 *               games:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     gameId:
 *                       type: string
 *                       example: "newgame123"
 *                     role:
 *                       type: string
 *                       example: "Coordinator"
 *     responses:
 *       '201':
 *         description: Branch updated successfully
 *         content:
 *           application/json:
 *             example:
 *               msg: Branch updated successfully
 *               branch:
 *                 name: New Computer Science Club
 *                 description: A club for technology enthusiasts
 *                 image: https://example.com/newcsclub.jpg
 *                 backgroundImage: https://example.com/newbackground.jpg
 *                 establishedYear: 2021
 *                 collegeAffiliation: New Example University
 *                 location: New Example City
 *                 contactInformation:
 *                   email: newcsclub@example.com
 *                   phone: "9876543210"
 *                   socialMediaLinks:
 *                     linkedIn: linkedin.com/newcsclub
 *                     instagram: instagram.com/newcsclub
 *                 events:
 *                   - eventName: New Tech Expo 2024
 *                     eventDate: 2024-06-15
 *                     eventDescription: Showcasing the latest in innovation
 *                 members:
 *                   - memberId: 6617748b7b3a4d6a572a7fb6
 *                     role: Vice President
 *                 games:
 *                   - gameId: newgame123
 *                     role: Coordinator
 *       '400':
 *         description: Please provide valid data for branch update
 *         content:
 *           application/json:
 *             example:
 *               error: Invalid branch update data
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 *               details: Error details message
 */

branchRouter.route("/updateBranch/:branchId").patch(controller.updateBranch);





export default branchRouter;