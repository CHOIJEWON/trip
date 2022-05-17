import { ForeignKey } from "sequelize/types";
import GuideModel from '../models/guide'
import { GuideImgDetails } from "./guideImg";

export const ALL_GUIDE_CATEGORY = ['mon', 'cty'] as const;
type GuideCategoryTuple = typeof ALL_GUIDE_CATEGORY;

export type GuideCategory = GuideCategoryTuple[number];

export function isGuideCategory(value : string): value is GuideCategory { 
    return ALL_GUIDE_CATEGORY.includes(value as GuideCategory);
}

export interface GuideDetails {
    title : string

    mainImage : string;

    content : string;
    
    category : GuideCategory;
}

export interface GuideContentDetails {
    title : string;

    content : string;

    courseRecommend : string;

    guideId : ForeignKey<GuideModel['id']>;
}

export type Guide = GuideDetails & {id : number}

export type GuideContent = GuideContentDetails & {id : number}

