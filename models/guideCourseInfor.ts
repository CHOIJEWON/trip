import { DataTypes, ForeignKey, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'
import { GuideCourseInforDetails, GuideCourseInforKey} from '../types/guideCourseInfor';
import GuideContentModel from './guideContent';


class GuideCourseInfor extends Model<GuideCourseInforKey, GuideCourseInforDetails>implements GuideCourseInforKey {
  
  
  latitude !: string;
  longitude !: string;
  title !: string;
  category !: string;
  sequence !: number;
  visitTime !: number;
  id !: number;
  guideContentId !: ForeignKey<GuideContentModel['id']>

  static initialize(sequelize : Sequelize,) {
    return this.init({
      id : {
        type : DataTypes.INTEGER(), 
        primaryKey : true, 
        autoIncrement : true,
      },
      latitude: {
        type : DataTypes.STRING(10),
        allowNull : false,
      },
      longitude: {
          type : DataTypes.STRING(10),
          allowNull : false,
      },
      title : {
        type : DataTypes.STRING(),
        allowNull : false,
      },
      category: {
          type : DataTypes.STRING(10), 
          allowNull : false,
      }, 
      sequence: { 
          type : DataTypes.INTEGER,
          allowNull : false,
      }, 
      visitTime : {
          type : DataTypes.INTEGER,
          allowNull : false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'GuideCourseInfor',
      tableName: 'guideCourseInfors',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
    db.GuideCourseInfor.belongsTo(db.City, {
      foreignKey : 'guideCourseInfroId'
    });
    db.GuideCourseInfor.belongsTo(db.GuideContent , {
      foreignKey : 'guideContentId'
    });
  }
};

export default GuideCourseInfor;