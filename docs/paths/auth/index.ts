import recreateAccessToken from "./post-refreshToken";
import userSignIn from "./post-signIn";
import createUser from "./post-signUp";

const auth = {
    '/guide/signUp' : {
        ...createUser
    },
    '/guide/signIn' : {
        ...userSignIn
    },
    '/guide/token/refresh' : {
        ...recreateAccessToken
    }
}

export default auth;