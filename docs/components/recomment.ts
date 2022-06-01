
const createRecomment = {
    content: {
        type : "string",
        description : "대댓글 내용",
        example : "대댓글입니다"
    }
}

// request, response object
const recommentModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    ...createRecomment,
    userId : {
        type : "string",
        description : "글쓴 유저의 ID가 들어옵니다",
        example : "asdfe31331-asfdd3003",
    },
    commentId : {
        type : "number",
        description : "대댓글이 해당되는 comment의 PK가 들어옵니다",
        example : "2"
    }
}
  
  // schemas
  const recommentSchemas = {
    recommentCreate: {
      type: "object", // data type
      properties: createRecomment
    },
    recomment: {
      type: "object", // data type
      properties: recommentModel
    },
  }
  
  export default recommentSchemas