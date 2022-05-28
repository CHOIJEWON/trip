import guideGetDetail from './get-guide';
import guideGet from './get-guides'
import guidePost from './post-guide';
import guidePut from './put-guide';

const guide = {
    '/guide' : {
        ...guideGet,
        ...guidePost
    },
    '/guide/{guideId}' : {
        ...guideGetDetail,
        ...guidePut,
    },
}

export default guide;