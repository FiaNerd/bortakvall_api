import express from "express"
import cors from 'cors'
import morgan from "morgan"
import routes from "./routes"

const app = express()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(routes)

export default app