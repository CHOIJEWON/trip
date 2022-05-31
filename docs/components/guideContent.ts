
const createGuideContent = {
    title: {
      type: "string", // data-type
      description: "GuideContent는 Guide의 더욱 세부적인 사항을 다룹니다 Guide가 파주 여행이라면 GuideContent 파주-더티드렁크 카페처럼 세부적인 사항을 다룹니다",
      example: "파주 대형 카페 더티드렁크", // example of a titl
      },
      content : {
          type : "string",
          description : "해당 세부적인 코스에 대한 상세 설명을 적습니다",
          example : "더티 드렁크는 경기 파주시 지목로 114 에 위치한 대형 카페입니다 ......."
      },
      courseRecommend : {
          type : "string",
          description : "해당 코스를 들리는 추천 코스를 적어줍니다 GuideCourseInfor 쪽에서 더 자세한 데이터를 받아옵니다",
          example : " '더티 드렁크'를 들리는 추천 코스 ....."
      },
      imgs: {
        type : "array",
        items : {
          $ref : "#/components/schemas/createGuideContentImgs"
        },
      },
      courses : {
        type : "array",
        items : {
          $ref : "#/components/schemas/createGuideCourseInfor"
        }
      }
  }



// request, response object
const guideContentModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    ...createGuideContent,
   userId : {
    type : "string",
    description : "User table의 PK가 Content의 FK로 들어옵니다 어느 유저가 해당 Content를 작성했는지 명시해줍니다",
    example : "asdfe31331-asfdd3003"
    },
    guideId : {
        type : "number",
        description : "Guide의 ID를 받아와 GuideContent의 FK로 받아 해당 Content가 어느 Guide의 속해 있는지 나타냅니다",
        example : "1"
    }
  }
  
  // schemas
  const guideContentSchemas = {
    guideContent: {
      type: "object", // data type
      properties: guideContentModel
    },
    createGuideContent: {
      type: "object", // data type
      properties: createGuideContent
    },
  }
  
  export default guideContentSchemas