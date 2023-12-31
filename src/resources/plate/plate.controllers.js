import { sendError } from "../../app.js";

import PlateService from "./plate.service.js";

export default class plateController {
  async signUp(req, res) {
    const service = new PlateService();
    const response = await service.signUp(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
}
