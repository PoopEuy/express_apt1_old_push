export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("master_bakti_ticket", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      site_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "master_sites",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      no_ticket_bakti: {
        type: Sequelize.STRING,
        unique: true,
      },
      file: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("master_bakti_ticket");
  },
};
