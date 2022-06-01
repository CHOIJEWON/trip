const guideIsLikeModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    guideId : {
        type : "number",
        description : "해당하는 Guide의 PK를 받아 해당하는 Guide의 좋아요를 나타냅니다",
        example : "1"
    },
    userId : {
        type : "number",
        description : "좋아요 / 싫어요를 실행한 user의 ID를 받아옵니다",
        example : "asdfe31331-asfdd3003"
    }
  }
// request, response object
const guideLikeModel = {
   ...guideIsLikeModel,
   isLike : {
    type : "boolean",
    description : "true이면 좋아요, false면 싫어요를 나타냅니다",
    example : "true"
   }
}

const guideDisLikeModel = {
    ...guideIsLikeModel,
    isLike : {
        type : "boolean",
        description : "true이면 좋아요, false면 싫어요를 나타냅니다",
        exameple : "false",
        default : "false"
       },
}
  
  // schemas
  const guideIsLikeSchemas = {
    guideLike: {
      type: "object", // data type
      properties: guideLikeModel
    },
    guideDisLike: {
      type: "object", // data type
      properties: guideDisLikeModel
    }
  }
  
export default  guideIsLikeSchemas