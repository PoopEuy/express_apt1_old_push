export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("master_sites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nojs: {
        type: Sequelize.STRING,
      },
      site_name: {
        type: Sequelize.STRING,
      },
      partner: {
        type: Sequelize.STRING,
      },
      partner_cp: {
        type: Sequelize.STRING,
      },
      site_keeper_cp: {
        type: Sequelize.STRING,
      },
      province: {
        type: Sequelize.STRING,
      },
      city: {
        type: Sequelize.STRING,
      },
      subdistrict: {
        type: Sequelize.STRING,
      },
      address: {
        type: Sequelize.STRING,
      },
      ip: {
        type: Sequelize.STRING,
      },
      lc: {
        type: Sequelize.STRING,
      },
      gs: {
        type: Sequelize.STRING,
      },
      panel_type: {
        type: Sequelize.STRING,
      },
      ehub_type: {
        type: Sequelize.STRING,
      },
      latitude: {
        type: Sequelize.STRING,
      },
      longtitude: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("master_sites");
  },
};
