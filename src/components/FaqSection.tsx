import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const FaqSection = () => {
  interface FaqContent {
    question: string;
    answer: string;
  }

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

  return (
    <section className="py-10 flex justify-center items-center">
      <div className="w-[588px]">
        <h2 className="text-[rgb(34,63,89,1)] font-semibold text-[20px] text-center py-14">
          Frequently asked questions
        </h2>
        <div className="px-6">
          {faqContents.map((faq, index) => (
            <div
              className={`${
                openIndex === index ? `bg-[rgb(246,246,246,1)]` : `bg-white`
              } rounded-4xl p-7 mb-4`}
              key={index}
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
                <p className="text-sm leading-[22px] font-normal text-[rgba(34,63,89,1)] pt-7 pb-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
