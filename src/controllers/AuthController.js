import { Op } from "sequelize";
import models from "../models";

const { usersModel } = models;

export default {
  async signUp(req, res) {
    const { email, password, username, fullname, phone, role } = req.body;
    try {
      const response = await usersModel.findOne({
        where: { [Op.or]: [{ phone }, { email }] },
      });
      if (response) {
        return res
          .status(422)
          .send({ message: "User with that email or phone already exists" });
      }

      await usersModel.create({
        username,
        fullname,
        email,
        role,
        password,
        phone,
      });
      return res
        .status(201)
        .send({ status: 201, message: "Account created successfully" });
    } catch (e) {
      console.log(e);
      return res.status(500).send({
        message:
          "Could not perform operation at this time, kindly try again later.",
      });
    }
  },
};
