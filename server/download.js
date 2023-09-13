import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoid) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoid
  console.log("Realizando download do vídeo: " + videoid)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" })
    .on("info", (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000
      //console.log(seconds)/*Duração do Vídeo*/
      if (seconds > 60) {
        throw new Error("A duração deste vídeo é maior que 60s")
      }
    })
    .on("end", () => {
      console.log("download do vídeo finalizado.")
    })
    .on("error", (error) => {
      console.log(
        "Não foi possivel fazer o dwonload do vídeo. Detalhes do error: ",
        error
      )
    })
}
