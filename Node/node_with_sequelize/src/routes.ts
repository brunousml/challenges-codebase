import {Request, Response} from "express";

import express from 'express';
const router = express.Router()

router.get('/', (req:Request, res:Response) => {
    return res.status(200).send('hello world')
})

module.exports = router;