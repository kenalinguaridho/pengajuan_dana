'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PengajuanDana extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PengajuanDana.belongsTo(models.User, {
        as: 'user',
        foreignKey: 'userId',
      })

      PengajuanDana.belongsTo(models.Method, {
        as: 'method',
        foreignKey: 'methodId',
      })
    }
  }
  PengajuanDana.init({
    userId: DataTypes.INTEGER,
    methodId: DataTypes.INTEGER,
    amount: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'PengajuanDana',
  });
  return PengajuanDana;
};