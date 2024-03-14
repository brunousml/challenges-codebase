import {uuid} from "uuidv4";

export class Farm {
    public readonly id: string | undefined

    public farmName: string | undefined
    public totalArea: number | undefined
    public arableArea: number | undefined
    public vegetationArea: number | undefined

    constructor(props: Omit<Farm, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }
}