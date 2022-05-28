// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideGetDetail =  {
      get: {
        tags : ["가이드 API"],
        description: "가이드 상세 GET",
        parameters: [
            {
                name : "guideId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: " 해당 가이드 id"
            }
        ],
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

export default guideGetDetail;

