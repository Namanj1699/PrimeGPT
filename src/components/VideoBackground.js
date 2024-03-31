import { useSelector } from "react-redux";
import useMoviesTrailer from "../utils/customizedHooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {

  const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
  useMoviesTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe 
        className="w-screen aspect-video"
        // width="560"
        // height="615"
        src={"https://www.youtube.com/embed/"+trailerVideo.key+"?si=BFBYOBci8Cdy9ZHN?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
