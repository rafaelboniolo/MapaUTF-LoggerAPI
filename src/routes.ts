import {Router} from 'express';

import UserController from './controllers/UserController';
import RequestMonitorController from './controllers/RequestMonitorController';
import LoggerController from './controllers/LogController'
import LogController from './controllers/LogController';

const routes = Router();

routes.get("/java/logger/:start/:end",       LogController.list);
routes.post("/java/logger",       LogController.create);

routes.get("/monitor", RequestMonitorController.list)



export default routes;


