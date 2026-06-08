import { useRef, useState } from "react";
import "./style.css";

type Props = {
  data: IPageSectionData;
};
export default function VideoSection({ data }: Props) {
  // const [playVideo, setPlayVideo] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  // const handlePlay = () => {
  //   setPlayVideo(true);
  //   videoRef.current?.play();
  // };

  return (
    <div className="relative">
      <video
        ref={videoRef}
        className="w-full object-cover custom-video"
        autoPlay
        playsInline
        muted
        loop
        preload="auto"
        controls
      >
        <source src={data.video} />
      </video>
    </div>
  );
}
