export interface UserAccessTokenDetails {
    accessToken : string;
}

export interface decodedUser {
    decodedUser : string;
}

export interface Userkey {
    id : string;
}

export type UserTokenDetails = UserAccessTokenDetails & { refreshToken : string }

export type UserSignUpDetails = Userkey & { nick : string; role : string;}