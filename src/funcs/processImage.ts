import fs from 'fs'
import path from 'path'
import { Response, Request } from 'express'

import { sharpResize } from './helperFuncs/helperFuncs'

const resizeImage = async (req: Request, res: Response): Promise<void> => {
  const { filename, height, width } = req.query

  const h: number | null = height ? parseInt(height as string, 10) : null
  const w: number | null = width ? parseInt(width as string, 10) : null
  const f: string = filename as unknown as string

  try {
    const imgPath = `${f}_${w}x${h}.jpeg`
    const imgCachePath = `./images/cache/${f}_${w}x${h}.jpeg`
    // const imgPathExists = await fileExists(path.join("images", imgPath));
    // console.log("find: ", path.join("images/cache", imgPath))
    const imgPathExists = await fs.existsSync(imgCachePath)
    // console.log('imgPath=', imgPath)
    // console.log('imgCachePath=', imgCachePath)

    // send cached file
    if(imgPathExists){
      console.log('Found cache')
      res.sendFile(`/${imgPath}`, { root: path.join('./images/cache') })
    }else{
      console.log('Did not find cache')
      const response = await sharpResize(f, h, w)
      response.toFile(imgCachePath, (error: Error) => {
        if(error) {
          res.status(403).send({
            ok: 'failed',
            message: error.message,
          })
        }else{
          res.sendFile(`/${imgPath}`, { root: path.join('./images/cache') })
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}


export default resizeImage
