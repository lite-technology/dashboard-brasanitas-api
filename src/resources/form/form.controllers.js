import { sendError } from "../../app.js";

import FormService from "./form.service.js";

export default class formController {
  async create(req, res) {
    const service = new FormService();
    const response = await service.create(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
  async update(req, res) {
    const service = new FormService();
    const response = await service.update(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
  async delete(req, res) {
    const service = new FormService();
    const response = await service.delete(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
  async get(req, res) {
    const service = new FormService();
    const response = await service.get(req.body);
    if (response?.error) return sendError(res, response.error);
    return res.status(200).json(response);
  }
}
