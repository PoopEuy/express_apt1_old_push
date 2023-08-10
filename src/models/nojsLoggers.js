import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class nojsLoggers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }

  nojsLoggers.init(
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

      time_local: DataTypes.STRING,
      eh1: DataTypes.INTEGER,
      eh2: DataTypes.INTEGER,
      vsat_curr: DataTypes.INTEGER,
      bts_curr: DataTypes.INTEGER,
      load3: DataTypes.INTEGER,
      batt_volt1: DataTypes.INTEGER,
      batt_volt2: DataTypes.INTEGER,
      edl1: DataTypes.INTEGER,
      edl2: DataTypes.INTEGER,
      pms_state: DataTypes.STRING,
      json_data: DataTypes.STRING,

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
      modelName: "nojsLoggersModel",
      tableName: "nojs_loggers",
      timestamps: true,
      // timestamps: false,
    }
  );
  nojsLoggers.removeAttribute("id");
  return nojsLoggers;
};
