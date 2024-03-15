import {IFarmerRepository} from "../../../repositories/IFarmerRepository";
import {AddressEntity} from "../../../entities/FarmerEntity";
import {IFarmerDTO} from "../IFarmerDTO";

export class UpdateFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(id:string, farmerDto:IFarmerDTO): Promise<AddressEntity> {
        const newFarmer: AddressEntity = new AddressEntity(farmerDto, id)

        return await this.farmerRepository.update(id, newFarmer)
    }
}