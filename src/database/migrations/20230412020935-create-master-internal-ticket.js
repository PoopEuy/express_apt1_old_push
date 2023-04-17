export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("master_internal_tickets", {
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
      no_ticket_internal: {
        type: Sequelize.STRING,
        unique: true,
      },
      category: {
        type: Sequelize.STRING,
      },
      note: {
        type: Sequelize.TEXT,
      },
      file: {
        type: Sequelize.STRING,
      },
      created_at: {
        type: Sequelize.DATE,
      },
      updated_at: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("master_internal_tickets");
  },
};
