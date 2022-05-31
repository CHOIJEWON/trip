
import guideContentDel from "./delete-guideContent";
import guideContentPut from "./put-guideContent";

const guideContent = {
    '/guide/content/{guideContentId}' : {
        ...guideContentPut,
        ...guideContentDel
    },
}

export default guideContent