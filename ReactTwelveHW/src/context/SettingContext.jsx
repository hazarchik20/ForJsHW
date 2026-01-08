import {  createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { translations } from "../data/translations";

const SettingContext = createContext()
export const SettingProvider=({children}) =>{

    const [theme, setTheme] = useState("light");
    const toggleTheme = () => 
        setTheme((prev) => (prev === "light" ? "dark" : "light"));

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const [language, setLanguage] = useLocalStorage("lang", "uk");
    const t = (key) => translations[language]?.[key] ?? key;
    const changeLanguage = (lang) => {
        if (translations[lang]) {
            setLanguage(lang); 
        }
    };

    const [size, setFontSize ]= useState("medium") 

    const value = {
        theme,
        toggleTheme,
        isModalOpen,
        setIsModalOpen,
        language,
        t,
        changeLanguage,
        size,
        setFontSize
    }

    return(
        <SettingContext.Provider value={value}>
            {children}
        </SettingContext.Provider>
    )
}
export const useSetting = () => {
    const context = useContext(SettingContext);
    if (!context) throw new Error("SettingContext must be used within SettingProvider");
    return context;
};