import { Op } from "sequelize";
import models from "../models";

const { masterSitesModel } = models;

export default {
  async getMasterSite(req, res) {
    try {
      const response = await masterSitesModel.findAll();
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get Master Site",
      });
    }
  },

  async createMasterSite(req, res) {
    try {
      await masterSitesModel.create(req.body);
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
