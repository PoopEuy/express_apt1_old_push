import { Op } from "sequelize";
import models from "../models";

const { nojsLoggersModel } = models;

export default {
  async pushData(req, res) {
    console.log("masuk controllers");

    const my_arr = req.body.data;
    const data_array = JSON.parse(my_arr);
    const jumlah_data = data_array.length;
    var data_masuk = 0;
    console.log("jumlah data: " + jumlah_data);

    try {
      data_array.forEach(async (element, index) => {
        const eh1 = element.eh1;
        const eh2 = element.eh2;
        const load3 = element.load3;
        const edl1 = element.edl1;
        const edl2 = element.edl2;
        const edl3 = element.edl3;
        const pms_state = element.pms_state;
        const pv_volt1 = element.pv_volt1;
        const pv_curr1 = element.pv_curr1;
        const batt_volt1 = element.batt_volt1;
        const pv_volt2 = element.pv_volt2;
        const pv_curr2 = element.pv_curr2;
        const batt_volt2 = element.batt_volt2;
        const time_local = element.time_local;
        const nojs = element.nojs;
        const vsat_curr = element.vsat_curr;
        const bts_curr = element.bts_curr;
        const json_array = element.json_data;
        const json_data = JSON.stringify(json_array);

        data_masuk = index + 1;
        console.log("ts : " + time_local);
        console.log("ïndata_masukdex : " + data_masuk);
        console.log("json_data : " + json_data);

        await nojsLoggersModel.create({
          eh1: eh1,
          eh2: eh2,
          load3: load3,
          edl1: edl1,
          edl2: edl2,
          edl3: edl3,
          pms_state: pms_state,
          pv_volt1: pv_volt1,
          pv_curr1: pv_curr1,
          batt_volt1: batt_volt1,
          pv_volt2: pv_volt2,
          pv_curr2: pv_curr2,
          batt_volt2: batt_volt2,
          time_local: time_local,
          nojs: nojs,
          vsat_curr: vsat_curr,
          bts_curr: bts_curr,
          json_data: json_data,
        });
        // const sql = `INSERT INTO nojs_loggers (eh1, eh2, load3, edl1, edl2, edl3, pms_state, pv_volt1, pv_curr1, batt_volt1, pv_volt2, pv_curr2, batt_volt2, time_local, nojs, vsat_curr, bts_curr, json_data) VALUES ('${eh1}', '${eh2}', '${load3}', '${edl1}', '${edl2}', '${edl3}', '${pms_state}', '${pv_volt1}', '${pv_curr1}', '${batt_volt1}', '${pv_volt2}', '${pv_curr2}', '${batt_volt2}', '${time_local}', '${nojs}', '${vsat_curr}', '${bts_curr}', '${json_data}');`;
      });

      if (data_masuk === jumlah_data) {
        return res.status(201).send({
          status: 201,
          message: "Data created successfully",
          jumlah: data_masuk,
        });
      }
      // await nojsUsersModel.create(req.body);
      // return res
      //   .status(201)
      //   .send({ status: 201, message: "Data created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed",
      });
    }
  },

  async getNojsLoggers(req, res) {
    console.log("ambildata");
    try {
      const response = await nojsLoggersModel.findAll({
        attributes: [
          "time_local",
          "nojs",
          "eh1",
          "eh2",
          "vsat_curr",
          "bts_curr",
          "load3",
          "batt_volt1",
          "batt_volt2",
          "edl1",
          "edl2",
          "pms_state",
          "json_data",
        ],
        order: [["time_local", "DESC"]],
        limit: 100,
      });
      return res.status(201).send({ data: response });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message: "Failed Get Nojs Users",
      });
    }
  },
};
