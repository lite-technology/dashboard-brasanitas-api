import { Router } from "express";

import auth from '../../middlewares/auth.js'
import formController from "../../resources/form/form.controllers.js";

const service = new formController();
const formRouter = Router();

formRouter.delete("/delete", service.delete);
formRouter.post("/create", service.create);
formRouter.put("/update", service.update);
formRouter.get("/", service.get);

export default formRouter;