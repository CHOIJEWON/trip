// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guidePost =  {
      post: {
        tags : ["Guide API"],
        description: "Guide POST",
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/createGuide2"
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
                  properties: makeResponse("#/components/schemas/guide")
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