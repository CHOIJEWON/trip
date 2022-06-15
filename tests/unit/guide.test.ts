// import app from '../../app'
// import db from '../../models'
// import { createGuidePost } from '../../services/guide/guide'
// import { userSignIn, userSignUp } from '../../services/user/user'
// import { GuideDetails } from '../../types/guide'
// import { decodedUser, UserSign } from '../../types/response/user'
// const {sequelize} = db

// describe('guide Unit Test', () => {
//     describe('Service', () => {
//         describe('guideList()', () => {
//             beforeEach(async() => {
//                 await sequelize.sync({ force : true })
//             })

//             it('[성공]', async() => {
//                 //given
//                 const data : UserSign = {
//                     userId : '최제원',
//                     password : '1234',
//                     nick : '제원',
//                     email : 'alsrn6040@naver.com',
//                 }

//                 await userSignUp(data);
//                 await userSignIn(data);

//                 const guide : GuideDetails = {
//                     title : "post refactorin4567 입니다",
//                     mainImage : "http://www.travelnbike.com/news/photo/201903/77604_141293_4837.png",
//                     content : "4입력입니다",
//                     category : `mon`,
//                     userId : data.userId
//                 }

//                 const contents = {
//                     title : "1234",
//                     content : "가이드 콘텐츠 작성",
//                     courseRecommend : "GuideRecommend Test"
//                 }

//                 const imgs = {
//                     imgURL : "img4"
//                 }

//                 const courses = {
//                     latitude : "123",
//                     longitude : "1234",
//                     title : "test",
//                     category : "trip",
//                     sequence : 1,
//                     visitTime : 1 ,
//                     takeTime : "15분"
//                 }

//                 //whene
//                 const response = await createGuidePost(guide,  , contents, imgs, courses)

            
//             })
//         })
//     })
// })