import { Request, Response } from "express"
import IController from "./IController"

const Address = require('../models/Address')
const User = require('../models/User')

const AddressController:IController  =  {
    async list(req: Request, res: Response): Promise<object> {
        const addresses = await Address.findAll({include: {association: 'user'}})
        return res.json(addresses)
    },

    async create(req: Request, res: Response): Promise<object> {
        const {user_id} = req.params
        console.log(req.params)

        const user = await User.findByPk(user_id)
        if(!user){
            return res.status(404).json({ error: 'User not found'})
        }

        const address = await Address.create({user_id, ...req.body})
        return res.status(201).json(address)
    }
}

export {AddressController}