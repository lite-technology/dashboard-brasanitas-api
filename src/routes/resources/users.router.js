import { Router } from "express";

import usersController from "../../resources/users/users.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new usersController();
const usersRouter = Router();

usersRouter.delete("/delete", service.delete);
usersRouter.post("/create", service.create);
usersRouter.put("/update", service.update);
usersRouter.get("/", service.get);

export default usersRouter;