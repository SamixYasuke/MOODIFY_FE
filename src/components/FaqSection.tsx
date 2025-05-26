import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";
import * as motion from "motion/react-client";

interface FaqContent {
  question: string;
  answer: string;
}

const FaqSection = () => {
  const faqContents: FaqContent[] = [
    {
      question: "What is Moodify?",
      answer: `Moodify is a mood-based to-do list app that helps you plan your day based on how you feel.`,
    },
    {
      question: "How does Moodify know my mood?",
      answer: `Moodify uses a short, interactive quiz or user input at the start of your session to assess your mood, allowing it to suggest tasks tailored to your emotional state.`,
    },
    {
      question: "Can I use Moodify offline?",
      answer: `Yes, Moodify supports offline functionality, allowing you to access and manage your to-do lists without an internet connection, with data syncing once you're back online.`,
    },
    {
      question: "Is Moodify free?",
      answer: `Moodify offers a free version with core features, and a premium subscription is available for advanced functionalities like mood analytics and priority support.`,
    },
    {
      question: "Do I need an account to use the app?",
      answer: `You can use Moodify without an account for basic features, but creating an account is required to save your preferences, sync data across devices, and access personalized features.`,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <motion.section
      className="py-10 flex justify-center items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="w-[588px]">
        <motion.h2
          className="text-[rgb(34,63,89,1)] font-semibold text-[20px] text-center py-14"
          variants={itemVariants}
        >
          Frequently asked questions
        </motion.h2>
        <motion.div className="px-6" variants={containerVariants}>
          {faqContents.map((faq, index) => (
            <motion.div
              key={index}
              className="rounded-4xl p-7 mb-4"
              initial={{
                backgroundColor: "rgb(255, 255, 255)",
                ...itemVariants.hidden,
              }}
              animate={{
                backgroundColor:
                  openIndex === index
                    ? "rgb(246, 246, 246)"
                    : "rgb(255, 255, 255)",
                ...itemVariants.visible,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              variants={itemVariants}
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <p className="text-[16px] text-[rgb(34,63,89,1)] leading-6 font-semibold">
                  {faq.question}
                </p>
                {openIndex === index ? (
                  <FaMinus
                    className="text-[rgb(34,63,89,1)] cursor-pointer"
                    size={20}
                  />
                ) : (
                  <FaPlus
                    className="text-[rgb(34,63,89,1)] cursor-pointer"
                    size={20}
                  />
                )}
              </div>
              {openIndex === index && (
                <motion.p
                  className="text-sm leading-[22px] font-normal text-[rgba(34,63,89,1)] pt-7 pb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeIn" }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
