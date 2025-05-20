import DocumentMeta from "react-document-meta";

const NotFoundPage = () => {
  const meta: any = {
    title: "404 Page || My App",
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
      <h1 className="text-black text-6xl">404 Page</h1>
    </DocumentMeta>
  );
};

export default NotFoundPage;
