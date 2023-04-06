import 'express-async-errors';
import express from 'express';

import errorMiddleware from './middlewares/error.middleware';

import routers from './routers/router';

class App {
  readonly app;
  constructor() {
    this.app = express();
    this.initAuthHeader();
    this.initRoutes();
    this.initMiddlewares();
  }

  private initAuthHeader(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header(
        'Access-Control-Allow-Methods',
        'GET,POST,DELETE,OPTIONS,PUT,PATCH'
      );
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  private initMiddlewares(): void {
    this.app.use(errorMiddleware);
  }

  private initRoutes(): void {
    this.app.use(routers);
  }
}

export default new App().app;
