
const createGuideCourseInfor = {
    latitude: {
      type: "string", // data-type
      description: "지도 API에 사용 될 위도 입니다",
      example: "37.728420",
    },
    longitude: {
        type : "string", // data-type
        description: "지도 API에 사용 될 경도 입니다",
        example: "126.702785"
    },
    title : {
        type : "string",
        description: "해당 장소의 이름",
        example: "더티 트렁크",
    }, 
    category : {
        type : "string",
        description: "해당 장소의 테마를 적어줍니다",
        example: "카페"
    },
    sequence : {
        type : "number",
        description: "코스중 몇번 째 장소에 해당하는지 알려줍니다",
        example: "1"
    },
    visitTime : {
        type : "string",
        description : "코스에 방문하면 좋을 것 같은 시간을 나타냅니다",
        example : "12:00"
    },
    teakeTime : {
        type : "string",
        description : "코스간의 대략의 차량 이동 소요시간을 나타냅니다",
        example : "15분"
    }
}



// request, response object
const guideContentCourseModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    ...createGuideCourseInfor,
    guideContentId : {
        type : "number",
        description : "GuideContent의 PK를 받아 GuideContentInfor의 FK로 넣어주어 이미지의 해당하는 Content를 가르킵니다",
        example : "1"
    }
  }
  
  // schemas
  const guideCourseInfroSchemas = {
    guideContentImg: {
      type: "object", // data type
      properties: guideContentCourseModel
    },
    createGuideCourseInfor: {
      type: "object", // data type
      properties: createGuideCourseInfor
    },
  }
  
  export default guideCourseInfroSchemas