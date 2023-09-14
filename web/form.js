//Fazendo a conexão com o back end da aplicação.
import { server } from "./server.js"

const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", async (event) => {
  event.preventDefault()
  content.classList.add("placeholder")

  const videoURL = input.value
  //console.log("A URL do vídeo: ", videoURL)
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Este não é um vídeo SHORT")
  }

  const [_, parms] = videoURL.split("/shorts/")
  const [videoID] = parms.split("?si")

  content.textContent = "Obtendo texto do Audio..."

  /* Fazendo a requisição no servidor atraves do arquivo index.js, onde tem o caminho na app.get ond recebe o id (Metodo GET)*/
  const transcription = await server.get("/summary/" + videoID)

  //content.textContent = transcription.data.result

  content.textContent = "Realizando o Resumo..."

  /* Requisição e envio no corpo ... com o método POST*/
  const summary = await server.post("/summary", {
    text: transcription.data.result,
  })
  content.textContent = summary.data.result
  content.classList.remove("placeholder")
})
