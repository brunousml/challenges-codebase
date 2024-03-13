import { Router } from "express";
import {createFarmerController} from "./useCases/CreateFarmer";
const router = Router()

router.post('farmers', async (request, response) => {
    return await createFarmerController.handle(request, response)
})

export { router }