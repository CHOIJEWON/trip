import User from '../../models/user'


declare global{
    namespace Express {
        interface Request {
            decodedUser? : User
        }
    }
}

export default global;