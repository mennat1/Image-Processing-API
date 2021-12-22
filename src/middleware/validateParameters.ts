import { Response, Request, NextFunction } from 'express'

function validateparameters(
  req: Request,
  res: Response,
  next: NextFunction
): void {
  const { query } = req
  const requiredParameters = ['filename', 'height', 'width']

  for (let index = 0; index < requiredParameters.length; index++) {
    const parameter = requiredParameters[index]
    if (query[parameter] === undefined) {
      res.status(400).send('Error: Parameter(s) missing..')
      return
    }

    const parameterValue = query[parameter]

    if (parameter == 'filename' && typeof parameterValue !== 'string') {
      res.status(400).send('Filename should be a string')
      return
    }

    if (parameter == 'height' || parameter == 'width') {
      const numberValue = Number(parameterValue)
      if(!numberValue) {
        res.status(400).send('height and width should be numbers')
        return
      }
    }
  }
  next()
}

export default validateparameters
