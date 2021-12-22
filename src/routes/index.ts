import express, { Request, Response } from 'express'
import resizeImageRoute from './api/resizeImage'

const mainRoute = express.Router()

mainRoute.get('/', (req: Request, res: Response) => {
  res.status(200).send('Image Processing API Main Route')
})

mainRoute.use('/resize-image', resizeImageRoute)

export default mainRoute
