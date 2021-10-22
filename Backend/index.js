import express from 'express'
import connectMongoose from './clients/mongoose.js'
import controllers from './controllers/index.js'
import cors from 'cors'

const { PORT } = process.env

const app = express()

app.use(express.json())

connectMongoose()

app.use(cors('*'))

controllers.forEach(({ controller, prefix }) =>
  app.use(`/api/${prefix}`, controller))

const server = app.listen(PORT, () =>
  console.log(`API funcionando na porta ${PORT}`))
export default server
