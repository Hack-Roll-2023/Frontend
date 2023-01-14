import { useEffect, useState, useRef } from "react";
import woodfishSrc from "../src/woodfish.png";

const Woodfish = () => {
  //const [clicked, setClicked] = useState<boolean>(false);
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0.1);
  const [cssStr, setCssStr] = useState("w-96 h-96");

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => {
    console.log("clicked");
    console.log(timeLeft);
    timeoutRef.current = setTimeout(() => {
      setCssStr("w-96 h-96");
    }, 100);
    setCssStr("w-80 h-80");
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [counter]);

  return (
    <img
      src={woodfishSrc}
      alt="woodfish"
      className={cssStr}
      onClick={() => setCounter(counter + 1)}
    />
  );
};

export default Woodfish;
