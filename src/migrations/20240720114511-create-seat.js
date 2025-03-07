'use strict';
/** @type {import('sequelize-cli').Migration} */
const {Enums} = require("../utils/common");
const {BUSINESS,PREMIUM_ECONOMY,ECONOMY,FIRST_CLASS} = Enums.SEAT_TYPE;
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      aeroplaneId: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'Aeroplanes',
          key:'id'
        },
        onDelete:'cascade' 
      },
      row: {
        type: Sequelize.INTEGER,
        allowNull:false 
      },
      col: {
        type: Sequelize.STRING,
        allowNull:false
      },
      classType: {
        type: Sequelize.ENUM,
        values:[BUSINESS,PREMIUM_ECONOMY,ECONOMY,FIRST_CLASS],
        defaultValue:ECONOMY
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
    await queryInterface.dropTable('Seats');
  }
};