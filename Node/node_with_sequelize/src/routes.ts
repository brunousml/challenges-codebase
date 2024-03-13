import {Request, Response} from "express";
import {UserController} from './controllers/UserController'

import express from 'express';
const router = express.Router()

router.get('/', (req:Request, res:Response) => {
    return res.status(200).send('hello world')
})

router.post('/users', UserController.store)

// module.exports = router;
export {router}