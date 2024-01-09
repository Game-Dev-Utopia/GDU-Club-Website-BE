import { Router } from "express";
const userRouter = Router();
import * as controller from '../controllers/userController.js';

/** POST Methods */
    /**
     * @openapi
     * '/api/user/register':
     *  post:
     *     tags:
     *     - User Auth
     *     summary: Create a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - email
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: pranay 
     *              email:
     *                type: string
     *                default: pranay@gmail.com
     *              password:
     *                type: string
     *                default: Pass@123
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    userRouter.route('/register').post(controller.register);

    /**
     * @openapi
     * '/api/user/login':
     *  post:
     *     tags:
     *     - User Auth
     *     summary: Login as a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - username
     *              - password
     *            properties:
     *              username:
     *                type: string
     *                default: pranay
     *              password:
     *                type: string
     *                default: Pass@123
     *     responses:
     *      201:
     *        description: Created
     *      409:
     *        description: Conflict
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    userRouter.route('/login').post(controller.login);

/** GET Methods */
    /**
     * @openapi
     * '/api/user/{username}':
     *  get:
     *     tags:
     *     - User Auth
     *     summary: Get a user by username
     *     parameters:
     *      - name: username
     *        in: path
     *        description: The username of the user
     *        required: true
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    userRouter.route('/:username').get(controller.getUser)

/** PUT Methods */
    /**
     * @openapi
     * '/api/user/update':
     *  put:
     *     tags:
     *     - User Auth
     *     summary: Modify a user
     *     requestBody:
     *      required: true
     *      content:
     *        application/json:
     *           schema:
     *            type: object
     *            required:
     *              - userId
     *            properties:
     *              userId:
     *                type: string
     *                default: ''
     *              firstName:
     *                type: string
     *                default: ''
     *              lastName:
     *                type: string
     *                default: ''
     *     responses:
     *      200:
     *        description: Modified
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    userRouter.route('/update').put(controller.updateUser);

/** DELETE Methods */
    /**
     * @openapi
     * '/api/user/{userId}':
     *  delete:
     *     tags:
     *     - User Auth
     *     summary: Delete user by Id
     *     parameters:
     *      - name: userId
     *        in: path
     *        description: The unique Id of the user
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
    userRouter.route('/:userId').delete(controller.deleteUser);



export default userRouter;