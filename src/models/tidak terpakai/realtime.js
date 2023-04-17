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
        foreignKey: "site_id",
        as: "site",
      });
    }
  }
  masterSites.init(
    {
      site_id: DataTypes.INTEGER,
      no_ticket_bakti: DataTypes.INTEGER,
      no_ticket_internal: DataTypes.INTEGER,
      realtime_detail: DataTypes.JSON,
    },
    {
      sequelize,
      modelName: "realtimeModel",
      tableName: "realtime",
    }
  );
  return masterSites;
};
