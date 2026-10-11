import DocumentMeta from "react-document-meta";
import HeroSection from "../components/HeroSection";
import MoodPlanningSection from "../components/MoodPlanningSection";
import FaqSection from "../components/FaqSection";
import JoinTodaySection from "../components/JoinTodaySection";

const Home: React.FC = () => {
  const meta: any = {
    title: "Moodify | Home",
    description:
      "Moodify helps you plan tasks that match how you feel. Simple, smart and mood-aware.",
    canonical: "https://moodify-six-sepia.vercel.app/",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
        "twitter:card": "summary_large_image",
        "twitter:title": "Moodify - Your Personal Mood-Based Task Manager",
        "twitter:description":
          "Moodify helps you plan tasks that match how you feel. Simple, smart and mood-aware.",
        "twitter:image":
          "https://moodify-six-sepia.vercel.app/landing_page.png",
      },
      property: {
        "og:type": "website",
        "og:site_name": "Moodify",
        "og:title": "Moodify - Your Personal Mood-Based Task Manager",
        "og:description":
          "Moodify helps you plan tasks that match how you feel. Simple, smart and mood-aware.",
        "og:url": "https://moodify-six-sepia.vercel.app/",
        "og:image": "https://moodify-six-sepia.vercel.app/landing_page.png",
        "og:image:width": "1347",
        "og:image:height": "638",
        "og:image:type": "image/png",
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
