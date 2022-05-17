export interface APIResponse<Data> {
    data : Data;

    message : string;
    
    status : number;
}