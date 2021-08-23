import express, { Application } from 'express'
import compression from 'compression'
import cors from 'cors'

import routes from '@routes'

const app: Application = express()

app.use(compression())
app.use(express.json())
app.use(cors())

app.use(routes)

export default app
