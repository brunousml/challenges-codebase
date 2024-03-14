import {uuid} from "uuidv4";
import {ICreateFarmerDTO} from "../useCases/CreateFarmer/ICreateFarmerDTO";
import {cnpj as CNPJValidator, cpf as CPFValidator} from "cpf-cnpj-validator";

export class FarmerEntity {
    public readonly id: string | undefined

    public cpf: string | undefined
    public cnpj: string | undefined
    public name: string | undefined

    constructor(props: Omit<ICreateFarmerDTO, 'id'>, id?: string) {
        Object.assign(this, props)

        if(!id) {
            this.id = uuid()
        }
    }

    isValid():{valid: boolean, errors: string[]} {
        // if(!this.name) return false
        // if(!this.cpf && !this.cnpj) return false
        // if(!this.cnpj && !CPFValidator.isValid(<string>this.cpf)) return false
        // if(!this.cpf && !CNPJValidator.isValid(<string>this.cnpj)) return false
        //
        // return true

        let errors = [];
        if (!this.name) errors.push("Name is required.");
        if (!this.cpf && !this.cnpj) errors.push("Either CPF or CNPJ is required.");
        if (this.cpf && !CPFValidator.isValid(this.cpf)) errors.push("CPF is invalid.");
        if (this.cnpj && !CNPJValidator.isValid(this.cnpj)) errors.push("CNPJ is invalid.");

        return {
            valid: errors.length === 0,
            errors: errors
        };
    }
}