import DocumentMeta from "react-document-meta";
import HeroSection from "../components/HeroSection";
import MoodPlanningSection from "../components/MoodPlanningSection";

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
      </div>
    </DocumentMeta>
  );
};

export default Home;
