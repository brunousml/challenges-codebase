import {PostgresFarmerRepository} from "../../repositories/Implementations/PostgresFarmerRepository";
import {DeleteFarmerUseCase} from "./DeleteFarmerUseCase";
import {DeleteFarmerController} from "./DeleteFarmerController";

const postgresFarmerRepository:PostgresFarmerRepository = new PostgresFarmerRepository()

const deleteFarmerUseCase:DeleteFarmerUseCase = new DeleteFarmerUseCase(
    postgresFarmerRepository
)

const deleteFarmerController:DeleteFarmerController = new DeleteFarmerController(deleteFarmerUseCase)

export {deleteFarmerController}