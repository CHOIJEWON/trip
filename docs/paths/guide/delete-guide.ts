// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideDel =  {
      delete: {
        tags : ["Guide API"],
        description: "Guide Delete",
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
            description: "Guide Delete Response Example",
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
            description: " error ",
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

export default guideDel;

