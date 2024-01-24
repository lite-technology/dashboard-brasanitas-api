import { Router } from "express";

import statisticsRouter from "./resources/statistics.router.js";
import seguranceRouter from "./resources/segurance.router.js";
import usersRouter from "./resources/users.router.js";
import localRouter from "./resources/local.router.js";
import plateRouter from "./resources/plate.router.js";
import formRouter from "./resources/form.router.js";
import toolRouter from "./resources/tool.router.js";

export const router = Router();

router.get("/ping", (req, res) => {
  res.sendStatus(200);
});

router.use('/statistics', statisticsRouter);
router.use('/segurance', seguranceRouter);
router.use('/users', usersRouter);
router.use('/local', localRouter);
router.use('/plate', plateRouter);
router.use('/form', formRouter);
router.use('/tool', toolRouter);



