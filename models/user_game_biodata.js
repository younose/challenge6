'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Game_Biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_Game_Biodata.init({
    hobby: DataTypes.TEXT,
    game: DataTypes.TEXT,
    wallet: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User_Game_Biodata',
  });
  return User_Game_Biodata;
};