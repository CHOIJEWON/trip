import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class Comment extends Model {
  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.STRING(),
        primaryKey: true,
      },
      content: {
        type : DataTypes.STRING(),
        allowNull : false,
      },
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
      db.Comment.belongsTo(db.Comment, {
        as : 'Recomment',
        foreignKey : 'commentId',
      })
  }
};

export default Comment