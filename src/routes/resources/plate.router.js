import { Router } from "express";

import plateController from "../../resources/plate/plate.controllers.js";
import auth from '../../middlewares/auth.js'

const service = new plateController();
const plateRouter = Router();

plateRouter.post("/signup", service.signUp);

export default plateRouter;