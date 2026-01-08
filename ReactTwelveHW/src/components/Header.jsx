import { FiSettings } from "react-icons/fi";
import { useSetting } from '../context/SettingContext';
import SettingModal from "./SettingModal";

const Header = () => {
    const {
        isModalOpen,
        theme,
        size,
        setIsModalOpen,
        t
        } = useSetting();
  return (
    <header className={`header ${size} `}>
        {isModalOpen && <SettingModal/>}
        <button onClick={ () => setIsModalOpen(true)}>
            <FiSettings className='setting-btn' size={20} />
        </button>
        <h1 className={`title ${size} `}>{t("headerText")}</h1>
        <button className={`login-btn ${size} `} onClick={()=>{alert(String(t("alert")))}}>{t("login")}</button>
    </header>
  )
}

export default Header