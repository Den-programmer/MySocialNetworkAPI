import express from 'express'
import mongoose from 'mongoose'
import routerPosts from './routers/routerPost.js'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/', routerPosts)

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
        app.listen(process.env.PORT, () => console.log('The server has been started on port ' + process.env.PORT + '...'))
    } catch (e) {
        console.log(e)
    }
}

startApp()