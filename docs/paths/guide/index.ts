import guideDel from './delete-guide';
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
        ...guideDel,
    },
}

export default guide;