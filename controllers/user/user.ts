import User from '../../models/user';
import bcrypt from 'bcrypt'
import {Request, Response} from 'express';
import ResponseGenerator from '../../utils/response';
import {v4 as uuid} from 'uuid';
import { Role } from '../../types/role';
import jwt from 'jsonwebtoken';
import config from '../../config/auth';

export const signUp = async(req : Request, res : Response) => {
    const exUser = await User.findOne({
        where : { userId : req.body.userId },

    })
    if(exUser){
        return res.send(ResponseGenerator.genfalse(400, '해당 사용자가 존재합니다'))
    }
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hasedPassword = bcrypt.hashSync(req.body.password, salt);

    const userCreate = await User.create({ 
        ...req.body,
        id : uuid(),
        password : hasedPassword,
        role : Role.USER
    })

    return res.send(ResponseGenerator.genSuccess<any>({id: userCreate.id, nick: userCreate.nick, role: userCreate.role }))
}

export const signIn = async (req: Request, res: Response) =>{
    const exUser = await User.findOne({
        where : { userId : req.body.userId },
    })

    if (!exUser){
        return res.send(ResponseGenerator.genfalse(400, '가입되지 않은 유저입니다'))
    } 
    const passwordIsValid = bcrypt.compareSync(
        req.body.password,
        exUser.password,
    )
    if(!passwordIsValid){
        return res.send(ResponseGenerator.genfalse(400, '비밀번호가 틀립니다'))
    }

    const accessToken = jwt.sign({ id : exUser.id, role : exUser.role}, config.accessSecret, {
        expiresIn : config.jwtExpiration
    })

    const refreshToken = jwt.sign({ id : exUser.id, role : exUser.role}, config.refreshSecret, {
        expiresIn : config.jwtRefreshExpiration
    })

    return res.send(ResponseGenerator.genSuccess<any>({accessToken: accessToken, refreshToken : refreshToken}))
}   

export const refreshToken = async (req : Request, res : Response) => {
    const requestToken = req.body.refreshToken
    
    if(!requestToken){
        return res.send(ResponseGenerator.genfalse(400, '리프레쉬 토큰이 없습니다'))
    }

    jwt.verify(requestToken, config.refreshSecret, (err : jwt.VerifyErrors | null, decoded : string | jwt.JwtPayload | undefined) => {
        if(err) {
            return res.send(ResponseGenerator.genfalse(400, '리프레쉬 토큰이 만료되었습니다'))
        } 

        const decodedUser = decoded as User

        const accessToken = jwt.sign({ id : decodedUser.id, role : decodedUser.role}, config.accessSecret, {
            expiresIn : config.jwtExpiration
        })
        return res.send(ResponseGenerator.genSuccess<any>(accessToken))
    })

}