import GuideContentModel from "../../models/guideContent";
import GuideContentImgModel from "../../models/guideContentImg";
import GuideCourseInforModel from "../../models/guideCourseInfor";
import { Guide } from "../guide";




export interface GuidePost { 

  guide : Guide 
  
  GuideContent : GuideContentModel[]

  GuideCotentImg : GuideContentImgModel[]

  GuideCourseInfor : GuideCourseInforModel[]
}

