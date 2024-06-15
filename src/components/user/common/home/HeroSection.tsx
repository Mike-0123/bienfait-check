import { motion } from "framer-motion";
import { hero } from "../../assets";
import constants from "../../../../constants";

const HeroSection = () => {
  return (
    <div className="relative h-[88vh] flex flex-col justify-center items-center text-bgUserColor overflow-hidden">
      <motion.img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="z-10 flex flex-col items-center gap-4">
        <h1 className="text-6xl lg:text-8xl uppercase font-bold text-white text-center leading-snug">
          {constants.webInfo.name}
        </h1>
        <p className="text-lg text-white">{constants.webInfo.slogan}</p>
        <div className="absolute bottom-8 flex items-center justify-center transform rotate-90">
          <p className="text-lg text-white">More</p>
          <div className="w-12 h-0.5 bg-white ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
