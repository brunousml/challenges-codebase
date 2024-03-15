import {Request, Response } from "express"
import {CreateFarmerUseCase} from "./CreateFarmerUseCase";

export class CreateFarmerController {
    constructor(
        private createFarmerUseCase: CreateFarmerUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const farmer = await this.createFarmerUseCase.execute(request.body)
            return response.status(201).send(farmer)
        } catch (error: any) {
            const errorResponse = {
                success: false,
                message: error.message || "An unexpected error occurred",
            };
            return response.status(400).send(errorResponse)
        }
    }
}