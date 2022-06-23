import app from '../../app'
import db from '../../models'
import request from 'supertest'
import { userSignUp } from '../../services/user/user'
const {sequelize} = db

describe('User', () => {
    describe('signUp()', () => {
        beforeAll(async() => {
            await sequelize.sync()
        })
        it('[성공] USER 회원 가입', async() => {
            //given
            const data = {
                userId : '최제원',
                password : '1234',
                nick : '제원',
                email : 'alsrn6040@naver.com',
            }

            //whene
            const res = await request(app).post('/auth/signup/').send(data)
            console.log(res)

            //then
            expect(res.statusCode).toBe(200)
            expect(res.body).toBeTruthy()
        })
        afterAll(async () => {
            await sequelize.sync({ force : true });
         });
         it('[실패] USER 중복', async() => {
            //given
            const data = {
                userId : '최제원',
                password : '1234',
                nick : '제원',
                email : 'alsrn6040@naver.com',
            }

            await userSignUp(data)
            
            //whene
            const res = await request(app).post('/auth/signup/').send(data)

            //then
            expect(res.statusCode).toBe(400)
            expect(res.body).toBeNull()
            expect(res.body.message).toBe('해당 사용자가 존재합니다')
        })
        afterAll(async () => {
            await sequelize.sync({ force : true });
         });
    })
})