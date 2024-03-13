import { Farmer } from "../../entities/Farmer";
import {IFarmerRepository} from "../IFarmerRepository";

export class ßPostgresFarmerRepository implements IFarmerRepository {
    insert(farmer: Farmer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(id: string, farmer: Farmer): Promise<void> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }

}