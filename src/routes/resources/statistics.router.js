import { Router } from "express";

import auth from '../../middlewares/auth.js'
import statisticsController from "../../resources/statistics/statistics.controllers.js";

const service = new statisticsController();
const statisticsRouter = Router();

statisticsRouter.get("/", service.get);

export default statisticsRouter;