import {Request, Response, Router} from 'express'

const router = Router()

router.get('/:id', (req: Request, res: Response) => {
    res.send('Fuck dig')
})

export default router