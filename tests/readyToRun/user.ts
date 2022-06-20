import { userSignIn, userSignUp } from "../../services/user/user"

export const readySignUp = async() => {
    const data = {
        userId : '최제원',
        password : '1234',
        nick : '제원',
        email : 'alsrn6040@naver.com',
    }
    const result = await userSignUp(data)
    const userId = result.data!.id
    return userId
}

export const readySignIn = async() => {
    const data = {
        userId : '최제원',
        password : '1234'
    }
    await userSignIn(data)
}
