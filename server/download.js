import ytdl from "ytdl-core"
import fs from "fs"

export const download = (videoid) => {
  const videoURL = "https://www.youtube.com/shorts/" + videoid
  console.log("Realizando download do vídeo: " + videoid)

  ytdl(videoURL, { quality: "lowestaudio", filter: "audioonly" }).on(
    "info",
    (info) => {
      const seconds = info.formats[0].approxDurationMs / 1000
      console.log(seconds)
    }
  )
}
