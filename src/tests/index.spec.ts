import supertest from 'supertest'
import app from '..'
import { sharpResize } from '../funcs/helperFuncs/helperFuncs'
import fs from 'fs'
const request = supertest(app)

describe('API', () => {
  it('should return a message', async () => {
    const response1 = await request.get('/')
    expect(response1.text).toBe('Welcome to Image Processing API')
    const response2 = await request.get('/image-processing-api')
    expect(response2.text).toBe('Image Processing API Main Route')
  })

  it('should should return a status of 200', async () => {
    const response = await request.get('/')
    expect(response.status).toBe(200)
  })

  it('should return a message if image does not exist', async () => {
    const response = await request.get(
      '/image-processing-api/resize-image?filename=filenotFound&width=400&height=300'
    )
    // console.log(response.status)
    expect(response.status).toBe(403)
    expect(response.body.ok).toBe('failed')
    expect(response.body.message).toBe('Input file is missing')
  })



  it('should return an error if a parameter is missing', async () => {
    const response = await request.get('/image-processing-api/resize-image')
    //   console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", response.text);
    expect(response.text).toEqual('Error: Parameter(s) missing..')
    //   expect(response.status).toEqual(400);
  })

  it('should return an error message if width is not a number', async () => {
    const response = await request.get(
      '/image-processing-api/resize-image?filename=img1&width=hello&height=400'
    )
    expect(response.text).toBe('height and width should be numbers')
  })

  it('should return an error message if height is not a number', async () => {
    const response = await request.get(
      '/image-processing-api/resize-image?filename=img1&width=hello&height=hello'
    )
    expect(response.text).toBe('height and width should be numbers')
    expect(response.status).toBe(400)
  })

 
})

describe('Using Sharp', () => {
  it('should return an error message if file does not exist', async () => {
    const filename = 'img5'
    const height = 300
    const width = 300
    const resizePath = `./images/cache/${filename}${width}x${height}.jpeg`
    const response = await sharpResize(filename, height, width)
    response.toFile(resizePath, (err: Error) => {
      expect(err.message).toEqual('Input file is missing')
    })
  })

  it('shoud create a resized image', async () => {
    const filename = 'img1'
    const height = 200
    const width = 500
    const testPath = `./src/tests/images/${filename}${width}x${height}.jpeg`
    const response = await sharpResize(filename, height, width)
    await response.toFile(testPath, async () => {
      const d = await fs.existsSync(testPath)
      expect(d).toEqual(true)
    })
  })
})
