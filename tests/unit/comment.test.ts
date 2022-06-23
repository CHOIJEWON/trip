import db from '../../models'
import { deleteCommet, postingComment, updatingComment } from '../../services/guide/comment'
import { readyCommentWrite } from '../readyToRun/comment'
import { readyReviewCreate } from '../readyToRun/review'
const {sequelize} = db

describe('comment Unit Test', () => {
    describe('Service', () => {
        describe('postingComment()', () => {
            beforeEach(async() =>{
                await sequelize.sync({ force : true})
            })
            it('[성공] comment 작성', async() => {
                //given
                const exData = await readyReviewCreate()

                const data = {
                    content : '댓글입니다'
                }

                //whene
                const result = await postingComment(data, '1', {decodedUser : exData})

                expect(result.data).toBeTruthy()
                expect(result.status).toBe(200)
            })
            it('[실패] 존재하지 않는 리뷰', async() => {
                const exData = await readyReviewCreate()

                const data = {
                    content : '댓글입니다'
                }

                //whene
                const result = await postingComment(data, '2', {decodedUser : exData})

                expect(result.data).toBeNull()
                expect(result.status).toBe(404)
                expect(result.message).toBe('해당 리뷰가 존재하지 않습니다')
            })
        })
        describe('updatingComment()', () => {
            beforeEach(async() =>{
                await sequelize.sync({ force : true})
            })
            it('[성공] 댓글 수정', async() => {
                //given
                await readyCommentWrite()
                const data = { content : '댓글 수정'}

                //whene
                const result = await updatingComment(data, '1')
                
                //thene
                expect(result.status).toBe(200)
                expect(result.data).toBeTruthy()
            })
            it('[실패] 존재하지 않는 댓글에 대한 수정', async() => {
                //given
                await readyCommentWrite()
                const data = { content : '댓글 수정'}

                //whene
                const result = await updatingComment(data, '2')
                
                //thene
                expect(result.status).toBe(404)
                expect(result.data).toBeNull()
                expect(result.message).toBe('존재하지 않는 댓글입니다')
            })
        })
        describe('deleteCommet()', () => {
            beforeEach(async() =>{
                await sequelize.sync({ force : true})
            })
            it('[성공] 댓글 삭제' , async() => {
               //given
               await readyCommentWrite()
               
               //whene
               const result = await deleteCommet('1')

               //thene
               expect(result.data).toBeTruthy()
               expect(result.status).toBe(200)
            })
            it('[실패] 존재하지 않는 댓글 삭제' , async() => {
                //given
                await readyCommentWrite()
                
                //whene
                const result = await deleteCommet('2')
 
                //thene
                expect(result.data).toBeNull()
                expect(result.status).toBe(404)
                expect(result.message).toBe('존재하지 않는 댓글입니다')
             })
        })
    })
})