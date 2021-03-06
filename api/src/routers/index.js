/**
 * @typedef {import('express').Express} Express
 */
import { Router } from 'express';
import userRouter from './userRouter';
import authRouter from './authRouter';
import statusRouter from './statusRouter';
import donatorRouter from './donatorRouter';
import deviceRouter from './deviceRouter';
import activityRouter from './activityRouter';
import commentRouter from './commentRouter';
import donationRouter from './donationRouter';
import dashboardRouter from './dashboardRouter';

// Router da API
export const apiRouter = Router();

apiRouter.get('/', (req, res) => res.send({ root: true }));
apiRouter.use('/users', authRouter);
apiRouter.use('/users', userRouter);
apiRouter.use('/statuses', statusRouter);
apiRouter.use('/donators', donatorRouter);
apiRouter.use('/devices', deviceRouter);
apiRouter.use('/activities', activityRouter);
apiRouter.use('/comments', commentRouter);
apiRouter.use('/donations', donationRouter);
apiRouter.use('/dashboard', dashboardRouter);

/**
 * Configura rotas do app
 * @param {Express} app Express
 * @returns {void}
 */
export function setupRouters(app) {
  app.use('/api', apiRouter);
}

export {
  userRouter,
  authRouter,
  statusRouter,
  donatorRouter,
  deviceRouter,
  activityRouter,
  donationRouter,
  dashboardRouter
};
