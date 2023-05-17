import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class masterSites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.masterSitesModel, {
        foreignKey: "site_id_name",
        as: "site_id",
      });

      // this.belongsTo(models.masterBaktiTicketModel, {
      //   foreignKey: "no_ticket_bakti",
      //   as: "bakti_ticket",
      // });

      // this.belongsTo(models.masterInternalTicketModel, {
      //   foreignKey: "no_ticket_internal",
      //   as: "internal_ticket",
      // });
    }
  }
  masterSites.init(
    {
      // id: DataTypes.INTEGER,
      site_id_name: DataTypes.TEXT,
      last_time: DataTypes.TEXT,
      site_name: DataTypes.INTEGER,
      downtime: DataTypes.INTEGER,
      batt_volt: DataTypes.INTEGER,
      down_reason: DataTypes.STRING,
      message: DataTypes.TEXT,
      load1: DataTypes.FLOAT,
      load2: DataTypes.FLOAT,
      load3: DataTypes.FLOAT,
      pv1_curr: DataTypes.FLOAT,
      pv2_curr: DataTypes.FLOAT,
      pv3_curr: DataTypes.FLOAT,
      pv1_volt: DataTypes.FLOAT,
      pv2_volt: DataTypes.FLOAT,
      pv3_volt: DataTypes.FLOAT,
      ping: DataTypes.INTEGER,
      total_pack: DataTypes.INTEGER,
      site_host: DataTypes.STRING,
      error_message: DataTypes.TEXT,
      message_scc: DataTypes.TEXT,
      message_baterai: DataTypes.TEXT,
      message_load: DataTypes.TEXT,
      is_flat: DataTypes.INTEGER,
      time_remaining: DataTypes.INTEGER,
      // no_ticket_bakti: DataTypes.INTEGER,
      // no_ticket_internal: DataTypes.INTEGER,
      // realtime_detail: DataTypes.JSON,
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
      modelName: "realtimeModel",
      tableName: "realtime",
    }
  );
  return masterSites;
};
