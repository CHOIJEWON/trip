import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class View extends Model {
  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      viewPoint: {
        type : DataTypes.INTEGER(),
        defaultValue : 0,
        allowNull : false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'View',
      tableName: 'views',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  static associate(db : Db) {
      db.Comment.belongsTo(db.Guide, {
        foreignKey : 'guideId',
      })
  }
};

export default View