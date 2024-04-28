const CodeUI = ({ code }: { code: string }) => {
  return <div className="code-ui" dangerouslySetInnerHTML={{ __html: code }} />;
};

export default CodeUI;
