import app from '../../app'
import { userSignIn, userSignUp } from '../../services/user/user'
import db from '../../models'
import { readySignUp } from '../readyToRun/user'
const {sequelize} = db

describe("User Unit Test", () => {
    describe("Service", () => {
        describe("userSignUp()", () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true })
            })
            it("성공 케이스", async() => {

                //given
                const data = {
                    userId : '최제원',
                    password : '1234',
                    nick : '제원',
                    email : 'alsrn6040@naver.com',
                }

                //when
                const result = await userSignUp(data)

                //then
                expect(result.status).toBe(200);
                expect(result.data).toBeTruthy();
                expect(result.data?.nick).toBe(data.nick)
            })

            it("[실패] 사용자 중복", async() => {
                // given
                const data = {
                    userId : '최제원',
                    password : '1234',
                    nick : '제원',
                    email : 'alsrn6040@naver.com',
                }
                
                await userSignUp(data)

                const newData = {
                    userId : '최제원',
                    password : '2345',
                    nick : 'ㅇㅇ',
                    email : 'naver',
                }
                // whene
                const result = await userSignUp(newData)

                
                // then
                expect(result.status).toBe(400)
                expect(result.data).toBeNull()
            })
        })
        describe("userSignIn()", () => {
            beforeEach(async() => {
                await sequelize.sync({ force : true })
            })
            it('성공케이스', async() => {
                // given
                await readySignUp()
                
                const data = {
                    userId : '최제원',
                    password : '1234'
                }
                // whene

                const result = await userSignIn(data)

                // then

                expect(result.status).toBe(200);
                expect(result.data).toBeTruthy();
            })
            it('존재하지 않는 유저', async() => {
                // given
                await readySignUp()

                const data = {
                    userId : '김제원',
                    password : '1234',
                    nick : '제원',
                    email : 'alsrn6040@naver.com',
                }

                //whene

                const result = await userSignIn(data)

                //thene

                expect(result.status).toBe(400)
                expect(result.message).toBe('가입되지 않은 유저입니다')
                expect(result.data).toBeNull()
            })

            it('틀린 비밀번호', async() => {
                // given
                await readySignUp()

                const data = {
                    userId : '최제원',
                    password : '1234567',
                    nick : '제원',
                    email : 'alsrn6040@naver.com',
                };

                //whene

                const result = await userSignIn(data);

                //thene

                expect(result.status).toBe(400);
                expect(result.message).toBe('비밀번호가 틀립니다');
                expect(result.data).toBeNull();
            })
        })
    })
})

