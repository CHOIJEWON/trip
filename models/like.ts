import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class Like extends Model {
  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      likePoint: {
        type : DataTypes.INTEGER(),
        defaultValue : 0,
        allowNull : false,
      },
      isLike : {
          type : DataTypes.BOOLEAN(),
          defaultValue : false,
          allowNull : false,
      }
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
      db.Like.hasMany(db.User, {
        foreignKey : 'likeId',
      })
      db.Like.belongsTo(db.Guide, {
        foreignKey : 'guideId',
      })
  }
};

export default Like