import {PostgresFarmerRepository} from "./PostgresFarmerRepository";
import {PostgresAddressRepository} from "./PostgresAddressRepository";

const postgresFarmerRepository:PostgresFarmerRepository = new PostgresFarmerRepository()
const postgresAddressRepository:PostgresAddressRepository = new PostgresAddressRepository()

export {postgresFarmerRepository, postgresAddressRepository}