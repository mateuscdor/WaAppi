import { Router } from 'express'
import sessionRoutes from './routes/sessionRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import groupRoutes from './routes/groupRoutes.js'
import response from './response.js'
import cors from 'cors'

const router = Router()

router.use(cors({
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']
}));
router.use('/session',cors(), sessionRoutes)
router.use('/chat',cors() ,chatRoutes)
router.use('/group',cors(), groupRoutes)

router.all('*', (req, res) => {
    response(res, 404, false, 'The requested url cannot be found.')
})

export default router
