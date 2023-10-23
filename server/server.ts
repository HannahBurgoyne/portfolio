import * as Path from 'node:path'
import express from 'express'
import projects from './projects'
import nodemailer from 'nodemailer'

const server = express()

server.use(express.json())
server.use('/api/v1/projects', projects)

server.post('/send-email', async (req, res) => {
  try {
    const { name, email, message } = req.body
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        user: import.meta.env.EMAIL as string,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        pass: import.meta.env.PASS as string,
      },
    })
    const mailOptions = {
      from: email,
      to:
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        import.meta.env.EMAIL as string,
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore,
      subject: `Message from ${name}`,
      text: message,
    }

    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent' + info.response)
    res.sendStatus(200)
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message)
      res.sendStatus(500)
    }
  }
})

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}
export default server
