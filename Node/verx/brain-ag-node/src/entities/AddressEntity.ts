import {uuid} from "uuidv4";
import {IAddressDTO} from "../useCases/AddressesUseCases/IAddressDTO";

export class AddressEntity {
    public readonly id: string | undefined

    public city: string | undefined
    public state: string | undefined

    constructor(props: Omit<IAddressDTO, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }

    isValid():{valid: boolean, errors: string[]} {
        let errors:string[] = [];
        if (!this.city) errors.push("City is required.");
        if (!this.state) errors.push("State is required.");

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }

}