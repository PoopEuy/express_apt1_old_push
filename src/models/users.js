import { Model } from "sequelize";

const PROTECTED_ATTRIBUTES = ["password"];

export default (sequelize, DataTypes) => {
  class users extends Model {
    toJSON() {
      // hide protected fields
      const attributes = { ...this.get() };
      // eslint-disable-next-line no-restricted-syntax
      for (const a of PROTECTED_ATTRIBUTES) {
        delete attributes[a];
      }
      return attributes;
    }
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init(
    {
      username: DataTypes.STRING,
      fullname: DataTypes.STRING,
      email: {
        type: DataTypes.STRING,
        allowNull: {
          args: false,
          msg: "Please enter your email address",
        },
        unique: {
          args: true,
          msg: "Email already exists",
        },
        validate: {
          isEmail: {
            args: true,
            msg: "Please enter a valid email address",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      role: DataTypes.STRING,
      last_ip_address: DataTypes.STRING,
      last_login_at: DataTypes.DATE,
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
      },
      updatedAt: {
        type: DataTypes.DATE,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "usersModel",
      tableName: "users",
      timestamps: true,
    }
  );
  return users;
};
