import { sendError } from "../../app.js";

import LocalService from "./local.service.js";

export default class localController {
  async signUp(req, res) {
    const service = new LocalService();
    const response = await service.signUp(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
}
