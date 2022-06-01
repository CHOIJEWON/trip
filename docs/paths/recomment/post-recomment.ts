// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const createRecomment =  {
      post: {
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
                description: "댓글이 해당하는 review의 pk"
            },
            {
                name : "commentId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: "대댓글이 해당하는 댓글의 pk"
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
            description: "post recomment response example",
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

export default createRecomment;

