import app from '../../app'
import db from '../../models'
import { userSignIn, userSignUp } from '../../services/user/user'
import { UserSign, UserSignIn } from '../../types/response/user'
import { createGuidePost, deleteGuide, getGuideList, guideFindOne, update } from '../../services/guide/guide'
import { GuideCreate } from '../../types/inputType/guide'
import { GuideContentDetails } from '../../types/guide'
import { GuideContentImg } from '../../types/response/guideContentImg'
import { GuideCourseInforDetails } from '../../types/guideCourseInfor'
import { readyGuideWrite } from '../readyToRun/guide'
const {sequelize} = db

describe('guide Unit Test', () => {
    describe('Service', () => {
        describe('createGuidePost()', () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true })
            })
            it('[성공]가이드 글 쓰기(콘텐츠, 이미지, 코스 일괄 삽입)', async() => {
                //given
                const data : UserSign = {
                    userId : '최제원',
                    password : '1234',
                    nick : '제원',
                    email : 'alsrn6040@naver.com',
                }
                
                const data2 : UserSignIn = {
                    userId : '최제원',
                    password : '1234'
                }

                const signUp = await userSignUp(data)
                await userSignIn(data2)
                

                const guide : GuideCreate = {
                    title : "post refactorin4567 입니다",
                    mainImage : "http://www.travelnbike.com/news/photo/201903/77604_141293_4837.png",
                    content : "4입력입니다",
                    category : "mon",
                }

                const contents : GuideContentDetails[] = [{
                    title : "1234",
                    content : "가이드 콘텐츠 작성",
                    courseRecommend :  "GuideRecommend Test",
                }]
                    
                const imgs : GuideContentImg[] = [{
                    imgURL : "img4",
                }]

                const courses : GuideCourseInforDetails[]  = [{
                    latitude : "123",
                    longitude : "1234",
                    title : "test",
                    category : "trip",
                    sequence : 1,
                    visitTime : `1` ,
                    takeTime : "15분",
                }]

                //whene
                const result = await createGuidePost(guide, {decodedUser : signUp.data!.id}, contents, imgs, courses)
                
                //then
                expect(result!.status).toBe(200)
                expect(result!.data).toBeTruthy();
            })
        })
        describe('getGuideList()', () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true})
            })
            
            it('[성공]가이드 리스트 조회', async() => {
                //given
                await readyGuideWrite()
                // whene
                const result = await getGuideList()

                // then
                expect(result.status).toBe(200)
                expect(result.data).toBeTruthy()
            })
        })
        describe("guide()", () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true})
            })

            it('[성공] 특정 가이드 조회', async() => {
                //given
                await readyGuideWrite()
                
                //whene
                const result = await guideFindOne('1')
                
                //then
                expect(result.status).toBe(200)
                expect(result.data).toBeTruthy()
            })
            it('[실패] 존재하지 않는 게시물을 조회할 경우', async() => {
                //given
                await readyGuideWrite()
                
                //whene
                const result = await guideFindOne('2')

                //then
                expect(result.status).toBe(500)
                expect(result.data).toBeNull()
                expect(result.message).toBe('데이터가 없습니다')
            })
        })
        describe('update()', () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true})
            })

            it('[성공]', async() => {
                //given
                await readyGuideWrite()

                const updateData : GuideCreate = {
                    title : "Guide 1번 category 비동기 처리 수정입니다",
                    mainImage : "http://www.travelnbike.com/news/photo/201903/77604_141293_4837.png",
                    content : "제목과 같습니다",
                    category : "cty",
                }

                //whene
                const result = await update('2', updateData)

                //then
                expect(result.status).toBe(400)
                expect(result.message).toBe('잘못된 요청입니다')
                expect(result.data).toBeNull()
            })
        })
        describe('deleteGuide()', () => {
            beforeEach(async() => {
                await sequelize.sync({force : true})
            })
            it('[성공] 해당 가이드 삭제', async() => {
                //given
                await readyGuideWrite()
                //when
                const result = await deleteGuide('2')

                //then
                expect(result.status).toBe(404)
                expect(result.data).toBeNull()
                expect(result.message).toBe('존재하지 않는 게시물입니다')
            })
        })
    })
})