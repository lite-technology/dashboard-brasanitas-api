import { Router } from "express";

import seguranceController from "../../resources/segurance/segurance.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new seguranceController();
const seguranceRouter = Router();

seguranceRouter.delete("/delete", service.delete);
seguranceRouter.post("/create", service.create);
seguranceRouter.put("/update", service.update);
seguranceRouter.get("/", service.get);

export default seguranceRouter;