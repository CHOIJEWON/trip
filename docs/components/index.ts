import guideSchemas from "./guide";
import { idSchemas } from "./request";

const docs = {
    components : {
        schemas : {
            ...guideSchemas,
            ...idSchemas,
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