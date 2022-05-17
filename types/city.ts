import { ForeignKey } from "sequelize/types";



export interface cityDetails {
    name : string;
    category : string;
    parent : number;
    parentId : ForeignKey<city['id']>
}

export type city = cityDetails & { id : number };

