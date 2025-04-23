// components/FullScreenLoader.tsx
import Lottie from "lottie-react";
import loadingbot from "../src/assets/loadingbot.json";

const FullScreenLoader = () => {
  return (
    <div className="fullscreen-loader">
      <Lottie animationData={loadingbot} loop autoplay />
    </div>
  );
};

export default FullScreenLoader;
