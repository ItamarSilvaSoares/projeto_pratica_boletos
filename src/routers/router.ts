import express from 'express';

import userRouter from './user.router';
import loginRouter from './login.router';

const routers = express.Router();

routers.use('/login', loginRouter);
routers.use('/user', userRouter);

export default routers;
