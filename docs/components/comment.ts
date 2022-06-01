
const createComment = {
    content: {
        type : "string",
        description : "댓글 내용",
        example : "좋네요"
    }
}

// request, response object
const commentModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    ...createComment,
    userId : {
        type : "string",
        description : "글쓴 유저의 ID가 들어옵니다",
        example : "asdfe31331-asfdd3003",
    },
    reviewId : {
        type : "number",
        description : "댓글이 해당 되는 review의 PK가 들어옵니다",
        example : "2"
    },
    
}

const commentGet = {
 ...commentModel,
   contents : {
      items : {
        $ref : "#/components/schemas/recomment"
      }
    }
  }

  
  // schemas
  const commentSchemas = {
    commentCreate: {
      type: "object", // data type
      properties: createComment
    },
    comment: {
      type: "object", // data type
      properties: commentModel
    },
    commentResponse : {
      type: "object", // data type
      properties: commentGet
    }
  }
  
  export default commentSchemas