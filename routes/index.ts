import express from 'express';
import Guide from '../models/guide';
import GuideContet from '../models/guideContent'

const router = express.Router();

router.get('/', (req : express.Request, res : express.Response) => {
    res.send({status: 200, message: 'success'})
});

// guide list get


export default router;