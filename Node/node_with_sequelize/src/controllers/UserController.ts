import { Request, Response } from "express";
import IController from "./IController";

const User = require('../models/User');


const UserController:IController  =  {
    async delete(req: Request, res: Response): Promise<object> {
        return res.json();
    },

    async update(req: Request, res: Response): Promise<object> {
        return res.json();
    },

    async list(req: Request, res: Response): Promise<object> {
        const users = await User.findAll({include: {association: 'techs', }})
        return res.json(users)
    },

    async create(req: Request, res: Response): Promise<object> {
        const user = await User.create(req.body)
        return res.status(201).json(user)
    }
}

export {UserController}