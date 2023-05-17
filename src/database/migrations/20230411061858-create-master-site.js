export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("master_sites", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      site_id_name: {
        type: Sequelize.TEXT,
        unique: true,
      },
      name: {
        type: Sequelize.TEXT,
        unique: true,
      },
      ip_address: {
        type: Sequelize.TEXT,
      },
      onair_date: {
        type: Sequelize.TEXT,
      },
      topo_sustain_date: {
        type: Sequelize.TEXT,
      },
      gs_sustain_date: {
        type: Sequelize.TEXT,
      },
      longitude: {
        type: Sequelize.TEXT,
      },
      latitude: {
        type: Sequelize.TEXT,
      },
      provinsi: {
        type: Sequelize.TEXT,
      },
      kabupaten: {
        type: Sequelize.TEXT,
      },
      kecamatan: {
        type: Sequelize.TEXT,
      },
      provider_gs: {
        type: Sequelize.TEXT,
      },
      address: {
        type: Sequelize.TEXT,
      },
      beam_provider: {
        type: Sequelize.TEXT,
      },
      cellular_operator: {
        type: Sequelize.TEXT,
      },
      project_phase: {
        type: Sequelize.TEXT,
      },
      build_year: {
        type: Sequelize.TEXT,
      },
      version: {
        type: Sequelize.TEXT,
      },
      created_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("master_sites");
  },
};
