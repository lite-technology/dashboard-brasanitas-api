import { Router } from "express";

import toolController from "../../resources/tool/tool.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new toolController();
const toolRouter = Router();

toolRouter.delete("/delete", service.delete);
toolRouter.post("/create", service.create);
toolRouter.put("/update", service.update);
toolRouter.get("/", service.get);

export default toolRouter;