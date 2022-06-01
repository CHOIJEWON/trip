// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const delRecomment =  {
      delete: {
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
                description: "대댓글이 해당하는 recomment model의 self-join fk 즉 recomment의 id"
            }
        ],
        responses: {
          200: {          
            description: "delete recomment response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/recommentCreate")
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

export default delRecomment;

