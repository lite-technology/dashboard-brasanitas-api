import { Router } from "express";

import localController from "../../resources/local/local.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new localController();
const localRouter = Router();

localRouter.delete("/delete", service.delete);
localRouter.post("/create", service.create);
localRouter.put("/update", service.update);

export default localRouter;