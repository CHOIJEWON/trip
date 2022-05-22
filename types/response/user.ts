export interface UserSignUpDetails {
   id : string;

    nick : string;

    role : string;
}

export interface UserAccessTokenDetails {

    accessToken : string;

}

export interface decodedUser {
      decodedUser : string
}


export type UserTokenDetails = UserAccessTokenDetails & { refreshToken : string }

