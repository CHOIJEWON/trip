// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const recreateAccessToken =  {
      post: {
        tags : ["User API"],
        description: "User recreate accessToken",
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/refreshToken"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "User recreate accessToken Response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/accessToken")
                }
              }
            }
          },
          400: {          
            description: " error ",
            content: {
              "application/json": {
                schema: {
                properties: makeFalseResponse("#/components/schemas/sign", 400, 'false')
                }
              }
            }
          }
        }
      }
    }

export default recreateAccessToken;