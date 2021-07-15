import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import UserController from './app/controllers/UserController';
import ConsultaController from './app/controllers/ConsultaController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users',UserController.store);
routes.post('/trapezoidal',UserController.trapezoidal);
routes.post('/consulta',ConsultaController.index);

routes.use(authMiddleware);
routes.put('/users',UserController.update);
routes.get('/users',UserController.index);
export default routes;