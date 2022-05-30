// guide list get document

import { makeFalseResponse, makeMultipleResponse } from "../response";

const guideGet =  {
      get: {
        tags : ["Guide API"],
        description: "Guid Find All",
        responses: {
          200: {          
            description: "list of guides.",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeMultipleResponse("#/components/schemas/guide")
                }
              }
            }
          },
          400: {          
            description: "error",
            content: {
              "application/json": {
                schema: {
                properties: makeFalseResponse("#/components/schemas/guide", 400, 'false')
                }
              }
            }
          }
        }
      }
    }

export default guideGet;