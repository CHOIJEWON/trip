
const createGuideContentImgs = {
    imgURL: {
      type: "string", // data-type
      description: "img의 URL을 입력합니다 array 형식으로 여러개가 들어오게 되면 여러장이 생성됩니다",
      example: "http://www.travelnbike.com/news/photo/201903/77604_141293_4837.png",
      },
}



// request, response object
const guideContentImgModel = {
    id: {
      type: "number", // data-type
      example: 3, // example of an id
    },
    ...createGuideContentImgs,
    guideContentId : {
        type : "number",
        description : "GuideContent의 PK를 받아 GuideContentImg의 FK로 넣어주어 이미지의 해당하는 Content를 가르킵니다",
        example : "1"
    }
  }
  
  // schemas
  const guideContentImgSchemas = {
    guideContentImg: {
      type: "object", // data type
      properties: guideContentImgModel
    },
    createGuideContentImgs: {
      type: "object", // data type
      properties: createGuideContentImgs
    },
  }
  
  export default guideContentImgSchemas