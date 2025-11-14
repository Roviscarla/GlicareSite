
import NossoApp from "./components/nosso-aplicativo";
import { ResumoDiabetes } from "./components/sobre-diabetes";
import YouTubeVideoCarousel from "./components/ui/youtube-carousel";
import { IYouTubeVideo } from "./models/youtube.interface";

//import AdBanner from "./components/ui/ad-banner";

const videosData: IYouTubeVideo[] = [
  {
    id: "mlyqICh87Gc",
    title: "A HISTÓRIA DO DIABETES",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "lNiiaU6XL4k",
    title: "ADULTOS PODEM DESENVOLVER DIABETES TIPO 1?",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "D9wblEiP3f0",
    title: "Outro Vídeo Relevante",
    channelName: "Nome do Canal",
  },
];

export default function Home() {
  return (
    <main>
      <NossoApp />
      <ResumoDiabetes />
      <YouTubeVideoCarousel
        videos={videosData}
        title="Confira abaixo a playlist especial com vídeos sobre diabetes:"
        //linkText="Clique Aqui"
        //playlistUrl="https://www.youtube.com/playlist?list=SUA_PLAYLIST_ID_AQUI"
      />
  
    </main>
  );
}
