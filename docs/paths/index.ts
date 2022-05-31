import auth from './auth';
import guidePath from './guide'
import guideContent from './guideContent';

const docs = {
    paths : {
        ...guidePath,
        ...auth,
        ...guideContent
    }
};

export default docs