// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const userSignIn =  {
      post: {
        tags : ["User API"],
        description: "User SignIn",
        requestBody : {
            content : {
                "application/json": {
                    schema: {
                      $ref : "#/components/schemas/createUser"
                    }
                }
            }
        },
        responses: {
          200: {          
            description: "User SignIn Response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/signIn")
                }
              }
            }
          },
          400: {          
            description: " error ",
            content: {
              "application/json": {
                schema: {
                properties: makeFalseResponse("#/components/schemas/signIn", 400, 'false')
                }
              }
            }
          }
        }
      }
    }

export default userSignIn;