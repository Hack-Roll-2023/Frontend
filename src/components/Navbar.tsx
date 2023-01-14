import { Switch } from "@headlessui/react";
import { useContext } from "react";
import { HideVideoContext, LanguageContext } from "../App";
import LanguageSwitch from "./LanguageSwitch";
import Music from "./Music";

function HideVideoSwitch() {
    const { isHidden, setIsHidden } = useContext(HideVideoContext);
    return (
        <Switch
            checked={isHidden}
            onChange={() => setIsHidden(!isHidden)}
            className="justify-center items-center right-20 fixed inline-flex w-8 h-8 transition-colors duration-200 ease-in-out bg-dark-100 border-4 border-transparent rounded-full cursor-pointer shrink-0"
        >
            {isHidden ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M12 18.75H4.5a2.25 2.25 0 01-2.25-2.25V9m12.841 9.091L16.5 19.5m-1.409-1.409c.407-.407.659-.97.659-1.591v-9a2.25 2.25 0 00-2.25-2.25h-9c-.621 0-1.184.252-1.591.659m12.182 12.182L2.909 5.909M1.5 4.5l1.409 1.409"
                    />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z"
                    />
                </svg>
            )}
        </Switch>
    );
}

export default function Navbar() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="w-full h-12 bg-dark-900 flex justify-center items-center mt-4 fixed">
            <p className="text-3xl font-chinese select-none font-bold">
                {language === "en" ? "Benefactor, welcome to Digital Wooden Fish Pro🙏" : "施主, 欢迎来到电子木鱼Pro🙏"}
            </p>
            <LanguageSwitch />
            <Music />
            <HideVideoSwitch />
        </div>
    );
}
