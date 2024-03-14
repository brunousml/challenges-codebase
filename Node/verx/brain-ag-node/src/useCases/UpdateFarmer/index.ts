import {PostgresFarmerRepository} from "../../repositories/Implementations/PostgresFarmerRepository";
import {UpdateFarmerUseCase} from "./UpdateFarmerUseCase";
import {UpdateFarmerController} from "./UpdateFarmerController";

const postgresFarmerRepository:PostgresFarmerRepository = new PostgresFarmerRepository()

const updateFarmerUseCase:UpdateFarmerUseCase = new UpdateFarmerUseCase(
    postgresFarmerRepository
)

const updateFarmerController:UpdateFarmerController = new UpdateFarmerController(updateFarmerUseCase)

export {updateFarmerController}