import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import CssModulesTest from "./components/CssModulesTest";
import TailwindTest from "./components/TailwindTest";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="flex justify-center items-center">
        <a href="https://webpack.js.org/" target="_blank">
          <img src="/webpack.svg" className="logo" alt="Webpack logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Webpack + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p className="mt-4">
          Edit <code>src/App.tsx</code> to see the changes.
        </p>
      </div>
      <p className="read-the-docs mb-4">Click on the Webpack and React logos to learn more</p>
      <CssModulesTest />
      <TailwindTest />
    </div>
  );
}

export default App;
