import { DataTypes, ForeignKey, HasManyAddAssociationsMixin,  Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'
import {GuideContent as GuideContentKey, GuideContentDetails} from '../types/guide'
import GuideModel from './guide'
import GuideContentImg from './guideContentImg';
import GuideCourseInforModel from './guideCourseInfor';
import User from './user';

class GuideContent extends Model<GuideContentKey, GuideContentDetails> implements GuideContentKey  {
  title!: string;
  content!: string;
  courseRecommend!: string;
  guideId!: ForeignKey<GuideModel['id']>  // foreignKey setting
  userId!: ForeignKey<User['id']>
  id!: number;
  addGuideContentImgs !: HasManyAddAssociationsMixin<GuideContentImg, number>;
  addGuideCourseInfors !: HasManyAddAssociationsMixin<GuideCourseInforModel, number>
  GuideContentImgs?: GuideContentImg[];
  GuideCourseInfors?: GuideCourseInforModel[];

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
      content: {
          type : DataTypes.TEXT(),
          allowNull : false,
      },
      courseRecommend : {
          type : DataTypes.TEXT(),
          allowNull : false,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'GuideContent',
      tableName: 'guideContents',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
   db.GuideContent.hasMany(db.GuideCourseInfor , { 
    foreignKey : 'guideContentId'
    }),
   db.GuideContent.hasMany(db.GuideContentImg, {
      foreignKey : 'guideContentId',
    });
   db.GuideContent.belongsTo(db.Guide, {
     foreignKey : {
       name : 'guideId'
     }})
    db.GuideContent.belongsTo(db.User,{
      foreignKey : 'userId'
    })
  }
};

export default GuideContent;