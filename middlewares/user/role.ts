import {Request, Response, NextFunction} from 'express'
import { Role } from '../../types/role'

export const valAdmin = (req : Request, res : Response, next : NextFunction ) => {
    let decodedUser = req.decodedUser
    if(!decodedUser) {
        return res.status(500).send({message : "인증후 벨리데이션이 진행이 되어야 함"})
    } 

    const role = decodedUser.role
    if(role !== Role.ADMIN){
        return res.status(500).send({ message : '운영진 권한이 아닙니다'})
    }

    next();
}

export const valWriter = (req : Request, res : Response, next : NextFunction) =>{
    let decodedUser = req.decodedUser
    if(!decodedUser) {
        return res.status(500).send({message : "인증후 벨리데이션이 진행이 되어야 함"})
    } 

    const role = decodedUser.role
    if(role !== Role.WRITER && role !== Role.ADMIN) {
        return res.status(500).send({ message : '글쓰기 권한이 없습니다 '})
    }

    next();
}
