import express from 'express'
import UserRoutes from './routes/users.routes'


const app = express()

app.use('/users', UserRoutes)

app.listen(8081)