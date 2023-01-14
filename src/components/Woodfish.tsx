import { useEffect, useState, useRef, useContext } from "react";
import { LanguageContext } from "../App";
import audio from "../assets/woodfish_sound.mp3";

export default function Woodfish({ skin }: { skin: string }) {
    //const [clicked, setClicked] = useState<boolean>(false);
    const { language } = useContext(LanguageContext);
    const [counter, setCounter] = useState(0);
    const [cssStr, setCssStr] = useState("fixed w-96 h-96");
    const [meritDisplay, setMeritDisplay] = useState(false);

    const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
    const timeoutRef_merit = useRef<ReturnType<typeof setTimeout>>();
    const woodfishAudio = new Audio(audio);

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
            }, 450);
            return () => {
                clearTimeout(timeoutRef_merit.current);
            };
        }
    }, [counter]);

    return (
        <div className="flex justify-center items-center">
            <div>
                {meritDisplay && (
                    <div className="absolute left-1/3 top-1/3 animate-fade-in-down text-3xl font-chinese">
                        {language === "en" ? "Merit +1" : "功德 +1"}
                    </div>
                )}
            </div>
            <div className="flex flex-col gap-6 justify-center items-center select-none">
                <img
                    src={skin}
                    alt="woodfish"
                    className={cssStr}
                    onClick={() => {
                        setCounter(counter + 1);
                        setMeritDisplay(true);
                        woodfishAudio.play();
                    }}
                />
            </div>
            <p className="fixed bottom-10 text-3xl font-chinese">
                {language === "en" ? "Current merit" : "当前功德"}: {counter}
            </p>
        </div>
    );
}
