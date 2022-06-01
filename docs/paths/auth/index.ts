import recreateAccessToken from "./post-refreshToken";
import userSignIn from "./post-signIn";
import createUser from "./post-signUp";

const auth = {
    '/auth/signUp' : {
        ...createUser
    },
    '/auth/signIn' : {
        ...userSignIn
    },
    '/auth/token/refresh' : {
        ...recreateAccessToken
    }
}

export default auth;