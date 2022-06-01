// guide list get document

import { makeFalseResponse, makeResponse } from "../response";

const guideLike =  {
      post: {
        tags : ["GuideIsLike API"],
        description: "Guide 좋아요 / 로그인이 필요합니다 / 한 유저는 like를 한 번 누를 수 있으며 중복으로 누르면 좋아요 수치가 -1 데이터가 삭제됩니다 / 싫어요를 누를시에 좋아요 data가 삭제되며 isLike false의 데이터가 새로 생성 disLikePoint 가 +1 likePoint가 -1 적용됩니다",
        parameters: [
            {
                name : "guideId",
                in : "path",
                schema: {
                    $ref : '#/components/schemas/id'
                },
                required : true,
                description: " 해당 Guide id"
            }
        ],
        responses: {
          200: {          
            description: "Guide disLike response example",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: makeResponse("#/components/schemas/guideLike")
                }
              }
            }
          },
          400: {          
            description: "error",
            content: {
              "application/json": {
                schema: {
                properties: makeFalseResponse("#/components/schemas/guide", 400, 'false')
                }
              }
            }
          }
        }
      }
    }

export default guideLike;

