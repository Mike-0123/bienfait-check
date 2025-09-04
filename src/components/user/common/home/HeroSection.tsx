import { motion } from "framer-motion";
import { hero, verfied } from "../../assets";
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
        {/* Website Name */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl uppercase font-bold text-white text-center leading-tight">
          {constants.webInfo.name}
        </h1>

        {/* Slogan */}
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl  text-white text-center">
          {constants.webInfo.slogan}
        </p>

        {/* ✅ Verified Badge (bigger image) */}
        <a 
          href="https://www.engineersrwanda.rw/ier-compliant-firms" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 flex flex-col items-center"
        >
          
          <motion.img
            src={verfied}
            alt="Verified by Government"
            className="w-64 sm:w-72 md:w-80 opacity-100 bg-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: [0.9, 1.15, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <p className="text-sm sm:text-base md:text-lg text-white mb-3 text-center">
            Verified by IER (Institute of Engineers in Rwanda)
          </p>
        </a>

        {/* More Section */}
        <div className="absolute bottom-8 flex items-center justify-center transform rotate-90">
          <p className="text-base sm:text-lg text-white">More</p>
          <div className="w-8 sm:w-12 h-0.5 bg-white ml-2"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
