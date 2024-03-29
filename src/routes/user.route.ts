import express from 'express'
import {
    getAllUsersHandler,
    getMeHandler,
} from '../controllers/user.controller'
import { deserializeUser } from '../middleware/deserializeUser'
import { requireUser } from '../middleware/requireUser'
import { restrictTo } from '../middleware/restictTo'

const router = express.Router()
router.use(deserializeUser, requireUser)

// Admin get users route
router.get('/', restrictTo('admin'), getAllUsersHandler)

// Get my info route
router.get('/me', getMeHandler)

export default router