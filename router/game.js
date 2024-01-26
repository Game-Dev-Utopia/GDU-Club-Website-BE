import { Router } from "express";
const gameRouter = Router();
import Auth from "../middleware/auth.js"
import * as controller from '../controllers/gameController.js';

/** POST Methods */
/**
 * @openapi
 * /api/game/addgame:
 *   post:
 *     tags:
 *       - Game Management
 *     summary: Add a new game
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - features
 *               - trailer_video
 *               - game_image
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample Game
 *               description:
 *                 type: string
 *                 default: A description of the game
 *               features:
 *                 type: string
 *                 default: Exciting features of the game
 *               trailer_video:
 *                 type: string
 *                 default: https://example.com/trailer
 *               game_image:
 *                 type: string
 *                 default: https://example.com/game_image
 *               thumbnails:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: https://example.com/thumbnail1
 *               achievements:
 *                 type: array
 *                 items:
 *                  type: object
 *                  properties:
 *                    image:
 *                      type: string
 *                      default: https://example.com/achievement_image
 *                    title:
 *                      type: string
 *                      default: Achievement Title
 *                    description:
 *                      type: string
 *                      default: Description of the achievement
 *               system_requirements:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: System Requirement
 *               download_url:
 *                 type: string
 *                 default: https://example.com/download
 *               play_url:
 *                 type: string
 *                 default: https://example.com/play
 *               tags:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: Action
 *               developers_id:
 *                 type: string
 *                 default: developer123

 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 */
gameRouter.route('/addgame').post(controller.addGame);



export default gameRouter;