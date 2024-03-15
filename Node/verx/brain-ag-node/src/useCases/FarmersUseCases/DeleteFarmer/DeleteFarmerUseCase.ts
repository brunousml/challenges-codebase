import {IFarmerRepository} from "../../../repositories/IFarmerRepository";
import {AddressEntity} from "../../../entities/FarmerEntity";

export class DeleteFarmerUseCase {
    constructor(
        private farmerRepository: IFarmerRepository
    ) {}

    async execute(id:string): Promise<void> {
        await this.farmerRepository.delete(id)
    }
}