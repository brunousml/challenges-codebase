import {Request, Response} from "express";

export default interface IController {
    list(req: Request, res: Response): Promise<object>
    create(req: Request, res: Response): Promise<object>
}