import express from 'express';
//Controller import here
import basicController from './controllers/basicController';
import userController from './controllers/userController';

const routes = express();

//basic routes
routes.get('/', basicController.get);

//user routes
routes.post('/signup',userController.post);

export default routes;