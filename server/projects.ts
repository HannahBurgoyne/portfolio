import express from 'express'
import * as Path from 'node:path'
import * as URL from 'node:url'
import * as fsPromises from 'node:fs/promises'

const router = express.Router()

const __filename = URL.fileURLToPath(import.meta.url)
const __dirname = Path.dirname(__filename)

router.get('/', async (req, res) => {
  try {
    const filePath = Path.join(__dirname, 'data', 'data.json')
    const data = await fsPromises.readFile(filePath, 'utf-8')
    res.json(data)
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message)
    }
  }
})

export default router
