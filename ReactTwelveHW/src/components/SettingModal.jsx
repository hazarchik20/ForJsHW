import React from 'react'

import { useSetting } from '../context/SettingContext';
const SettingModal = () => {
    const {
        theme,
        size,
        toggleTheme,
        setIsModalOpen,
        t,
        language,
        changeLanguage,
        setFontSize
    } = useSetting();
    const deleteAllSetting = () => {
        toggleTheme("light");
        changeLanguage("uk");
        setFontSize('medium');
    }
    return (
        <div className={`setting-modal ${theme} `}>
            <button
                className="close-btn"
                type="button"
                onClick={() => setIsModalOpen(false)}
            >
                ✕
            </button>
            <h1 className='title'></h1>
            <form className='setting-form'>
                <div className="form-group">
                    <p className="label">{t("theme")}</p>

                    <label>
                        <input
                            type="checkbox"
                            name="theme"
                            value="light"
                            checked={theme === "light"}
                            onChange={(e) => toggleTheme(e.target.value)}
                        />
                        {t("themes")[0]}
                    </label>

                    <label>
                        <input
                            type="checkbox"
                            name="theme"
                            value="dark"
                            checked={theme === "dark"}
                            onChange={(e) => toggleTheme(e.target.value)}
                        />
                        {t("themes")[1]}
                    </label>
                </div>

                <div className="form-group">
                    <label className="label">
                        {t("sizeText")}
                        <select value={size} name="size" onChange={(e) => setFontSize(e.target.value)}>
                            <option value="small">{t("sizes")[0]}</option>
                            <option value="medium">{t("sizes")[1]}</option>
                            <option value="large">{t("sizes")[2]}</option>
                        </select>
                    </label>
                </div>

                <div className="form-group">
                    <label className="label">
                        {t("changeLanguage")}
                        <select value={language} name="language" onChange={(e) => changeLanguage(e.target.value)} >
                            <option value="uk">{t("language")[0]}</option>
                            <option value="en">{t("language")[1]}</option>
                        </select>
                    </label>
                </div>

                <button type="reset" className="reset-btn" onClick={deleteAllSetting}>
                    {t("resetText")}
                </button>
            </form>
        </div>
    )
}

export default SettingModal