import {Farmer} from "../entities/Farmer";

export interface IFarmerRepository {
    insert(farmer: Farmer): Promise<void>
    update(id:string, farmer: Farmer): Promise<void>
    delete(id:string): Promise<void>
}