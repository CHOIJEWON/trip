const createGuide = {
    title: {
      type: "string", // data-type
      description: "Todo's title", // desc
      example: "Coding in JavaScript", // example of a titl
      },
      mainImage: {
        type: "string", // data type
        example: '이미지 URL을 삽입'
      },
      content : {
          type : "string",
          example : "가이드 콘텐츠 작성"
      },
      category : {
          type : "string",
          description : "mon | cty 외에는 입력이 불가능함 ",
          example : "mon"
      },
  }

// request, response object
const guideModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
   ...createGuide,
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