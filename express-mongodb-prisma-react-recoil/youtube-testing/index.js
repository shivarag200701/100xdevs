import { YoutubeTranscript } from "youtube-transcript";

YoutubeTranscript.fetchTranscript("e8krKpuaby8")
  .then((data) => {
    console.log("data is", data);
  })
  .catch((error) => {
    console.log(error);
  });
