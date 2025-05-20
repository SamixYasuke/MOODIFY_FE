import DocumentMeta from "react-document-meta";

const AboutPage = () => {
  const meta: any = {
    title: "About Page || My App",
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
      <h1 className="text-black text-6xl">About Page</h1>
    </DocumentMeta>
  );
};

export default AboutPage;
