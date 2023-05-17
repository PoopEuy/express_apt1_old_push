import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class masterBaktiTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  masterBaktiTicket.init(
    {
      site_id: DataTypes.INTEGER,
      no_ticket_bakti: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your bakti ticket",
        },
        unique: {
          args: true,
          msg: "bakti ticket already exists",
        },
      },
      file: DataTypes.STRING,
      note: DataTypes.STRING,
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
      modelName: "masterBaktiTicketModel",
      tableName: "master_bakti_ticket",
      // timestamps: false,
    }
  );
  return masterBaktiTicket;
};
