import express from 'express';

import userRouter from './user.router';
import loginRouter from './login.router';
import cellRouter from './cell.router';

const routers = express.Router();

routers.use('/login', loginRouter);

routers.use('/user/cell', cellRouter);

routers.use('/user', userRouter);

export default routers;
