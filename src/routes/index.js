import { Router } from "express";

import usersRouter from "./resources/users.router.js";
import localRouter from "./resources/local.router.js";
import plateRouter from "./resources/plate.router.js";
import formRouter from "./resources/form.router.js";
import toolRouter from "./resources/tool.router.js";

export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.use('/users', usersRouter);
router.use('/local', localRouter);
router.use('/plate', plateRouter);
router.use('/form', formRouter);
router.use('/tool', toolRouter);



