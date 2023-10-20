import * as Path from 'node:path'
import * as URL from 'node:url'
import * as fsPromises from 'node:fs/promises'
import express from 'express'
import projects from './projects'

const server = express()

server.use(express.json())
server.use('/api/v1/projects', projects)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default server
