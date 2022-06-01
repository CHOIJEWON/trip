// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideContentDel =  {
      delete: {
        tags : ["GuideContent API"],
        description: "GuideContent Delete / 로그인이 필요합니다",
        parameters: [
            {
                name : "guideContentId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: " 해당 GuideContent id"
            }
        ],
        responses: {
          200: {          
            description: "GuideContent Delete Response Example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/createGuideContent")
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

export default guideContentDel;

