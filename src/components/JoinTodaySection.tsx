import React from "react";
import * as motion from "motion/react-client";

const containerVariants = {
  hidden: { opacity: 0 },
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

const interactiveVariants = {
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

const JoinTodaySection: React.FC = () => {
  return (
    <motion.section
      className="flex justify-center items-center py-12 md:py-16 lg:py-20 transition-all duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div
        className="h-[445px] w-full max-w-[996px] mx-4 bg-[rgba(34,60,83,1)] flex flex-col lg:flex-row justify-between items-center p-12 md:p-8 lg:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
        variants={itemVariants}
      >
        <motion.div className="flex-1 text-start" variants={itemVariants}>
          <motion.p
            className="text-white font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed md:leading-loose lg:leading-[2.5rem] max-w-[568px] transition-all duration-300"
            variants={itemVariants}
          >
            Join multiples of users changing their work process, download
            Moodify today!
          </motion.p>
          <motion.div
            className="mt-6 flex justify-start"
            variants={itemVariants}
          >
            <motion.a
              className="text-center inline-block w-40 md:w-48 bg-white text-[rgb(34,63,89)] font-semibold py-3 md:py-4 px-4 text-sm md:text-base border-2 border-[rgb(96,181,255)] rounded-lg hover:bg-[rgb(96,181,255)] hover:text-white hover:border-transparent transition-all duration-300 ease-in-out transform"
              href="https://animepahe.ru/"
              variants={interactiveVariants}
              whileHover="hover"
            >
              Download App
            </motion.a>
          </motion.div>
        </motion.div>
        <motion.div
          className="mt-8 flex justify-center lg:justify-end items-end"
          variants={itemVariants}
        >
          <motion.img
            className="w-32 md:w-40 lg:w-64 xl:w-72 h-auto object-contain"
            src="images/take-coffee.png"
            alt="Moodify - Take a coffee break"
            variants={interactiveVariants}
            whileHover="hover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default JoinTodaySection;
