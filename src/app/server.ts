import express, { Application } from 'express'
import compression from 'compression'
import cors from 'cors'

import routes from '@routes'

const app: Application = express()
const port = process.env.PORT || 3333

app.use(compression())
app.use(express.json())
app.use(cors())

app.use(routes)

app.listen(port, () => {
  console.log(`✅ - API running on port ${port}`)
  console.log('➖ - Attempting to connect to Database')
})
