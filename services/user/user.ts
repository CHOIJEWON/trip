import User from "../../models/user";
import ResponseGenerator from "../../utils/response";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import {v4 as uuid} from 'uuid';
import { Role } from "../../types/role";
import config from "../../config/auth";
import { UserSignUpDetails, UserTokenDetails, UserAccessTokenDetails, UserSign } from "../../types/response/user";


export const userSignUp = async(data : UserSign) => {
    const exUser = await User.findOne({
        where : { userId : data.userId },
    })
    if(exUser){
        return ResponseGenerator.genfalse(400, '해당 사용자가 존재합니다')
    } 
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hasedPassword = bcrypt.hashSync(data.password, salt);

    const userCreate = await User.create({ 
        ...data,
        id : uuid(),
        password : hasedPassword,
        role : Role.USER
    })
    return ResponseGenerator.genSuccess<UserSignUpDetails>({id: userCreate.id, nick: userCreate.nick, role: userCreate.role })
} 


export const userSignIn = async(data : UserSign ) => {
    const exUser = await User.findOne({
        where : { userId : data.userId },
    })

    if (!exUser){
        return ResponseGenerator.genfalse(400, '가입되지 않은 유저입니다')
    } 
    const passwordIsValid = bcrypt.compareSync(
        data.password,
        exUser.password,
    )
    if(!passwordIsValid){
        return ResponseGenerator.genfalse(400, '비밀번호가 틀립니다')
    }

    const accessToken = jwt.sign({ id : exUser.id, role : exUser.role}, config.accessSecret, {
        expiresIn : config.jwtExpiration
    })

    const refreshToken = jwt.sign({ id : exUser.id, role : exUser.role}, config.refreshSecret, {
        expiresIn : config.jwtRefreshExpiration
    })

    return ResponseGenerator.genSuccess<UserTokenDetails>({accessToken: accessToken, refreshToken : refreshToken})
}

export const userRefreshToken = (data : any) => {
    const requestToken = data.refreshToken
    let response = null
    if(!requestToken){
        response = ResponseGenerator.genfalse(400, '리프레쉬 토큰이 없습니다')
    }

    jwt.verify(requestToken, config.refreshSecret, (err : jwt.VerifyErrors | null, decoded : string | jwt.JwtPayload | undefined) => {
        if(err) {
            response = ResponseGenerator.genfalse(400, '리프레쉬 토큰이 만료되었습니다')
        } 

        const decodedUser = decoded as User

        const accessToken = jwt.sign({ id : decodedUser.id, role : decodedUser.role}, config.accessSecret, {
            expiresIn : config.jwtExpiration
        })
        response = ResponseGenerator.genSuccess<UserAccessTokenDetails>({accessToken : accessToken})
    })
    return response
}