import { DataTypes, Model } from 'sequelize'
import { Sequelize } from "sequelize/types";
import Db from '../types/db'

class User extends Model {
  id!: string;
  nick !: string;
  role !: string;
  password !: string;
  
  static initialize(sequelize : Sequelize) {
    return this.init({
      id: {
        type: DataTypes.STRING(),
        primaryKey: true,
      },
      password: {
        type : DataTypes.STRING(),
        allowNull : false,
      },
      nick : {
          type : DataTypes.STRING(),
          allowNull : false,
      },
      userId : {
          type : DataTypes.TEXT(),
          allowNull : false,
      },
      role : {
          type : DataTypes.STRING(10),
          allowNull : false,
      }
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'User',
      tableName: 'users',
      paranoid: true,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db : Db) {
  }
};

export default User