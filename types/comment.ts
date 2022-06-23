export interface CommentDetails {
    content : string;
}

export type CommentKey = CommentDetails & {id : number , reviewId : number}