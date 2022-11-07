import express from 'express';

import routers from './routes/router';

const app = express();

app.use(express.json());

app.use(routers);

export default app;
