import React from 'react'
import { useSetting } from '../context/SettingContext';

const Main = () => {
    const {theme,t} = useSetting();
  return (
    <main className={`main ${theme} `}>
        <h1>{t("text")}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas expedita culpa aliquid amet architecto eius nihil aliquam excepturi quia a officia, laboriosam nemo, cupiditate ipsam itaque quas, ut ipsum.</p>
    </main>
  )
}

export default Main