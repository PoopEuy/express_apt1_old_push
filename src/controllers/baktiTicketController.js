import { Op } from "sequelize";
import models from "../models";

const { masterBaktiTicketModel } = models;

export default {
  async getBaktiTicket(req, res) {
    try {
      const response = await masterBaktiTicketModel.findAll();
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get Bakti Ticket",
      });
    }
  },

  async createBaktiTicket(req, res) {
    try {
      await masterBaktiTicketModel.create(req.body);
      return res
        .status(201)
        .send({ status: 201, message: "Data created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get Master Site",
      });
    }
  },
};
