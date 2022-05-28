import { DataTypes, ForeignKey, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'
import {Guide as GuideKey, GuideDetails } from '../types/guide'
import User from './user';
import viewModel from './view';

class Guide extends Model<GuideKey, GuideDetails> implements GuideKey {
  public id!: number
  public title!: string
  public mainImage!: string
  public content!: string
  public category!: 'mon' | 'cty'
  public view ?: viewModel
  public likePoint !: number
  public disLikePoint !: number
  public userId!: ForeignKey<User['id']>  // foreignKey setting

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
      },
      likePoint : {
        type : DataTypes.INTEGER(),
        allowNull : false,
        defaultValue : 0,
      },
      disLikePoint : {
        type : DataTypes.INTEGER(),
        allowNull : false,
        defaultValue : 0,
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
    db.Guide.hasMany(db.Like, {
      foreignKey: 'guideId'
    })
    db.Guide.belongsTo(db.User, {
      foreignKey: 'userId'
    })
  }
};

export default Guide;