import { ForeignKey } from "sequelize/types";
import cityModel from "../models/city";
import GuideContentModel from "../models/guideContent"


export interface GuideCourseInforDetails { 
  latitude : string;
  longitude : string;
  title : string;
  category : string;
  sequence : number;
  visitTime : number;
  guideContentId : ForeignKey<GuideContentModel['id']>;
}

export type GuideCourseInforKey = GuideCourseInforDetails & { id : number }
