export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realtime", {
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
        type: Sequelize.INTEGER,
      },
      no_ticket_internal: {
        type: Sequelize.INTEGER,
      },
      realtime_detail: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("realtime");
  },
};
