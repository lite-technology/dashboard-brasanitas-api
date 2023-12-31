import { sendError } from "../../app.js";

import ToolService from "./tool.service.js";

export default class toolController {
  async signUp(req, res) {
    const service = new ToolService();
    const response = await service.signUp(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
}
