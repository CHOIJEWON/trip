// guide list get document

import { makeFalseResponse, makeMultipleResponse } from "../response";

const guideGet =  {
      get: {
        tags : ["가이드 API"],
        description: "가이드 리스트 GET",
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
            description: "A list of guides.",
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