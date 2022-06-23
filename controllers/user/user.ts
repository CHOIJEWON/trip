import {Request, Response} from 'express';
import { userRefreshToken, userSignIn, userSignUp } from '../../services/user/user';

export const signUp = async(req : Request, res : Response) => {
    const signUp = await userSignUp(req.body)
    res.send(signUp).status(signUp.status)
    console.log(signUp)
}

export const signIn = async (req: Request, res: Response) =>{
    const signIn = await userSignIn(req.body)
    res.send(signIn).status(404)
}   

export const refreshToken = async (req : Request, res : Response) => {
    const response = userRefreshToken(req.body);
    return res.send(response)
}