// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const putRecomment =  {
      put: {
        tags : ["Recomment API"],
        description: "Review Comment / 로그인이 필요합니다",
        parameters: [
            {
                name : "reviewId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: "댓글이 해당하는 reviewId"
            },
            {
                name : "commentId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: "대댓글이 해당하는 commet의 id"
            }
        ],
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/recommentCreate"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "put recomment response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/recomment")
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

export default putRecomment;

