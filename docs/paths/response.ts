export const makeResponse = (componentPath: string, status=200, message="success") => {
    return {
      status: {
        type: "number",
        description: "status code",
        example: status,
      },
      message: {
        type: "string",
        description: "message",
        example: message
      },
      data: {
          $ref: componentPath
      }
    }
}


export const makeMultipleResponse = (componentPath: string, status=200, message="success") => {
    return {
      status: {
        type: "number",
        description: "status code",
        example: status,
      },
      message: {
        type: "string",
        description: "message",
        example: message
      },
      data: {
          type: "array",
          items: {
            $ref: componentPath
          }
      }
    }
}

export const makeFalseResponse = (componentPath: string, status=200, message="success") => {
    return {
      status: {
        type: "number",
        description: "status code",
        example: status,
      },
      message: {
        type: "string",
        description: "message",
        example: message
      },
      data: {
          type: "number",
          nullable: true,
          example : null
      }
    }
}