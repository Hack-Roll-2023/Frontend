import { useContext } from "react";
import { LanguageContext } from "../App";
import LanguageSwitch from "./LanguageSwitch";
import Music from "./Music";

export default function Navbar() {
    const { language, setLanguage } = useContext(LanguageContext);

    return (
        <div className="w-full h-12 bg-dark-900 flex justify-center items-center mt-4 fixed">
            <p className="text-3xl font-chinese select-none">
                {language === "en" ? "Welcome to Digital Wooden Fish Pro" : "施主, 欢迎来到电子木鱼Pro"}
            </p>
            <LanguageSwitch />
            <Music />
        </div>
    );
}
