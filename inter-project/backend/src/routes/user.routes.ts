import { Router } from 'express';
import { UserController } from '../resources/user/user.controllers';

import userAuthenticated from '../middlewares/userAuthenticated';

const userRouter = Router();
const userController = new UserController();
// GET retorna um dado
// POST - envia dado
// PUT(TODO O USUARIO) ou PATCH(ATUALIZA ALGUM ATRIBUTO) - atualiza um dado
// DELETE - apaga o dado
userRouter.post('/signin', userController.signin);
userRouter.post('/signup', userController.signup);
userRouter.get('/me', userAuthenticated, userController.me);

export default userRouter;
