import {Crops} from "./Crops";
import {Address} from "./Address";
import {uuid} from "uuidv4";

export class Farm {
    public readonly id: string

    public farmName: string
    public totalArea: string
    public arableArea: string
    public vegetationArea: string
    public crops: [Crops]

    constructor(props: Omit<Farm, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }

}