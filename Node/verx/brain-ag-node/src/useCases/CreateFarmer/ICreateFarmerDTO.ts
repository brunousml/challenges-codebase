import {Crops} from "../../entities/Crops";

export interface ICreateFarmerDTO {
    id?: string
    name: string
    cpf?: string
    cnpj?: string

    city: string
    state: string

    farmName: string
    totalArea: string
    arableArea: string
    vegetationArea: string
    crops: [string]
}