import express from 'express'
import { config } from 'dotenv'
import { GetUsersControllers } from './controllers/get-users/get-users'
import { MongoGetUsersRepository } from './repositories/get-users/mongo-get-users'

config()

const app = express()

const port = process.env.PORT || 6000

app.listen(port, () => console.log(`listening on port ${port}!`))

app.get("/users", async (req, res) => {
    const mongoGetUsersRepository = new MongoGetUsersRepository()

    const getUsersController = new GetUsersControllers(mongoGetUsersRepository)

    const {body, statusCode} = await getUsersController.handle()

    res.send(body).status(statusCode)
})