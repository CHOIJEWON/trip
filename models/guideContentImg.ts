import { DataTypes, ForeignKey,  Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'
import {GuideImg as GuideImgKey, GuideImgMainDetails} from '../types/guideImg'
import GuideContentModel from './guideContent'


class GuideContentImg extends Model<GuideImgKey, GuideImgMainDetails> implements GuideImgKey {
  imgURL !: string;
  guideContentId !: ForeignKey<GuideContentModel['id']>
  id !: number;
  
  static initialize(sequelize : Sequelize) {
    return this.init({
      id : {
        type : DataTypes.INTEGER(), 
        primaryKey : true,
        autoIncrement : true,
      },
      imgURL: {
        type : DataTypes.STRING(),
        allowNull : true,
        defaultValue : null
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'GuideContentImg',
      tableName: 'guideContentImgs',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
    db.GuideContentImg.belongsTo(db.GuideContent , {
      foreignKey : 'guideContentId'
    });
  }
};

export default GuideContentImg;