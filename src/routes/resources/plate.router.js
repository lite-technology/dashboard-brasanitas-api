import { Router } from "express";

import plateController from "../../resources/plate/plate.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new plateController();
const plateRouter = Router();

plateRouter.delete("/delete", service.delete);
plateRouter.post("/create", service.create);
plateRouter.put("/update", service.update);
plateRouter.get("/", service.get);

export default plateRouter;