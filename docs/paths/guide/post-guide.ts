// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guidePost =  {
      post: {
        tags : ["Guide API"],
        description: "Guide POST / 로그인이 필요합니다 / GuideContent / Img / CourseInfor의 정보를 일괄 저장합니다",
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
            description: "Guide Post Response Example",
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

export default guidePost;