import { html } from "@codemirror/lang-html";
import { githubDark } from "@uiw/codemirror-theme-github";
import { useCodeMirror } from "@uiw/react-codemirror";
import { useRef } from "react";

const CodeEditor = ({
  defaultCode,
  handleOnChange,
}: {
  defaultCode: string;
  handleOnChange: (value: string) => void;
}) => {
  const editor = useRef(null);

  useCodeMirror({
    value: defaultCode,
    container: editor.current,
    extensions: [
      {
        extension: [html()],
      },
    ],
    onChange: handleOnChange,
    theme: {
      extension: [githubDark],
    },
    minHeight: "300px",
  });

  return <div className="code-editor" ref={editor} />;
};

export default CodeEditor;
