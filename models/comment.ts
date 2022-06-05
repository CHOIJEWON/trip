import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class Comment extends Model {
  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      content: {
        type : DataTypes.STRING(),
        allowNull : false,
      },
      liekPoint : {
        type : DataTypes.INTEGER(),
        defaultValue : 0,
        allowNull : false,
      },
      disLikePoint : {
        type : DataTypes.INTEGER(),
        defaultValue : 0,
        allowNull : false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Comment',
      tableName: 'comments',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
      db.Comment.belongsTo(db.Review, {
        foreignKey: 'reviewId'
      })
      db.Comment.belongsTo(db.User, {
          foreignKey : 'userId'
      })
      db.Comment.hasMany(db.Comment, {
        as : 'Recomment',
        foreignKey : 'commentId',
      })
  }
};

export default Comment