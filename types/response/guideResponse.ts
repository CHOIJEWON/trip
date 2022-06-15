import GuideContentModel from "../../models/guideContent";
import GuideContentImgModel from "../../models/guideContentImg";
import GuideCourseInforModel from "../../models/guideCourseInfor";
import { Guide, GuideDetails } from "../guide";




export interface GuidePost { 

  guide : GuideDetails
  
  GuideContent : GuideContentModel[]

  GuideCotentImg : GuideContentImgModel[]

  GuideCourseInfor : GuideCourseInforModel[]
}

