import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class Like extends Model {

  isLike !: boolean

  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      isLike : {
        type : DataTypes.BOOLEAN(),
        defaultValue : false,
        allowNull : false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Like',
      tableName: 'likes',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }
  static associate(db : Db) {
      db.Like.belongsTo(db.User, {
        foreignKey : 'userId',
      })
      db.Like.belongsTo(db.Guide, {
        foreignKey : 'guideId',
      })
      db.Like.belongsTo(db.Comment,{
        foreignKey : 'commentId',
      })
      db.Like.belongsTo(db.Review,{
        foreignKey : 'reviewId',
      })
  }
};

export default Like