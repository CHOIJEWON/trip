import { ForeignKey } from "sequelize/types";
import GuideContentModel from '../models/guideContent'

export interface GuideImgMainDetails { 
    imgURL : string;
}

export interface GuideImgDetails extends GuideImgMainDetails { 

    guideContentId : ForeignKey<GuideContentModel['id']>;
}

export type GuideImg = GuideImgDetails & { id : number}
