const form = document.querySelector("#form")
const input = document.querySelector("#url")
const content = document.querySelector("#content")

form.addEventListener("submit", (event) => {
  event.preventDefault()

  const videoURL = input.value
  //console.log("A URL do vídeo: ", videoURL)
  if (!videoURL.includes("shorts")) {
    return (content.textContent = "Este não é um vídeo SHORT")
  }

  const [_, parms] = videoURL.split("/shorts/")
  const [videoID] = parms.split("?si")
  console.log(videoID)
})
