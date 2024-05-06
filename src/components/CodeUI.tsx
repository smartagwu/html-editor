const CodeUI = ({ code }: { code: string }) => {
  return <div className="code-ui">
    <section className='center' dangerouslySetInnerHTML={{ __html: code }}></section>
  </div>;
};

export default CodeUI;
