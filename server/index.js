import cors from "cors"
import express from "express"

import { download } from "./download.js"

const app = express()
app.use(cors())

/*Configurando a rota*/
app.get("/summary/:id", (request, response) => {
  download(request.params.id)

  response.json({ result: "Downloand realizado com sucesso" })
})

app.listen(3333, () => console.log("Server is running on port 3333"))
