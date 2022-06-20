
export interface reviewDetails {
    content : string;
    imgURL : string;
}

export type review = reviewDetails & {
    userId : string;
    id : string
}