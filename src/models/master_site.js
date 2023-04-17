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
    }
  }
  masterSites.init(
    {
      nojs: DataTypes.STRING,
      site_name: DataTypes.STRING,
      partner: DataTypes.STRING,
      partner_cp: {
        type: DataTypes.STRING,
        unique: false,
      },
      site_keeper_cp: {
        type: DataTypes.STRING,
        unique: false,
      },
      province: DataTypes.STRING,
      city: DataTypes.STRING,
      subdistrict: DataTypes.STRING,
      address: DataTypes.STRING,
      ip: DataTypes.STRING,
      lc: DataTypes.STRING,
      gs: DataTypes.STRING,
      panel_type: DataTypes.STRING,
      ehub_type: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longtitude: DataTypes.STRING,
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
      modelName: "masterSitesModel",
      tableName: "master_sites",
      timestamps: true,
      // timestamps: false,
    }
  );
  return masterSites;
};
