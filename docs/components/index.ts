import guideSchemas from "./guide";
import { idSchemas } from "./request";
import userSchemas from "./user";

const docs = {
    components : {
        schemas : {
            ...guideSchemas,
            ...idSchemas,
            ...userSchemas,
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