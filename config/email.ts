import nodemailer from 'nodemailer'
import crypto from 'crypto';
import { Request, Response } from 'express'
import * as dotenv from 'dotenv';
dotenv.config();    

export const smtpTransport = nodemailer.createTransport({
    service: 'naver',   // 메일 보내는 곳
    host: 'smtp.naver.com',  
    port: 587,
    secure: false,  
    requireTLS: true ,
    auth: {
        user: process.env.MYEMAILID,
        pass: process.env.MYEMAILPASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
});

export const sendEmail = (req : Request, res : Response) => {
    const userEmail = req.body
    const token = crypto.randomBytes(20).toString('hex')

    const mailOptions = {
        from: process.env.MYEMAILID,
        to: userEmail,
        subject: "[TRIP]인증 관련 이메일 입니다",
        text: "오른쪽 숫자 6자리를 입력해주세요 : " + token
        }; 
    
    smtpTransport.sendMail(mailOptions)
}