import app from '../../app'
import db from '../../models'
import { deletingReview, postingReviews, updatingReview } from '../../services/guide/review'
import { readyGuideWrite } from '../readyToRun/guide'
import { readyReviewCreate } from '../readyToRun/review'
const {sequelize} = db

describe('review Unit Test', () => {
    describe('Service', () => {
        describe('posingReviews()', () => {
            beforeEach(async() =>{
                await sequelize.sync({ force : true })
            })
        it('[성공] 리뷰 작성', async() => {
            //given
            const exData = await readyGuideWrite()

            const data = {
                content : "review입니다",
                imgURL : "imgURL1",
            }
            //whene
            const result = await postingReviews(data, '1', { decodedUser : exData})

            //thene
            expect(result.status).toBe(200);
            expect(result.data).toBeTruthy();
            })
        it('[실패] 존재 하지 않는 게시물에 댓글을 남긴 경우', async() => {
            //given
            const exData = await readyGuideWrite() 

            const data = {
                content : "review입니다",
                imgURL : "imgURL1",
            }

            //whene
            const result = await postingReviews(data, '2', { decodedUser : exData})

            //thene
            expect(result.status).toBe(404)
            expect(result.data).toBeNull();
            expect(result.message).toBe('존재하지 않는 가이드입니다')
         })
      })
      describe('updatingReview()', () => {
        beforeEach(async() => {
            await sequelize.sync({ force : true})
        })
        it('[성공] 리뷰 수정', async() => {
            //givne
            await readyReviewCreate()
            
            const data = {
                content : '리뷰 수정',
                imgURL : 'img 수정',
            }

            //whene
            const result = await updatingReview(data, '1')

            expect(result.status).toBe(200)
            expect(result.data).toBeTruthy()
        })
        it('[실패] 존재하지 않는 리뷰 수정', async() => {
            //given
            await readyReviewCreate()
            
            const data = {
                content : '리뷰 수정',
                imgURL : 'img 수정',
            }

            //whene
            const result = await updatingReview(data, '2')
            
            //then
            expect(result.status).toBe(404)
            expect(result.data).toBeNull()
            expect(result.message).toBe('존재하지 않는 리뷰입니다')
        })
      })
      describe('deletingReview()', () => {
        beforeEach(async() => {
            await sequelize.sync({ force : true})
        })
        it('[성공]리뷰 삭제', async() => {
            //given
            await readyReviewCreate()
            
            //whene
            const result = await deletingReview('1')

            //result
            expect(result.status).toBe(200)
            expect(result.data).toBeTruthy()
        })

        it('[실패존재하지 않는 리뷰 삭제', async() => {
            //given
            await readyReviewCreate()

            //whene
            const result = await deletingReview('2')

            //thene
            expect(result.status).toBe(404)
            expect(result.data).toBeNull()
            expect(result.message).toBe('존재하지 않는 리뷰입니다')
        })
      })
    });
});