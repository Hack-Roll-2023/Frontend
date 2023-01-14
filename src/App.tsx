import { useState } from "react";
import reactLogo from "./assets/react.svg";
import woodfishSrc from "../src/woodfish.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // return <div>电子木鱼Pro</div>;
  return (
    <img
      src={woodfishSrc}
      alt="woodfish"
      className="w-96 h-96 hover:w-80 hover:h-80"
    />
  );
}

export default App;
