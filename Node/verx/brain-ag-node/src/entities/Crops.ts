import {uuid} from "uuidv4";

export class Crops {
    public readonly id: string

    name: CropType

    constructor(props: Omit<Crops, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }
}

export enum CropType {
    Soy = "soy",
    Corn = 'corn',
    Coffee = 'coffee',
    Sugarcane = 'sugarcane',
}
