import {Address} from "./Address";
import {Farm} from "./Farm";
import {uuid} from "uuidv4";
import {ICreateFarmerDTO} from "../useCases/CreateFarmer/ICreateFarmerDTO";
import {Crops, CropType} from "./Crops";

export class Farmer {
    public readonly id:string

    public cpf: string
    public cnpj: string
    public name: string

    public address: Address
    public farms: [Farm]

    constructor(props: Omit<ICreateFarmerDTO, 'id'>, id?: string) {
        const {
            city,
            state,
            farmName,
            totalArea,
            arableArea,
            vegetationArea,
        } = props

        const address = new Address({city, state})

        const crop = new Crops({ name: CropType.Coffee})
        const farm = new Farm({
            farmName,
            totalArea,
            arableArea,
            vegetationArea,
            crops: [crop]
        })

        Object.assign(this, props)
        this.address = address
        this.farms.push(farm)

        if(!id) {
            this.id = uuid()
        }
    }
}