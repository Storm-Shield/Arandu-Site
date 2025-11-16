import express from "express"
import cors from "cors"
import routes from "./routes/CandidatesRoutes.js"

const app = express()

app.use(cors)

app.use(express.json())

app.use('/candidates', routes)

const PORT = 4000

app.listen(PORT, () => {
    console.log("Server running on port: "+PORT)
})