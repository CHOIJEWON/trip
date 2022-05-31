import guideSchemas from "./guide";
import guideContentSchemas from "./guideContent";
import guideContentImgSchemas from "./guideContentImgs";
import guideCourseInfroSchemas from "./guideCourseInfor";
import { idSchemas } from "./request";
import userSchemas from "./user";

const docs = {
    components : {
        schemas : {
            ...guideSchemas,
            ...idSchemas,
            ...userSchemas,
            ...guideContentSchemas,
            ...guideContentImgSchemas,
            ...guideCourseInfroSchemas,
        },
        securitySchemes : {
            basicAuth : {
                type : "apiKey",
                in : "header",
                name : "Authorization"
            }
        }
    }
}

export default docs