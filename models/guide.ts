import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'
import {Guide as GuideKey, GuideDetails } from '../types/guide'

class Guide extends Model<GuideKey, GuideDetails> implements GuideKey {
  public id!: number
  public title!: string
  public mainImage!: string
  public content!: string
  public category!: 'mon' | 'cty'


  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.INTEGER(),
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type : DataTypes.STRING(50),
        allowNull : false,
      },
      mainImage : {
          type : DataTypes.STRING(),
          allowNull : false,
      },
      content : {
          type : DataTypes.TEXT(),
          allowNull : false,
      },
      category : {
          type : DataTypes.STRING(10),
          allowNull : false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Guide',
      tableName: 'guides',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
    db.Guide.hasMany(db.GuideContent, {
      foreignKey : {
        name : 'guideId'
      }
    });
    db.Guide.hasMany(db.Review, {        
      foreignKey: 'guideId'
    })
    db.Guide.hasOne(db.View, {
      foreignKey: 'guideId'
    })
  }
};

export default Guide;