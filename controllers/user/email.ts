import nodemailer from 'nodemailer'
import crypto from 'crypto'
import { Request, Response } from 'express'

export const mail = async( req :Request, res : Response) => {
    const userEmail = req.body.userEmail

    const code = crypto.randomBytes(3).toString('hex')

    const transporter = nodemailer.createTransport({
        service : 'Naver',
        host : 'smtp.naver.com', 
        port : 587,
        auth : {
            user : process.env.NODEMAILER_USER,
            pass : process.env.NODEMAILER_PASS,
        }
    })    

    const info = await transporter.sendMail
    
}