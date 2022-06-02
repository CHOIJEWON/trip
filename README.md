# 최제원 포트폴리오


# 🔍현재 구현 기능

❓회원가입
  + JWT 사용
  + 회원 ID uuid v4 엔진 생성
  + userId unique 확인 (아이디가 겹치지 않기 위함)
  + password hash화 추가로 salt를 사용하여 보안 강화 
    + password 작업을 마친 후 DB저장
 
 ❓로그인
   + 회원 가입이 된 user인지 체크
   + accessToken 제공
   + refreshToken 제공
   + accessToken 재발급 가능
     + refreshToken 사용

❓메인 가이드 
  + 사용자 확인
    + 회원 ROLE 체크 WRITER OR ADMIN(운영진) 
    + 일반 USER는 작성할 수 없음
  + 가이드 작성 ( 제목, 제목의 대한 간단한 소개, 대표이미지 )
    + title unique 체크
    + category 강제성 부여 mon | cty 사용 가능

❓가이드 콘텐츠 
  + 코스중의 한 장소의 자세한 설명
  + 메인 가이드와 하나의 API로 일괄 등록합니다  (bulkCreate)
    + 많은 이미지를 삽입 할 수 있습니다
    + 많은 가이드 코스가 삽입 될 수 있습니다

❓가이드 코스 
  + 메인 가이드를 생성하며 일괄 등록하는 가이드 콘텐츠의 일괄 등록됩니다
  + 가이드 콘텐츠의 작성된 장소와 주변의 장소를 조합하여 매력있는 여행 코스를 소개해줍니다
    + 지도 API에서 사용 될 경위도 입력
    + 해당 코스의 방문 추천 시간 입력
    + 해당 코스 순서 입력
    + 코스간의 차량 소요 시간 입력

 
 ❓가이드 추천 비추천 기능
 + 사용자 확인
 + 추천, 비추천 사용
    + 모든 데이터는 DB에 추천을 했는지 비추천을 했는지 그 사용자가 누구인지 저장됩니다
    + 추천시 좋아요 숫자가 올라갑니다
    + 비추천시 싫어요 숫자가 올라갑니다
 + 사용자는 한 가이드에 한 개의 추천 혹은 한 개의 비추천을 누를 수 있습니다
    + 추천 혹은 비추천을 짝수 번 누르게 되면 추천 혹은 비추천은 삭제됩니다
 + 비추천에서 추천으로, 추천에서 비추천으로
    + 비추천에서 추천을 누를 시 비추천 데이터는 삭제되며 추천 데이터로 생성되며 추천수는 +1 비추천수는 -1의 수치가 증감합니다
    + 추천에서 비추천을 누를 시 추천 데이터는 삭제되며 추천 데이터로 생성되며 추천수는 -1 비추천수는 +1의 수치가 증감합니다

❓리뷰 기능
+ 해당 가이드에 대한 사진을 포함한 댓글 기능입니다

❓댓글 대댓글
+ 해당 리뷰에 대한 글로만 작성할 수 있는 댓글 대댓글 기능을 지원합니다

❓조회수
+ 해당 메인 가이드를 조회한 숫자를 알 수 있습니다

# 응답 데이터 구조 일치

같은 구조를 갖은 응답이 협업에 편할 것 같다는 생각을 하여 응답 구조를 일체화 시켰습니다

❗응답 성공 구조
 ````
 
export default class ResponseGenerator { 
    static genSuccess<Data>(data: Data) { 
        const response = {
            status : 200,
            message : 'success',
            data : data,
        }

        return response
    }
 ````
❗응답 실패시 구조
````
    static genfalse(status: number, message : string) { 
        const response = {
            status,
            message,
            data : null,
        }
        return response
    }
}
````

# 사용법

❗ module install
````
npm install
````

❗ .env 작성
````
DB_USERNAME = 사용자 DB ID
DB_PASSWORD = 사용자 DB PASSWORD
DB_DBNAME = 사용자 DB NAME
DB_HOST = 사용자 DB HOST
DB_PORT = 사용자 DB PORT 

JWT_ACCESSKEY = accessToken key 작성
JWT_REFRESHKEY = refreshToken key 작성
JWT_ACCESSTIME = accessToken 유효 시간 작성
JWT_REFRESHTIME = refreshToken 유효 시간 작성
````

````
npx npm start
````

# Swagger API-docs가 지원됩니다

URL : localhost:3000/api-docs


<img width="600" alt="image" src="https://user-images.githubusercontent.com/105709970/171571040-7058bdfc-6dfd-4934-ac04-1c029000ada5.png">


# ⚒️ 사용된 Tool
````
BackEnd : NodeJs, TypeScript
DataBase : MySQL
module : JasonWebToken, Sequelize(ORM), dotenv,  express, uuid, express-Validator, morgan
Other Tools : swagger, github
````

# 🔍뭘 배웠는가
1. DataBase의 구조를 직접 설계해 보았습니다
2. 백엔드 프로그래머와 프론트 프로그래머가 어떤 식으로 소통하여 데이터를 내려주는지에 대하여 생각을 할 수 있는 경험이 되었습니다
3. 간단한 기능도 어떠한 데이터를 처리해 주어야 되는지 어떠한 예외 사항을 잡아야 되는지에 깊게 생각해 볼 수 있었습니다
4. 비전공자로써 웹 CRUD기능 외에 미들웨어등을 직접 짜거나 만들어진 것을 사용하여 validate 할 수 있는 공부가 되었습니다
5. API를 swagger에 정리하며 다시 한 번 response 구조에 대하여 생각해 볼 수 있었습니다
6. 구현하며 발생한 에러도 구글링을 통하여 해결해 나아갈수 있다는 것에 대한 즐거움을 찾는 계기가 되었습니다
