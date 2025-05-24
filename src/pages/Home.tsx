import DocumentMeta from "react-document-meta";
import HeroSection from "../components/HeroSection";
import MoodPlanningSection from "../components/MoodPlanningSection";
import FaqSection from "../components/FaqSection";
import JoinTodaySection from "../components/JoinTodaySection";

const Home: React.FC = () => {
  const meta: any = {
    title: "Moodify | Home",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://localhost:5173/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };

  return (
    <DocumentMeta {...meta}>
      <div>
        <HeroSection />
        <MoodPlanningSection />
        <FaqSection />
        <JoinTodaySection />
      </div>
    </DocumentMeta>
  );
};

export default Home;
