import { ForeignKey } from "sequelize/types";
import GuideContent from "../models/guideContent";


export interface GuideCourseInforDetails{
  latitude : string;
  longitude : string;
  title : string;
  category : string;
  sequence : number;
  visitTime : string;
  takeTime : string;
}

export type GuideCourseInforKey = GuideCourseInforDetails & { id : number, guideContentId : ForeignKey<GuideContent['id']>; }
