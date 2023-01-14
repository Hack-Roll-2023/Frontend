import { useEffect, useState, useRef } from "react";
import woodfishSrc from "../src/woodfish.png";

const Woodfish = ({ language }: { language: String }) => {
  //const [clicked, setClicked] = useState<boolean>(false);
  const [counter, setCounter] = useState(0);
  const [cssStr, setCssStr] = useState("fixed w-96 h-96");
  const [meritDisplay, setMeritDisplay] = useState(false);

  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const timeoutRef_merit = useRef<ReturnType<typeof setTimeout>>();
  const woodfishAudio = new Audio("/src/woodfish_sound.mp3");

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCssStr("fixed w-96 h-96");
    }, 50);
    setCssStr("fixed w-80 h-80");
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [counter]);

  useEffect(() => {
    if (counter != 0) {
      timeoutRef_merit.current = setTimeout(() => {
        setMeritDisplay(false);
      }, 500);
      return () => {
        clearTimeout(timeoutRef_merit.current);
      };
    }
  }, [counter]);

  return (
    <div>
      <div>
        {meritDisplay && (
          <div className="absolute left-1/3 top-1/3 animate-fade-in-down text-3xl ">
            {language == "en" ? "Merit +1" : "功德 +1"}
          </div>
        )}
      </div>
      <div className="flex flex-col gap-6 justify-center items-center">
        <img
          src={woodfishSrc}
          alt="woodfish"
          className={cssStr}
          onClick={() => {
            setCounter(counter + 1);
            setMeritDisplay(true);
            woodfishAudio.play();
          }}
        />
      </div>
    </div>
  );
};

export default Woodfish;
