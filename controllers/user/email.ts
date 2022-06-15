import { Request, Response } from 'express' 
import  crypto  from 'crypto'
import { smtpTransport } from '../../config/email';
import * as dotenv from 'dotenv';
dotenv.config();    


export const sendEmail = (req : Request, res : Response) => {
    const userEmail = req.body
    const token = crypto.randomBytes(20).toString('hex')

    const mailOptions = {
        from: process.env.MYEMAILID,
        to: `${userEmail}`,
        subject: "[TRIP]인증 관련 이메일 입니다",
        text: "오른쪽 숫자 6자리를 입력해주세요 : " + token
        }; 
    
    smtpTransport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return;
        }
        console.log(info);
        console.log("send mail success!");
    })
}