import { Router } from "express";
import { sendEmail } from "../../config/email";


const router = Router();

router.post(
    '/signup/email',
    sendEmail,
)

export default router