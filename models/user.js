'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.PengajuanDana, {
        as: 'pengajuanDanas',
        sourceKey: 'id',
        foreignKey: 'userId'
      })

      User.belongsTo(models.Division, {
        as: 'division',
        sourceKey: 'id',
        foreignKey: 'divisionId'
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    divisionId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};