import React from "react";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const HeroSection: React.FC = () => {
  return (
    <motion.main
      className="bg-[rgb(34,60,83)] flex flex-col gap-6 md:gap-8 lg:gap-12 lg:flex-row items-center justify-between py-10 px-5 lg:px-14"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="w-full max-w-[36rem] lg:max-w-[48rem]"
        variants={itemVariants}
      >
        <motion.h1
          className="text-white text-[clamp(1.75rem,5vw,4rem)] text-center lg:text-start font-bold leading-[clamp(2.25rem,6vw,4.5rem)] py-4 px-10 lg:px-0"
          variants={itemVariants}
        >
          Productivity That Feels Right
        </motion.h1>
        <motion.div className="pb-4 space-y-2" variants={itemVariants}>
          <motion.p
            className="text-white text-[clamp(0.875rem,2.5vw,1rem)] text-center lg:text-start leading-[clamp(1.25rem,3vw,1.5rem)] font-extralight"
            variants={itemVariants}
          >
            Moodify helps you plan tasks that match how you feel.
          </motion.p>
          <motion.p
            className="text-white text-[clamp(0.875rem,2.5vw,1rem)] text-center lg:text-start leading-[clamp(1.25rem,3vw,1.5rem)] font-extralight"
            variants={itemVariants}
          >
            Simple, smart and mood-aware.
          </motion.p>
        </motion.div>
        <motion.div
          className="flex justify-center lg:justify-start"
          variants={itemVariants}
        >
          <motion.a
            className="block w-[120px] text-center bg-white text-[rgb(34,63,89,1)] font-semibold box-content py-4 px-5 text-sm border-[rgb(96,181,255,1)] hover:bg-[rgb(96,181,255)] focus:bg-[rgb(96,181,255)] active:bg-[rgb(96,181,255)] hover:text-white focus:text-white active:text-white hover:border-transparent focus:border-transparent active:border-transparent transition-all duration-300 ease-in-out transform border-2 rounded-lg"
            href="https://animepahe.ru/"
            variants={buttonVariants}
            whileHover="hover"
          >
            Download App
          </motion.a>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full max-w-[36rem] lg:max-w-[48rem]"
        variants={itemVariants}
      >
        <motion.img
          className="w-full h-auto max-h-[36rem] object-contain"
          src="/images/hero-image.png"
          alt="hero-section image"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>
    </motion.main>
  );
};

export default HeroSection;
