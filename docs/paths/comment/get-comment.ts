// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const getComment =  {
      get: {
        tags : ["Comment API"],
        description: "Review Comment / 로그인이 필요합니다 / recomment의 데이터도 해당 API에서 조회합니다",
        parameters: [
            {
                name : "commentId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: " 해당 commet id"
            }
        ],
        responses: {
          200: {          
            description: "get comment with recomment",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/commentResponse")
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

export default getComment;

