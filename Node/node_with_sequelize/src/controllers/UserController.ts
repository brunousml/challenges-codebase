import { Request, Response } from "express";
import IController from "./IController";

const User = require('../models/User');


const UserController:IController  =  {
    async list(req: Request, res: Response): Promise<object> {
        const users = await User.findAll({include: {association: 'addresses'}})
        return res.json(users)
    },

    async create(req: Request, res: Response): Promise<object> {
        const user = await User.create(req.body)
        return res.status(201).json(user)
    }
}

export {UserController}