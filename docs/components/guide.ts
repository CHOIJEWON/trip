const createGuide = {
    title: {
      type: "string", // data-type
      example: "SNS에서 유명한 파주 드라이브 명소", // example of a titl
      },
      mainImage: {
        type: "string", // data type
        example: '이미지 URL을 삽입'
      },
      content : {
          type : "string",
          example : "파주 드라이브 추천...."
      },
      category : {
          type : "string",
          description : "mon | cty 외에는 입력이 불가능함 ",
          example : "mon"
      },
      contents: {
        type : "array",
        title : {
          type : "string",
          example : "본문"
        }
      }
  }

// request, response object
const guideModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
   ...createGuide,
   userId : {
    type : "string",
    description : "User table 의 FK가 들어올 예정입니다",
    example : "asdfe31331-asfdd3003"
  },
    likePoint : {
        type : "number",
        description : "좋아요 수 입니다",
        example : "1"
    },
    disLikePoint : {
        type : "number",
        description : "싫어요 수 입니다",
        example : "1"
    },
  }
  
  // schemas
  const guideSchemas = {
    guide: {
      type: "object", // data type
      properties: guideModel
    },
    createGuide: {
      type: "object", // data type
      properties: createGuide
    },
  }
  
  export default guideSchemas