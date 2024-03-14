import { Request, Response} from "express";
import IController from "./IController";

const User = require('../models/User');
const Tech = require('../models/Tech');

const validateUser = async (req: Request, res: Response): Promise<typeof User> => {
    const {user_id } = req.params

    return await User.findByPk(user_id)
}

const TechController:IController  =  {
    async delete(req: Request, res: Response): Promise<object> {
        const user: typeof User = await validateUser(req, res)
        if(!user) return res.status(404).json({ error: 'User not found'})

        const {name} = req.body
        const tech = Tech.findOne(name)
        await user.removeTech(tech)

        return res.json();
    },

    async update(req: Request, res: Response): Promise<object> {
        const user: typeof User = await validateUser(req, res)
        if(!user) return res.status(404).json({ error: 'User not found'})

        return res.json();
    },

    async list(req: Request, res: Response): Promise<object> {
        const techs = await Tech.findAll({include: {association: 'users'}})
        return res.json(techs)
    },

    async create(req: Request, res: Response): Promise<object> {
        const {name } = req.body

        const user: typeof User = await validateUser(req, res)
        if(!user) return res.status(404).json({ error: 'User not found'})

        const [tech] = await Tech.findOrCreate({
            where: {name}
        })

        await user.addTech(tech)
        return res.status(201).json(tech)
    }
}

export {TechController}