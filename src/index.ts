import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import mainRoute from './routes/index'
dotenv.config()
const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))
// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome to Image Processing API')
})

app.use('/image-processing-api', mainRoute)

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
export default app
