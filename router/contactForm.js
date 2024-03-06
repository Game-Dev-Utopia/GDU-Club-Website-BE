import { Router } from "express";
const contactFormRouter = Router();

import Auth from "../middleware/auth.js"
import * as controller from "../controllers/contactFormController.js.js"

/** POST Methods */
/**
 * @openapi
 * /api/form/addBusinessProposal:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new BusinessProposal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               details:
 *                 type: object
 *                 properties:
 *                   Name:
 *                     type: string
 *                     default: John Doe
 *                   Email:
 *                     type: string
 *                     default: john@example.com
 *                   PhoneNo:
 *                     type: string
 *                     default: "+1234567890"
 *               organisationinfo:
 *                 type: object
 *                 properties:
 *                   OrgName:
 *                     type: string
 *                     default: Organization Name
 *                   Industry:
 *                     type: string
 *                     default: IT
 *                   LinkedInUrl:
 *                     type: string
 *                     default: https://linkedin.com/company/example
 *                   Description:
 *                     type: string
 *                     default: Description of the organization
 *               businessidea:
 *                 type: object
 *                 properties:
 *                   BusinessIdea:
 *                     type: string
 *                     default: Business Idea
 *                   Problem:
 *                     type: string
 *                     default: Description of the problem
 *                   Solution:
 *                     type: string
 *                     default: Description of the solution
 *                   Budget:
 *                     type: string
 *                     default: "$10000"
 *                   TeamSize:
 *                     type: integer
 *                     default: 5
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 * 
 * /api/form/addEventHost:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new EventHost
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               basicInfo:
 *                 type: object
 *                 properties:
 *                   Name:
 *                     type: string
 *                     default: John Doe
 *                   Email:
 *                     type: string
 *                     default: john@example.com
 *                   PhoneNo:
 *                     type: string
 *                     default: "+1234567890"
 *               organisationinfo:
 *                 type: object
 *                 properties:
 *                   OrgName:
 *                     type: string
 *                     default: Organization Name
 *                   Industry:
 *                     type: string
 *                     default: IT
 *                   LinkedInUrl:
 *                     type: string
 *                     default: https://linkedin.com/company/example
 *                   Description:
 *                     type: string
 *                     default: Description of the organization
 *               eventinfo:
 *                 type: object
 *                 properties:
 *                   EventName:
 *                     type: string
 *                     default: Event Name
 *                   EventType:
 *                     type: string
 *                     default: Conference
 *                   Description:
 *                     type: string
 *                     default: Description of the event
 *                   PartnershipDetails:
 *                     type: string
 *                     default: Partnership details
 *                   Dates:
 *                     type: string
 *                     default: Event dates
 *     responses:
 *       '201':
 *         description: Created
 *       '500':
 *         description: Server Error
 * /api/form/addJoinUs:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new JoinUs entry
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               info:
 *                 type: object
 *                 properties:
 *                   Name:
 *                     type: string
 *                     default: John Doe
 *                   Email:
 *                     type: string
 *                     default: john@example.com
 *                   Age:
 *                     type: number
 *                     default: 25
 *                   Sex:
 *                     type: string
 *                     default: Male
 *               step2:
 *                 type: object
 *                 properties:
 *                   Qualification:
 *                     type: string
 *                     default: Bachelor's Degree
 *                   Occupation:
 *                     type: string
 *                     default: Software Engineer
 *               reasons:
 *                 type: object
 *                 properties:
 *                   WhyJoinUs:
 *                     type: string
 *                     default: Interested in joining
 *                   RolePreference:
 *                     type: string
 *                     default: Full-time position
 *     responses:
 *       '201':
 *         description: Created
 *       '500':
 *         description: Server Error
 * 
 * 
 * /api/form/addProjectProposal:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new Project Proposal
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               details:
 *                 type: object
 *                 properties:
 *                   Name:
 *                     type: string
 *                     default: John Doe
 *                   Email:
 *                     type: string
 *                     default: john@example.com
 *                   PhoneNo:
 *                     type: string
 *                     default: "+1234567890"
 *               organisationinfo:
 *                 type: object
 *                 properties:
 *                   OrgName:
 *                     type: string
 *                     default: Organization Name
 *                   ProjectIdea:
 *                     type: string
 *                     default: Project Idea
 *               projectdetails:
 *                 type: object
 *                 properties:
 *                   Idea:
 *                     type: string
 *                     default: Project Idea Description
 *                   ExpectedBudget:
 *                     type: string
 *                     default: "$10000"
 *                   TeamSize:
 *                     type: integer
 *                     default: 5
 *                   ProjectDuration:
 *                     type: string
 *                     default: 6 months
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
* /api/form/addQuery:
 *   post:
 *     tags:
 *       - Form Management
 *     summary: Add a new query
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               info:
 *                 type: object
 *                 properties:
 *                   Name:
 *                     type: string
 *                     default: John Doe
 *                   Email:
 *                     type: string
 *                     default: john@example.com
 *                   PhoneNo:
 *                     type: string
 *                     default: "+1234567890"
 *                   QueryType:
 *                     type: string
 *                     default: General
 *                   EmergencyType:
 *                     type: string
 *                     default: None
 *                   Message:
 *                     type: string
 *                     default: Example query message
 *     responses:
 *       '201':
 *         description: Created
 *       '500':
 *         description: Server Error
 */


contactFormRouter.route("/addbusinessproposal").post(controller.addBusinessProposal);
contactFormRouter.route("/addeventhost").post(controller.addEventHost);
contactFormRouter.route("/addjoinus").post(controller.addJoinUs);
contactFormRouter.route("/addprojectproposal").post(controller.addProjectProposal);
contactFormRouter.route("/addquery").post(controller.addQuery);


/** GET Methods */
/**
 * @openapi
 * /api/form/getBusinessProposals:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get All BusinessProposals
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
 * 
 * /api/form/getEventHosts:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get All Event host requests
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
 * 
 * /api/form/getJoinUsEntries:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get All Join Us entries
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
 * 
 * /api/form/getProjectProposals:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get All ProjectProposals
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
 * 
 * /api/form/getQueries:
 *   get:
 *     tags:
 *       - Form Management
 *     summary: Get All Query and concerns
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
contactFormRouter.route("/getBusinessProposals").get(controller.getBusinessProposals);
contactFormRouter.route("/getQueries").get(controller.getQueries);
contactFormRouter.route("/getProjectProposals").get(controller.getProjectProposals);
contactFormRouter.route("/getJoinUsEntries").get(controller.getJoinUsEntries);
contactFormRouter.route("/getEventHosts").get(controller.getEventHosts);

/** DELETE Methods */
/**
 * @openapi
 * /api/form/deleteAllForm:
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

contactFormRouter.route("/deleteAllForm").delete(controller.clearAllContact);

export default contactFormRouter;