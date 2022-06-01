// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const putComment =  {
      put: {
        tags : ["Comment API"],
        description: "Review Comment / 로그인이 필요합니다",
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
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/commentCreate"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "put comment response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/comment")
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

export default putComment;

