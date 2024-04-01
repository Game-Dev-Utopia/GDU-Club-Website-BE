import {Router} from 'express';
import {getHeroes,createHero} from '../controllers/heroController.js';
const heroRouter = Router();


heroRouter.route('/').get(getHeroes).post(createHero);
export default heroRouter;