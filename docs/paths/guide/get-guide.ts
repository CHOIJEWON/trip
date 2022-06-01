// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideGetDetail =  {
      get: {
        tags : ["Guide API"],
        description: "Guide findOne / guideContent, IMG, courseInfor 등은 현재 API에서 전부 조회합니다",
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
            description: "Guide findOne Response Example",
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

export default guideGetDetail;

