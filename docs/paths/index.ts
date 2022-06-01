import auth from './auth';
import comment from './comment';
import guidePath from './guide'
import guideContent from './guideContent';
import guideIsLike from './like';
import recomment from './recomment';

const docs = {
    paths : {
        ...guidePath,
        ...auth,
        ...guideContent,
        ...guideIsLike,
        ...comment,
        ...recomment,
    }
};

export default docs