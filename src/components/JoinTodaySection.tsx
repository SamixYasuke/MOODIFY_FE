const JoinTodaySection = () => {
  return (
    <section className="flex justify-center items-center py-10">
      <div className="w-[90%] h-[500px] lg:h-[340px] lg:w-[996px] bg-[rgb(34,60,83)] flex flex-col lg:flex-row justify-between items-center p-10 rounded-4xl">
        <div>
          <p className="text-white text-start py-4 font-semibold text-[20px] lg:text-[32px] leading-7 lg:leading-10 w-[264px] lg:w-[568px]">
            Join multiples of users changing their work process, download
            Moodify today!
          </p>
          <div className="flex items-start">
            <a
              className="w-[160px] text-center bg-white text-[rgb(34,63,89,1)] font-semibold box-content py-4 px-3 text-sm border-[rgb(96,181,255,1)] border-2 rounded-lg cursor-pointer"
              href="/animepahe.ru"
            >
              Download App
            </a>
          </div>
        </div>
        <div>
          <img
            className="w-[132px] h-[286.80px] lg:w-[280px] lg:h-[478px] object-contain"
            src="images/take-coffee.png"
            alt="Image showing take coffee- Moodify"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinTodaySection;
