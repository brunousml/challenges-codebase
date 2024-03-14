import {IFarmerRepository} from "../../repositories/IFarmerRepository";
import {ICreateFarmerDTO} from "./ICreateFarmerDTO";
import {FarmerEntity} from "../../entities/FarmerEntity";

export class CreateFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(farmerDto:ICreateFarmerDTO): Promise<FarmerEntity> {
        const newFarmer = new FarmerEntity(farmerDto)

        return await this.farmerRepository.insert(newFarmer)
    }
}