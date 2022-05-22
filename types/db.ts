import { Sequelize } from "sequelize/types";
import City from '../models/city';
import Guide from '../models/guide';
import GuideContent from '../models/guideContent';
import GuideCourseInfor from '../models/guideCourseInfor';
import GuideContentImg from '../models/guideContentImg';
import Review from "../models/review";
import User from "../models/user";
import Comment from '../models/comment'



interface Db {
    sequelize : Sequelize;
    City : typeof City;
    Guide : typeof Guide;
    GuideContent : typeof GuideContent;
    GuideCourseInfor : typeof GuideCourseInfor;
    GuideContentImg : typeof GuideContentImg;
    Review : typeof Review
    User : typeof User
    Comment : typeof Comment
}

export default Db;