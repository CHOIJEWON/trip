// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const createUser =  {
      post: {
        tags : ["User API"],
        description: "User SignUP",
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
            description: "User SignUp Response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/signUp")
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

export default createUser;