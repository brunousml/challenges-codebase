import {IFarmerRepository} from "../../repositories/IFarmerRepository";
import {IUpdateFarmerDTO} from "./IUpdateFarmerDTO";
import {FarmerEntity} from "../../entities/FarmerEntity";

export class UpdateFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(id:string, farmerDto:IUpdateFarmerDTO): Promise<FarmerEntity> {
        const newFarmer: FarmerEntity = new FarmerEntity(farmerDto, id)

        return await this.farmerRepository.update(id, newFarmer)
    }
}