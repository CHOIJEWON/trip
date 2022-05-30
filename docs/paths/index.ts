import auth from './auth';
import guidePath from './guide'

const docs = {
    paths : {
        ...guidePath,
        ...auth
    }
};

export default docs