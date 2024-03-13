import {ICreateFarmerDTO} from "../useCases/CreateFarmer/ICreateFarmerDTO";
import {uuid} from "uuidv4";

export class Address {
    public readonly id:string

    public city
    public state

    constructor(props: Omit<Address, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }
}