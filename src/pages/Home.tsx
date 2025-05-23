import DocumentMeta from "react-document-meta";

const Home: React.FC = () => {
  const meta: any = {
    title: "Moodify",
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
        <h1>MAIN CONTENT!!!!!!!!!!!</h1>
      </div>
    </DocumentMeta>
  );
};

export default Home;
