import { sendError } from "../../app.js";

import StatisticsService from "./statistics.service.js";

export default class statisticsController {
  async get(req, res) {
    const service = new StatisticsService();
    const response = await service.get(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
}
