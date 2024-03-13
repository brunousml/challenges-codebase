import User  from '../models/User'
import {Request, Response} from "express";

interface IUserController {
    store(req: Request, res: Response): Promise<object>
}

const UserController:IUserController  =  {
    async store(req: Request, res: Response): Promise<object> {
        const {name, email} = req.body

        const user = await User.create({name, email})
        return res.json(user)
    }
}

export {UserController}