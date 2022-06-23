// import db from '../../models'
// const {sequelize} = db
// import { NextFunction, Request, Response } from 'express'
// import { Role } from '../../types/role'
// import { fn } from 'sequelize/types'
// import { JsxTokenSyntaxKind } from 'typescript'
// import { valAdmin } from '../../middlewares/user/role'

// const mockResponse = () => {
//     const res: Partial<Response> = {
//         status: jest.fn((code) => {
//             res.statusCode = code;
//             return res;
//         }),
//         statusCode: 0,
//         send: jest.fn(),
//         statusMessage: ''
//     };
//     res.status = 
//     res.send = jest.fn((Message) => {
//         res.sendMessage = Message.message
//         return res;
//     })
//     return res;
// }

// describe('Role Middleware', () => {
//     describe('valAdmin()', () => {
//         it('[성공]', async() => {
//             const nextFunction : NextFunction = jest.fn()
//             const request = { decodedUser: { role: Role.ADMIN } }
//             const response = mockResponse()

//             valAdmin(request as Request, response as Response, nextFunction)
//         })
//     })
// })