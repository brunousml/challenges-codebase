import { Router } from "express";
import {FarmerController} from "./controllers/FarmerController";
import {createFarmerController} from "./useCases/CreateFarmer";
import {updateFarmerController} from "./useCases/UpdateFarmer";

const router = Router()

router.get('/farmers/', FarmerController.list)

router.post('/farmers', (request, response) =>{
    return createFarmerController.handle(request, response)
})
router.patch('/farmers/:farmer_id', (request, response) =>{
    return updateFarmerController.handle(request, response)
})

// router.post('/farmers', FarmerController.create)
// router.patch('/farmers/:farmer_id', FarmerController.update)
// router.delete('/farmers/:farmer_id', FarmerController.delete)

export { router }