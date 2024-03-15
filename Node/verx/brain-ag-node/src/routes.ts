import { Router } from "express";
import {FarmerController} from "./controllers/FarmerController";
import {createFarmerController} from "./useCases/FarmersUseCases/CreateFarmer";
import {updateFarmerController} from "./useCases/FarmersUseCases/UpdateFarmer";
import {deleteFarmerController} from "./useCases/FarmersUseCases/DeleteFarmer";
import {AddressController} from "./controllers/AddressController";
import {createAddressController} from "./useCases/AddressesUseCases/CreateAddress";
import {updateAddressController} from "./useCases/AddressesUseCases/UpdateAddress";
import {deleteAddressController} from "./useCases/AddressesUseCases/DeleteAddress";

const router = Router()

// Farmers routes
router.get('/farmers/', FarmerController.list)
router.post('/farmers', (request, response) =>{
    return createFarmerController.handle(request, response)
})
router.patch('/farmers/:farmer_id', (request, response) =>{
    return updateFarmerController.handle(request, response)
})
router.delete('/farmers/:farmer_id', (request, response) =>{
    return deleteFarmerController.handle(request, response)
})

// Addresses routes
router.get('/addresses/', (request, response) =>{
    return AddressController.list(request, response)
})
router.post('/addresses', (request, response) =>{
    return createAddressController.handle(request, response)
})
router.patch('/addresses/:address_id', (request, response) =>{
    return updateAddressController.handle(request, response)
})
router.delete('/addresses/:address_id', (request, response) =>{
    return deleteAddressController.handle(request, response)
})

export { router }