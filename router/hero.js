import { Router } from 'express';
import { getHeroes, createHero } from '../controllers/heroController.js';
import Auth from '../middleware/auth.js';
const heroRouter = Router();


heroRouter.route('/').get(getHeroes).post(Auth, createHero);
export default heroRouter;