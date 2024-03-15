import { Request, Response } from "express";
const Address = require('../models/Address');

const AddressController  =  {
    async list(request: Request, response: Response): Promise<any> {
        const model = await Address.findAll()
        return response.send(model)
    },
}

export {AddressController}