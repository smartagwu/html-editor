import React, { useCallback, useState } from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import CodeUI from "./components/CodeUI";

const DEFAULT_HTML = `
<form id="hs_forms" action="" method="post">
  <h1>Sign up</h1>
  <label for="hs-email">
    <span>Email address</span>
    <input type="email" name="email" id="hs-email">
  </label>
  <button type="submit">Submit</button>
</form>

`;

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
