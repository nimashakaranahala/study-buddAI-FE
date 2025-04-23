// components/FullScreenLoader.tsx
import Lottie from "lottie-react";
import animation from "../src/assets/loading.json";

const FullScreenLoader = () => {
  return (
    <div className="fullscreen-loader">
      <Lottie animationData={animation} loop autoplay />
    </div>
  );
};

export default FullScreenLoader;
