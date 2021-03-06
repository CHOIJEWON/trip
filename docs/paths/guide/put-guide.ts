// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guidePut =  {
      put: {
        tags : ["Guide API"],
        description: "Guide Put / 로그인이 필요합니다",
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
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/guidePut"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "Guide Put Response Example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/guidePut")
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

export default guidePut;

