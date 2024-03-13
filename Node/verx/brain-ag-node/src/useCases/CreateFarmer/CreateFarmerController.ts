import {Request, Response } from "express"
import {CreateFarmerUseCase} from "./CreateFarmerUseCase";

export class CreateFarmerController {
    constructor(
        private createFarmerUseCase: CreateFarmerUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        await this.createFarmerUseCase.execute(request.body)

        return response.status(201).send()
    }
}