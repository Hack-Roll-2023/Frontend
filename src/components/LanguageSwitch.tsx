import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { useContext, useEffect, useState } from "react";

import { Switch } from "@headlessui/react";
import { LanguageContext } from "../App";

export default function LanguageSwitch() {
    const { language, setLanguage } = useContext(LanguageContext);

    // not English means is Chinese
    const [english, setEnglish] = useState(true);

    useEffect(() => {
        setLanguage(english ? "en" : "zh");
    }, [english]);

    return (
        <Switch
            checked={english}
            onChange={() => setEnglish(!english)}
            className="justify-center items-center left-10 fixed inline-flex w-5 h-5 transition-colors duration-200 ease-in-out bg-dark-100 border-4 border-transparent rounded-full cursor-pointer shrink-0"
        >
            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                    />
                </svg>
                {english ? <p>{language}</p> : <p>zh</p>}
            </div>
        </Switch>
    );
}
