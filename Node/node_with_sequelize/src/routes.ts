import express, {Request, Response} from "express";
import {UserController} from './controllers/UserController'
import {AddressController} from "./controllers/AddressController";
import {TechController} from "./controllers/TechController";

const router = express.Router()

router.get('/', (req:Request, res:Response) => {
    return res.status(200).send('hello world')
})

router.get('/users', UserController.list)
router.post('/users', UserController.create)

router.get('/users/:user_id/addresses', AddressController.list)
router.post('/users/:user_id/addresses', AddressController.create)

router.get('/users/:user_id/techs', TechController.list)
router.post('/users/:user_id/techs', TechController.create)
router.delete('/users/:user_id/techs', TechController.delete)

export {router}