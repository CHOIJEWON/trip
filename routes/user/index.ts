import { Router } from "express";
import { refreshToken, signIn, signUp } from "../../controllers/user/user";


const router = Router();

router.post(
    '/signup',
    signUp
)

router.post(
    '/signIn',
    signIn
)

router.post(
    '/token/refresh',
    refreshToken
)

export default router