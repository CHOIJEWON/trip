import { ForeignKey } from "sequelize/types";
import GuideContentModel from '../../models/guideContent'
import GuideModel from '../../models/guide'

export interface GuideContentImg { 
    title : string;
    content : string;
    courseRecommend : string;
    guideId : ForeignKey<GuideModel['id']>;
}


export type GuideContentImgKey = GuideContentImg & { id : number }; 