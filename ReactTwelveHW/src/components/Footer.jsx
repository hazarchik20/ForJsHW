import React from 'react'
import { useSetting } from '../context/SettingContext';

const Footer = () => {
    const {theme, language, t ,size} = useSetting();
  return (
    <footer className={`footer ${size}`}>
      <div > &copy;{t("footer")[0]}</div>
      <div >{t("footer")[1]}{language==="uk"? t("language")[0] : t("language")[1]}</div>
    </footer>
  )
}

export default Footer