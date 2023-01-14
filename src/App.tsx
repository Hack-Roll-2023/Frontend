import { createContext, Dispatch, useState } from "react";
import Navbar from "./components/Navbar";
import Woodfish from "./components/Woodfish";
import Webcam from "./components/Webcam";
import woodfishDefaultSrc from "./assets/woodfish.png";
import woodfishWoodSrc from "./assets/woodfish-wood.png";
import woodfishLeopardSrc from "./assets/woodfish-leopard.png";
import woodfishCNYSrc from "./assets/woodfish-cny.png";

export const LanguageContext = createContext<{
    language: String;
    setLanguage: Dispatch<React.SetStateAction<string>>;
}>({
    language: "en",
    setLanguage: () => {},
});

function WoodfishPanel() {
    const [skin, setSkin] = useState(woodfishDefaultSrc);
    const [skinArray, setSkinArray] = useState([woodfishDefaultSrc, woodfishWoodSrc, woodfishLeopardSrc, woodfishCNYSrc]);
    return (
        <div className="flex justify-center items-center">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 left-10 fixed cursor-pointer"
                onClick={() => {
                    const skin = skinArray.pop();
                    setSkin(skin!);
                    setSkinArray([skin!, ...skinArray]);
                }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

            <Woodfish skin={skin} />
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-12 h-12 right-10 fixed cursor-pointer"
                onClick={() => {
                    const skin = skinArray.shift();
                    setSkin(skin!);
                    setSkinArray([...skinArray, skin!]);
                }}
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
        </div>
    );
}

function App() {
    const [language, setLanguage] = useState("en");
    const [start, setStart] = useState(false);

    const value = { language, setLanguage };
    return (
        <main className="w-screen h-screen bg-dark-900">
            <LanguageContext.Provider value={value}>
                <Navbar />
                <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
                    {!start ? (
                        <button className="btn" onClick={() => setStart(true)}>
                            {language === "en" ? "Start" : "开始"}
                        </button>
                    ) : (
                        <>
                            <WoodfishPanel />
                            <Webcam />
                        </>
                    )}
                </div>
            </LanguageContext.Provider>
        </main>
    );
}

export default App;
