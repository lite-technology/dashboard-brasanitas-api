import { Router } from "express";

import toolController from "../../resources/tool/tool.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new toolController();
const toolRouter = Router();

toolRouter.post("/signup", service.signUp);

export default toolRouter;