//Fazendo a conexão com o back end da aplicação.
import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()

  const videoURL = input.value
  //console.log("A URL do vídeo: ", videoURL)
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Este não é um vídeo SHORT")
  }

  const [_, parms] = videoURL.split("/shorts/")
  const [videoID] = parms.split("?si")

  content.textContent = "Obtendo texto do Audio"

  /* Fazendo a requisição no servidor atraves do arquivo index.js, onde tem o caminho na app.get ond recebe o id */
  const transcription = await server.get("/summary/" + videoID)

  content.textContent = transcription.data.result
})
