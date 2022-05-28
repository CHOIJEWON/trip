// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guidePost =  {
      post: {
        tags : ["가이드 API"],
        description: "가이드 POST",
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/createGuide"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "해당 가이드 GET",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/guide")
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

export default guidePost;