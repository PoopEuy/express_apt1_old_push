import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class nojsUsers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  nojsUsers.init(
    {
      nojs: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your nojs",
        },
        unique: {
          args: true,
          msg: "nojs already exists",
        },
      },
      site: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your site name",
        },
        unique: {
          args: true,
          msg: "site name already exists",
        },
      },
      provinsi: DataTypes.STRING,
      ic: DataTypes.STRING,
      mitra: DataTypes.STRING,
      ip: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      id_lvdvsat: DataTypes.INTEGER,
      id_ping: DataTypes.INTEGER,
      id_batvolt: DataTypes.INTEGER,
      id_vsatcurr: DataTypes.INTEGER,
      id_btscurr: DataTypes.INTEGER,
      no_urut: DataTypes.INTEGER,
      ehub_version: DataTypes.BOOLEAN,
      panel2_type: DataTypes.BOOLEAN,

      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "nojsUsersModel",
      tableName: "nojs_users",
      timestamps: true,
      // timestamps: false,
    }
  );
  return nojsUsers;
};
