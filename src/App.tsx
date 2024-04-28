import React, { useCallback, useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import CodeUI from "./components/CodeUI";

const DEFAULT_HTML = "<h1>My code editor HTML</h1> \n \n \n \n \n";

function App() {
  const [code, setCode] = useState(DEFAULT_HTML);
  const handleOnChange = useCallback(
    (value: string) => {
      console.info(code);
      setCode(value);
    },
    [code],
  );

  return (
    <div className="App">
      <CodeEditor defaultCode={DEFAULT_HTML} handleOnChange={handleOnChange} />
      <CodeUI code={code} />
    </div>
  );
}

export default App;
