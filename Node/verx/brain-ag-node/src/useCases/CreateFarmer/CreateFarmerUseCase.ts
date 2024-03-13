import {IFarmerRepository} from "../../repositories/IFarmerRepository";
import {ICreateFarmerDTO} from "./ICreateFarmerDTO";
import {Farmer} from "../../entities/Farmer";

export class CreateFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(farmerDto:ICreateFarmerDTO): Promise<void> {
        const newFarmer = new Farmer(farmerDto)

        await this.farmerRepository.insert(newFarmer)
    }
}