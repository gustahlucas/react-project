import { Router } from 'express';
import userRouter from './user.routes';
import pixRouter from './pix.routes';

const routes = Router();
routes.use('/pix', pixRouter);
routes.use('/user', userRouter);

export default routes;
