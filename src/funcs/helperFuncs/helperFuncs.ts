import sharp, { Sharp } from 'sharp'

const sharpResize = async (
  f: string | null,
  h: number | null,
  w: number | null
): Promise<Sharp> => {
  const buffer = `images/${f}.jpeg`
  const image = await sharp(buffer)
  const resizedimage = await image.resize(w, h)
  return resizedimage
}

export { sharpResize }
