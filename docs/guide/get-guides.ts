// guide list get document

const guideGet =  {
      "get": {
        "description": "Returns all pets from the system that the user has access to",
        "responses": {
          "200": {          
            "description": "list of guides.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/pet"
                  }
                }
              }
            }
          },
          "400": {          
            "description": "A list of pets.",
            "content": {
              "application/json": {
                "schema": {
                  "type": "array",
                  "items": {
                    "$ref": "#/components/schemas/pet"
                  }
                }
              }
            }
          }
        }
      }
    }

export default guideGet;