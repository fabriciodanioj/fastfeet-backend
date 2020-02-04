import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/session', SessionController.store);

routes.use(AuthMiddleware);

export default routes;
