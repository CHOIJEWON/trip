import { Sequelize } from "sequelize/types";
import City from '../models/city';
import Guide from '../models/guide';
import GuideContent from '../models/guideContent';
import GuideCourseInfor from '../models/guideCourseInfor';
import GuideContentImg from '../models/guideContentImg';



interface Db {
    sequelize : Sequelize;
    City : typeof City;
    Guide : typeof Guide;
    GuideContent : typeof GuideContent;
    GuideCourseInfor : typeof GuideCourseInfor;
    GuideContentImg : typeof GuideContentImg;

}

export default Db;