import { Router } from "express";
const eventRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/eventController.js";

/** POST Methods */
/**
 * @openapi
 * /api/event/addevent:
 *   post:
 *     tags:
 *       - Event Management
 *     summary: Add a new Event
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - eventName
 *               - eventDate
 *               - eventDesc
 *               - imageUrl
 *             properties:
 *               eventName:
 *                 type: string
 *                 default: Sample Event
 *               eventDate:
 *                 type: string
 *                 format: date-time
 *                 default: '2024-04-01T00:00:00Z'
 *               eventDesc:
 *                 type: string
 *                 default: Description of the event
 *               imageUrl:
 *                 type: string
 *                 default: https://example.com/event_image
 *               faq:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     Q:
 *                       type: string
 *                       default: Question
 *                     A:
 *                       type: string
 *                       default: Answer
 *               videoUrl:
 *                 type: string
 *                 default: https://example.com/event_video
 *               starCount:
 *                 type: number
 *                 minimum: 0
 *                 maximum: 5
 *                 default: 0
 *               prizes:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     PrizeName:
 *                       type: string
 *                       default: Prize Name
 *                     Prize:
 *                       type: string
 *                       default: 1000 Rs
 *               registrationDeadline:
 *                 type: string
 *                 format: date-time
 *                 default: '2024-03-31T23:59:59Z'
 *               startsIn:
 *                 type: string
 *                 format: date-time
 *                 default: '2024-04-01T10:00:00Z'
 *               endsIn:
 *                 type: string
 *                 format: date-time
 *                 default: '2024-04-02T18:00:00Z'
 *               individualOrganizers:
 *                 type: boolean
 *                 default: false
 *               organizers:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       default: Organizer Name
 *                     email:
 *                       type: string
 *                       format: email
 *                       default: organizer@example.com
 *                     desc:
 *                       type: string
 *                       default: Organizer Description
 *                     image:
 *                       type: string
 *                       default: https://example.com/organizer_image
 *               rules:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: Rule description
 *               winners:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     isTeam:
 *                       type: boolean
 *                       default: false
 *                     name:
 *                       type: string
 *                       default: Winner Name
 *                     image:
 *                       type: string
 *                       default: https://example.com/winner_image
 *                     teamName:
 *                       type: string
 *                       default: Team Name
 *                     leader:
 *                       type: object
 *                       properties:
 *                         name:
 *                           type: string
 *                           default: Leader Name
 *                         image:
 *                           type: string
 *                           default: https://example.com/leader_image
 *                     teamMembers:
 *                       type: array
 *                       items:
 *                         type: object
 *                         properties:
 *                           name:
 *                             type: string
 *                             default: Team Member Name
 *                           image:
 *                             type: string
 *                             default: https://example.com/member_image
 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 */

eventRouter.route("/addevent").post(Auth, controller.addEvent);


/** GET Methods */
/**
 * @openapi
 * /api/event/getallevents:
 *   get:
 *     tags:
 *       - Event Management
 *     summary: Get All Events
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
 * 
 * 
 * /api/event/{eventId}:
 *   get:
 *     tags:
 *       - Event Management
 *     summary: Get event details by ID
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to retrieve
 *     responses:
 *       200:
 *         description: Event details retrieved successfully
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server Error
 */



eventRouter.route("/getallevents").get(controller.getAllEvents);
eventRouter.route("/getevent/:id").get(controller.getEventById);

/** DELETE Methods */
/**
 * @openapi
 * /api/event/deleteEvent/{eventId}:
 *   delete:
 *     tags:
 *       - Event Management
 *     summary: Delete a event by its Id
 *     description: Delete a event by its ID
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         description: ID of the event to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Event deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               msg: Event deleted successfully
 *       '404':
 *         description: Event not found
 *         content:
 *           application/json:
 *             example:
 *               error: Event not found
 *       '500':
 *         description: Internal Server Error
 *         content:
 *           application/json:
 *             example:
 *               error: Internal Server Error
 *               details: Error details message
 */
eventRouter.route("/deleteevent/:eventId").delete(Auth, controller.deleteEvent);

/**
 * @openapi
 * /api/event/updateevent/{eventId}:
 *   patch:
 *     tags:
 *       - Event Management
 *     summary: Update an event by ID
 *     parameters:
 *       - in: path
 *         name: eventId
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the event to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/model/Event'
 *     responses:
 *       200:
 *         description: Event updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/model/Event'
 *       404:
 *         description: Event not found
 *       500:
 *         description: Server Error
 */

eventRouter.route("/updateevent/:eventId").patch(Auth, controller.updateEvent);

export default eventRouter;