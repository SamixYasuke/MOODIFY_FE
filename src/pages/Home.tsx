import { useState } from "react";
import DocumentMeta from "react-document-meta";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";

const Home = () => {
  const [count, setCount] = useState(0);

  const meta: any = {
    title: "Home Page || My App",
    description: "I am a description, and I can create multiple tags",
    canonical: "http://example.com/path/to/page",
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
