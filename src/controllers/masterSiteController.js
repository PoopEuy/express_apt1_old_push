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

  async updateMasterSiteIP(req, res) {
    try {
      const data = req.body.data;
      let updated_count = 0;
      let failed_count = 0;
      let data_terproses = 0;
      const failed_array = [];

      for (let i = 0; i < data.length; i++) {
        const site_name = data[i].site_name;
        const ip_address = data[i].ip_address;

        const response = await masterSitesModel.update(
          { ip_address: ip_address },
          {
            where: { name: site_name },
          }
        );

        if (response == 1) {
          updated_count = updated_count + 1;
          data_terproses = data_terproses + 1;
        } else {
          failed_count = failed_count + 1;
          data_terproses = data_terproses + 1;
          failed_array.push(site_name);
        }

        if (data_terproses === data.length) {
          if (updated_count === data.length) {
            res.status(200).json({ msg: "update success" });
          }
          if (failed_count > 0) {
            res.status(200).json({
              msg: "terdapat site tidak terupdate",
              total_data: data.length,
              updated_count: updated_count,
              failed_count: failed_count,
              site_failed: failed_array,
            });
          }
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  },
};
