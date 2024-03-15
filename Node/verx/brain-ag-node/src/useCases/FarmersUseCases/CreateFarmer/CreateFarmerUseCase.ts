import {IFarmerRepository} from "../../../repositories/IFarmerRepository";
import {IFarmerDTO} from "../IFarmerDTO";
import {AddressEntity} from "../../../entities/FarmerEntity";

export class CreateFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(farmerDto:IFarmerDTO): Promise<AddressEntity> {
        const newFarmer = new AddressEntity(farmerDto)

        return await this.farmerRepository.insert(newFarmer)
    }
}