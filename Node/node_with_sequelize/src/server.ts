const express = require('express')
import {router } from './routes'

require('./database')

const app = express()

const port: string = process.env.PORT || '3000'

app.use(express.json())
app.use(router)

app.listen(parseInt(port), () => console.log(`it's alive on ${port}`))
