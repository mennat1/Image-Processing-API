import express from 'express'
import resizeImage from '../../funcs/processImage'
import validateParameters from '../../middleware/validateParameters'

const resizeImageRoute = express.Router()

resizeImageRoute.get('/', validateParameters, resizeImage)

export default resizeImageRoute
