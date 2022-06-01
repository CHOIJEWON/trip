// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideDel =  {
      delete: {
        tags : ["Guide API"],
        description: "Guide Delete / 로그인이 필요합니다 / 한 guide에 속한 guideContent , imgs , courseInfor 데이터도 전부 삭제합니다",
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

export default guideDel;

