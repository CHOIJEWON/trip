import { DataTypes,  Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class City extends Model{
  static initialize(sequelize : Sequelize) {
    return this.init({
      id : {
        type : DataTypes.INTEGER(),
        primaryKey : true,
        autoIncrement : true,
      },
      name: {
        type : DataTypes.STRING(50),
        allowNull : false,
      },
      category: {
          type : DataTypes.STRING(20),
          allowNull : false,
      },
      parent : {
          type : DataTypes.INTEGER(),
          allowNull : true,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'City',
      tableName: 'citys',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }

  static associate(db : Db) {
    db.City.hasMany(db.GuideCourseInfor, {
      foreignKey : 'cityId'
    } )
  };
};

export default City;