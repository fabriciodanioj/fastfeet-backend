import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import RecipientController from './app/controllers/RecipientController';

import AuthMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.use(AuthMiddleware);

routes.post('/recipient', RecipientController.store);
routes.get('/recipient', RecipientController.index);
routes.delete('/recipient/:id', RecipientController.delete);
routes.put('/recipient/:id', RecipientController.update);

export default routes;
