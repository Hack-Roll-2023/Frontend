import { useState } from "react";
import reactLogo from "./assets/react.svg";
import woodfishSrc from "../src/woodfish.png";
import Woodfish from "./Woodfish";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  // return <div>电子木鱼Pro</div>;
  return <Woodfish />;
}

export default App;
