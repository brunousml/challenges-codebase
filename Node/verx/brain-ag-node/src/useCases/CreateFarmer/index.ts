import {PostgresFarmerRepository} from "../../repositories/Implementations/PostgresFarmerRepository";
import {CreateFarmerUseCase} from "./CreateFarmerUseCase";
import {CreateFarmerController} from "./CreateFarmerController";

const postgresFarmerRepository = new PostgresFarmerRepository()

const createFarmerUseCase = new CreateFarmerUseCase(
    postgresFarmerRepository
)

const createFarmerController = new CreateFarmerController(createFarmerUseCase)

export {createFarmerController}