import { Model } from "sequelize";

// const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class masterInternalTicket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  masterInternalTicket.init(
    {
      site_id: DataTypes.INTEGER,

      no_ticket_internal: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your internal ticket",
        },
        unique: {
          args: true,
          msg: "internal ticket already exists",
        },
      },
      category: DataTypes.STRING,
      note: DataTypes.TEXT,
      file: DataTypes.STRING,
      created_at: DataTypes.DATE,
      updated_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "masterInternalTicketModel",
      tableName: "master_internal_tickets",
      // timestamps: false,
    }
  );
  return masterInternalTicket;
};
