import { Router } from 'express'
import Homepage from '../controllers/homepage'

const api = Router()
api.get('/', Homepage)

export default api