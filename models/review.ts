import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class Review extends Model {
  static initialize(sequelize : Sequelize) {
    return this.init({
      content: {
        type : DataTypes.STRING(),
        allowNull : false,
      },
      imgURL : {
          type : DataTypes.STRING(),
          allowNull : false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Review',
      tableName: 'reviews',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
      db.Review.belongsTo(db.Guide, {
        foreignKey: 'guideId'
      })
      db.Review.belongsTo(db.User, {
          foreignKey : 'userId'
      })
      db.Review.hasMany(db.Comment, {        
          foreignKey: 'reviewId'
      })
  }
};

export default Review