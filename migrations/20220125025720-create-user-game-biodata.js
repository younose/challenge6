'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('User_Game_Biodata', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      hobby: {
        type: Sequelize.TEXT
      },
      game: {
        type: Sequelize.TEXT
      },
      wallet: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('User_Game_Biodata');
  }
};