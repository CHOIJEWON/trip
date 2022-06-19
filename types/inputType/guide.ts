import { GuideCategory } from "../guide";


export interface GuideCreate {
    title : string

    mainImage : string;

    content : string;
    
    category : GuideCategory;
}

export interface GuideContents {
    title : string;
    content : string;
    courseRecommend : string;
}
