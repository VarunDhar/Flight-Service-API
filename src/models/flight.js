'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Aeroplane,{
        foreignKey:'aeroplaneId',
      }),
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        as:'departure_airport'
      })
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        as:'arrival_airport'
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.STRING,
      allowNull:false
    },
    aeroplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING,
      defaultValue:'TBA'
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};