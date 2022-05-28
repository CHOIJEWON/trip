// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guidePut =  {
      put: {
        tags : ["가이드 API"],
        description: "가이드 수정하기",
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
                      $ref : "#/components/schemas/createGuide"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "해당 가이드 수정",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/createGuide")
                }
              }
            }
          },
          400: {          
            description: "가이드 업데이트 실패",
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

