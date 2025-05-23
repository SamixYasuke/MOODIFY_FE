import React from "react";

const MoodPlanningSection: React.FC = () => {
  return (
    <section className="">
      <div className="mx-auto max-w-[90%] sm:max-w-[85%] md:max-w-[80%] my-16 md:my-20 lg:my-28">
        <div className="bg-[rgb(246,246,246)] flex flex-col lg:flex-row items-center lg:items-start lg:justify-between px-4 sm:px-6 md:px-8 lg:px-12 rounded-4xl">
          <div className="w-full max-w-[32rem] lg:max-w-[40rem] py-8 lg:py-12">
            <h3 className="text-[rgb(34,63,89)] text-[clamp(1.5rem,4vw,2rem)] text-center lg:text-start font-semibold leading-[clamp(2rem,5vw,2.5rem)]">
              Mood-based planning
            </h3>
            <p className="text-[rgb(34,63,89)] text-[clamp(0.875rem,2.5vw,1rem)] text-start leading-[clamp(1.25rem,3vw,1.5rem)] py-4 lg:py-6">
              Moodify’s core feature helps you choose tasks based on your
              emotional and energy levels. This helps you stay productive
              without pressure and improves how you manage your day.
            </p>
          </div>
          <div className="w-full max-w-[32rem] lg:max-w-[36rem]">
            <img
              className="w-full h-auto max-h-[28rem] object-contain"
              src="/images/set-mood-neutral.png"
              alt="Image showing How are you?- Moodify"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-8 md:mt-10 gap-6 md:gap-8 lg:gap-4 w-full">
          <div className="bg-[rgb(246,246,246)] rounded-4xl p-6 md:p-8 lg:p-10 w-full lg:w-[50%]">
            <h3 className="text-[rgb(34,63,89)] text-[clamp(1.5rem,4vw,2rem)] text-center lg:text-start font-semibold leading-[clamp(2rem,5vw,2.5rem)] pt-2">
              Smart Reminders
            </h3>
            <p className="text-[rgb(34,63,89)] text-[clamp(0.875rem,2.5vw,1rem)] text-start leading-[clamp(1.25rem,3vw,1.5rem)] py-4 lg:py-6">
              Moodify sends subtle reminders that keep you on track without
              being annoying.
            </p>
            <div className="flex justify-center">
              <img
                className="w-full max-w-[24rem] h-auto"
                src="/images/remind-me.png"
                alt="Image showing remind me before task"
              />
            </div>
          </div>
          <div className="bg-[rgb(246,246,246)] rounded-4xl p-6 md:p-8 lg:p-10 w-full lg:w-[50%]">
            <h3 className="text-[rgb(34,63,89)] text-[clamp(1.5rem,4vw,2rem)] text-center lg:text-start font-semibold leading-[clamp(2rem,5vw,2.5rem)] pt-2">
              Voice Assistant
            </h3>
            <p className="text-[rgb(34,63,89)] text-[clamp(0.875rem,2.5vw,1rem)] text-start leading-[clamp(1.25rem,3vw,1.5rem)] py-4 lg:py-6">
              Moodbot, our built-in voice assistant, helps you add tasks, check
              what’s next, or get personalized motivation.
            </p>
            <div className="flex justify-end">
              <img
                className="w-full max-w-[12rem] h-auto"
                src="/images/mood-bot.png"
                alt="Image showing Moodbot voice assistant"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoodPlanningSection;
