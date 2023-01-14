import { createContext, Dispatch, useState } from "react";
import Navbar from "./components/Navbar";
import Woodfish from "./Woodfish";

export const LanguageContext = createContext<{
  language: String;
  setLanguage: Dispatch<React.SetStateAction<string>>;
}>({
  language: "en",
  setLanguage: () => {},
});

function App() {
  const [language, setLanguage] = useState("en");
  const [start, setStart] = useState(false);

  const value = { language, setLanguage };
  return (
    <main className="w-screen h-screen bg-dark-900">
      <LanguageContext.Provider value={value}>
        <Navbar />
      </LanguageContext.Provider>
      <div className="flex flex-col gap-6 justify-center items-center h-screen w-screen">
        {!start ? (
          <button className="btn" onClick={() => setStart(true)}>
            {language === "en" ? "Start" : "开始"}
          </button>
        ) : (
          <div>
            <Woodfish language={language} />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
