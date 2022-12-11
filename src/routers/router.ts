import express from 'express';

import userRouter from './user.router';
import loginRouter from './login.router';
import cellRouter from './cell.router';
import emailRouter from './email.router';

const routers = express.Router();

routers.use('/login', loginRouter);

routers.use('/user/cell', cellRouter);

routers.use('/user/email', emailRouter);

routers.use('/user', userRouter);

export default routers;
