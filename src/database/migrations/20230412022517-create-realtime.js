export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("realtime", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      last_time: {
        type: Sequelize.TEXT,
      },
      site_id_name: {
        allowNull: false,
        type: Sequelize.TEXT,
        references: {
          model: "master_sites",
          key: "site_id_name",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      downtime: {
        type: Sequelize.INTEGER,
      },
      batt_volt: {
        type: Sequelize.INTEGER,
      },
      down_reason: {
        type: Sequelize.STRING,
      },
      message: {
        type: Sequelize.TEXT,
      },
      load1: {
        type: Sequelize.FLOAT,
      },
      load2: {
        type: Sequelize.FLOAT,
      },
      load3: {
        type: Sequelize.FLOAT,
      },
      pv1_curr: {
        type: Sequelize.FLOAT,
      },
      pv2_curr: {
        type: Sequelize.FLOAT,
      },
      pv3_curr: {
        type: Sequelize.FLOAT,
      },
      pv1_volt: {
        type: Sequelize.FLOAT,
      },
      pv2_volt: {
        type: Sequelize.FLOAT,
      },
      pv3_volt: {
        type: Sequelize.FLOAT,
      },
      ping: {
        type: Sequelize.INTEGER,
      },
      total_pack: {
        type: Sequelize.INTEGER,
      },
      site_host: {
        type: Sequelize.STRING,
      },
      error_message: {
        type: Sequelize.TEXT,
      },
      message_scc: {
        type: Sequelize.TEXT,
      },
      message_baterai: {
        type: Sequelize.TEXT,
      },
      message_load: {
        type: Sequelize.TEXT,
      },
      is_flat: {
        type: Sequelize.INTEGER,
      },
      time_remaining: {
        type: Sequelize.INTEGER,
      },
      // no_ticket_bakti: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "master_bakti_ticket",
      //     key: "no_ticket_bakti",
      //   },
      //   onUpdate: "cascade",
      //   onDelete: "cascade",
      // },
      // no_ticket_internal: {
      //   allowNull: false,
      //   type: Sequelize.STRING,
      //   references: {
      //     model: "master_internal_tickets",
      //     key: "no_ticket_internal",
      //   },
      //   onUpdate: "cascade",
      //   onDelete: "cascade",
      // },
      // realtime_detail: {
      //   type: Sequelize.JSON,
      // },
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
    await queryInterface.dropTable("realtime");
  },
};
