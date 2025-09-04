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
      
      <div className="z-10 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl uppercase font-bold text-white text-center leading-tight">
          {constants.webInfo.name}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white text-center">
          {constants.webInfo.slogan}
        </p>

        {/* Verified Badge */}
        <a 
          href="https://www.engineersrwanda.rw/ier-compliant-firms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 flex flex-col items-center"
        >
          <motion.img
            src="https://cdn.dribbble.com/users/514480/screenshots/1605357/certified---dribbble.gif"
            alt="Verified by Government"
            className="w-32 sm:w-40 md:w-48 opacity-80"
            initial={{ scale: 0.8 }}
            animate={{ scale: [0.8, 1, 0.9] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-xs sm:text-sm text-white mt-2">Verified by Government</p>
        </a>

        <div className="absolute bottom-8 flex items-center justify-center transform rotate-90">
          <p className="text-base sm:text-lg text-white">More</p>
          <div className="w-8 sm:w-12 h-0.5 bg-white ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


