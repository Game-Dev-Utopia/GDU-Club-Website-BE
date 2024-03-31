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
 *                 type: object
 *                 properties:
 *                   eventName:
 *                     type: string
 *                     example: "Tech Expo 2024"
 *                   eventDate:
 *                     type: string
 *                     example: "2024-05-15"
 *                   eventDescription:
 *                     type: string
 *                     example: "Showcasing the latest in technology"
 *               members:
 *                 type: object
 *                 properties:
 *                   memberId:
 *                     type: string
 *                     example: "john_doe"
 *                   role:
 *                     type: string
 *                     example: "President"
 *               games:
 *                 type: object
 *                 properties:
 *                   gameId:
 *                     type: string
 *                     example: "game123"
 *                   role:
 *                     type: string
 *                     example: "Organizer"
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
 *                   eventName: Tech Expo 2024
 *                   eventDate: 2024-05-15
 *                   eventDescription: Showcasing the latest in technology
 *                 members:
 *                   memberId: john_doe
 *                   role: President
 *                 games:
 *                   gameId: game123
 *                   role: Organizer
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
 *     summary: Update branch details
 *     parameters:
 *       - name: branchId
 *         in: path
 *         description: The unique Id of the branch
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
 *               description:
 *                 type: string
 *               image:
 *                 type: string
 *               backgroundImage:
 *                 type: string
 *               establishedYear:
 *                 type: integer
 *               collegeAffiliation:
 *                 type: string
 *               location:
 *                 type: string
 *               contactInformation:
 *                 type: object
 *                 properties:
 *                   email:
 *                     type: string
 *                   phone:
 *                     type: string
 *                   socialMediaLinks:
 *                     type: object
 *                     properties:
 *                       linkedIn:
 *                         type: string
 *                       instagram:
 *                         type: string
 *               events:
 *                 type: object
 *                 properties:
 *                   eventName:
 *                     type: string
 *                   eventDate:
 *                     type: string
 *                   eventDescription:
 *                     type: string
 *               members:
 *                 type: object
 *                 properties:
 *                   memberId:
 *                     type: string
 *                   role:
 *                     type: string
 *               games:
 *                 type: object
 *                 properties:
 *                   gameId:
 *                     type: string
 *                   role:
 *                     type: string
 *     responses:
 *       '201':
 *         description: Record Updated
 *         content:
 *           application/json:
 *             example:
 *               msg: Record Updated
 *               branch:
 *                 name: Updated Branch
 *                 description: Updated description
 *                 image: https://example.com/updated_image.jpg
 *                 backgroundImage: https://example.com/updated_background.jpg
 *                 establishedYear: 2023
 *                 collegeAffiliation: Updated University
 *                 location: Updated City
 *                 contactInformation:
 *                   email: updated@example.com
 *                   phone: "9876543210"
 *                   socialMediaLinks:
 *                     linkedIn: linkedin.com/updated
 *                     instagram: instagram.com/updated
 *                 events:
 *                   eventName: Updated Event
 *                   eventDate: 2024-06-01
 *                   eventDescription: Updated event description
 *                 members:
 *                   memberId: updated_member
 *                   role: Vice President
 *                 games:
 *                   gameId: updated_game123
 *                   role: Coordinator
 *       '401':
 *         description: Branch Not Found or Unauthorized
 *         content:
 *           application/json:
 *             example:
 *               error: Branch Not Found or Unauthorized
 */
branchRouter.route("/updateBranch/:branchId").patch(controller.updateBranch);





export default branchRouter;