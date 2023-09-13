import cors from "cors"
import express, { response } from "express"

const app = express()
app.use(cors())

/*Configurando a rota*/
app.get("/summary", (request, response) => {
  response.send("Hello")
})

app.listen(3333, () => console.log("Server is running on port 3333"))
