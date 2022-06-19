import { ForeignKey } from "sequelize/types";
import GuideContentModel from '../../models/guideContent'
import GuideModel from '../../models/guide'
import GuideContent from "../../models/guideContent";

export interface GuideContentImg { 
    imgURL : string;
    guideContentId : ForeignKey<GuideContentModel['id']>;
}


export type GuideContentImgKey = GuideContentImg & { id : number }; 