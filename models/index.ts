import {config} from '../config/config'
import { Sequelize } from 'sequelize';
import City from './city';
import Guide from './guide'
import GuideContent from './guideContent'
import GuideContentImg from './guideContentImg'
import GuideCourseInfor from './guideCourseInfor'
import User from './user';

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,
  {
    host: config.development.host,
    dialect: 'mysql'
}
);

const db = {
  sequelize : sequelize,
  City : City,
  Guide : Guide,
  GuideContent : GuideContent,
  GuideContentImg : GuideContentImg,
  GuideCourseInfor : GuideCourseInfor,
  User : User,
};



City.initialize(sequelize);
Guide.initialize(sequelize);
GuideContent.initialize(sequelize);
GuideContentImg.initialize(sequelize);
GuideCourseInfor.initialize(sequelize);
User.initialize(sequelize);

City.associate(db);
Guide.associate(db);
GuideContent.associate(db);
GuideContentImg.associate(db);
GuideCourseInfor.associate(db);
User.associate(db);


export default db;