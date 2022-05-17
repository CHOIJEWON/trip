import { NextFunction, Request, Response } from 'express'
import { validationResult } from "express-validator";
import ResponseGenerator from '../utils/response';

export const errorhandler = async (req: Request, res: Response, next: NextFunction) => {
const errors = validationResult(req);
if (!errors.isEmpty()) {
    const statusCode = 400;
    const message = errors.array().map(e => e.msg).join(', ');
  return res.status(statusCode).json(
      ResponseGenerator.genfalse(statusCode, message)
      );
    } else next()
}