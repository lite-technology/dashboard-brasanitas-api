import { Router } from "express";

import localController from "../../resources/local/local.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new localController();
const localRouter = Router();

localRouter.post("/signup", service.signUp);

export default localRouter;