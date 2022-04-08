import 'dotenv/config'
import express from 'express'
import nodeCleanup from 'node-cleanup'
import routes from './routes.js'
import { init, cleanup } from './whatsapp.js'

const app = express()
// const host = process.env.HOST ?? '127.0.0.1'
const port = 50001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/', routes)

app.listen(port, () => {
    init()
    console.log(`Server is listening http://localhost:${port}`)
})

nodeCleanup(cleanup)

export default app
