import {Request, Response } from "express"
import {DeleteFarmerUseCase} from "./DeleteFarmerUseCase";

export class DeleteFarmerController {
    constructor(
        private deleteFarmerUseCase: DeleteFarmerUseCase
    ) {}

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const {farmer_id } = request.params
            const farmer = await this.deleteFarmerUseCase.execute(farmer_id)
            return response.status(204).send()
        } catch (error: any) {
            const errorResponse = {
                success: false,
                message: error.message || "An unexpected error occurred",
            };
            return response.status(400).send(errorResponse)
        }
    }
}