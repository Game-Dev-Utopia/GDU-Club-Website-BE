import { Router } from "express";
const gameRouter = Router();
import Auth from "../middleware/auth.js";
import * as controller from "../controllers/gameController.js";

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
 *               - media
 *               - categories
 *               - downloadable
 *               - size
 *               - dimension
 *               - device
 *             properties:
 *               title:
 *                 type: string
 *                 default: Sample Game
 *               description:
 *                 type: string
 *                 default: A description of the game
 *               media:
 *                 type: array
 *                 items:
 *                  type: string
 *                  default: https://example.com/game_image
 *               thumbnail:
 *                 type: string
 *                 default: https://example.com/thumbnail1
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
 *                   type: object
 *                   properties:
 *                      property:
 *                          type: string
 *                          default: OS
 *                      requirement:
 *                         type: string
 *                         default: Windows 10
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
 *               developer_ids:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: developer123
 *               categories:
 *                 type: array
 *                 items:
 *                   type: string
 *                   default: RPG
 *               downloadable:
 *                 type: boolean
 *                 default: true
 *               size:
 *                 type: string
 *                 default: Quick
 *               dimension:
 *                 type: string
 *                 default: 2D
 *               device:
 *                 type: array
 *                 items:
 *                      type: string
 *                      default: Mobile

 *     responses:
 *       201:
 *         description: Created
 *       500:
 *         description: Server Error
 */
gameRouter.route("/addgame").post(controller.addGame);


/** GET Methods */
/**
 * @openapi
 * /api/game/getallgames:
 *   get:
 *     tags:
 *       - Game Management
 *     summary: Get All Games 
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
 * /api/game/homepagegames:
 *   get:
 *     tags:
 *       - Game Management
 *     summary: Get top 7 Games for homepage 
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
gameRouter.route("/getallgames").get(controller.getAllGames);
gameRouter.route("/getgame/:id").get(controller.getGameById);
gameRouter.route("/homepagegames").get(controller.getHomePageGames);



/** DELETE Methods */
/**
 * @openapi
 * '/api/game/deletegame/{gameId}':
 *  delete:
 *     tags:
 *     - Game Management
 *     summary: Delete Game by Id
 *     parameters:
 *      - name: gameId
 *        in: path
 *        description: The unique Id of the game
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
gameRouter.route("/deletegame/:gameId").delete(controller.deleteGame);

export default gameRouter;
