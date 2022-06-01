// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideContentPut =  {
      put: {
        tags : ["GuideContent API"],
        description: "GuideContent Put / 로그인이 필요합니다",
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
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/createGuideContent"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "GuideContent Put Response Example",
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

export default guideContentPut;

