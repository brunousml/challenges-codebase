import {AddressEntity} from "../entities/FarmerEntity";

export interface IFarmerRepository {
    insert(farmer: AddressEntity): Promise<AddressEntity>
    update(id:string, farmer: AddressEntity): Promise<AddressEntity>
    delete(id:string): Promise<void>
}