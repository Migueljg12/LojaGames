import express from 'express'
import UserService from '../services/users.js'

const service = new UserService()

const router = express.Router()

const prefix = 'auth'

router.post('/signin', async (req, res) => {
  const { body } = req
  try {
    console.log('Enviando o token!')
    const token = await service.signin(body)
    res.set( 'x-access-token', token )
    return res.json(token)
  } catch ({ message }) {
    console.log(message)
    res.status(401).json({ message })
  }
})

export default {
  controller: router,
  prefix
}
