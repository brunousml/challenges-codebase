import { Request, Response } from "express";
const Farm = require('../models/Farm');

const FarmController  =  {
    async list(request: Request, response: Response): Promise<any> {
        const model = await Farm.findAll()
        return response.send(model)
    },
}

export {FarmController}