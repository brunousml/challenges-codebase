import  { Sequelize } from 'sequelize'
import {dbConfig} from '../config/database'
// const connection = new Sequelize(
//     dbConfig.database,
//     dbConfig.username,
//     dbConfig.password,
//     dbConfig.options
// )
const connection = new Sequelize(dbConfig)


export {connection}