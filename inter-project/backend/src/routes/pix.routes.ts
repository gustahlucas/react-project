import { Router } from 'express';
import userAuthenticated from '../middlewares/userAuthenticated';
import PixController from '../resources/pix/pix.controllers';

const pixRouter = Router();
const pixController = new PixController();
// GET retorna um dado
// POST - envia dado
// PUT(TODO O USUARIO) ou PATCH(ATUALIZA ALGUM ATRIBUTO) - atualiza um dado
// DELETE - apaga o dado

pixRouter.use(userAuthenticated);
pixRouter.post('/request', pixController.request);
pixRouter.get('/pay/:key', pixController.pay);
pixRouter.get('/transactions', pixController.transactions);

export default pixRouter;
