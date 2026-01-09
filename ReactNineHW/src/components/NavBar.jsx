import React from 'react'
import { NavLink } from 'react-router-dom'
const NavBar = ({isLogined,setIsLogined,email}) => {
    const links = [
        {to: "/", label: "Home"},
        {to: "/books", label: "Books"},
    ]
    return (
    <nav className="navbar">
        <div className="logo">Бібліотека</div>
        <div className='links-wrapper'>
            {links.map( (link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) => isActive ? "active" : ""}
                    >
                        {link.label}
                    </NavLink>
            ))}
            {!isLogined && <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>Login</NavLink>}
            {isLogined && <NavLink to="/addbook" className={({ isActive }) => isActive ? "active" : ""}>AddBook</NavLink>}
            {isLogined && <p>{email}</p>}
            {isLogined && <button className="logOut-btn" onClick={() => setIsLogined(false)}>Вийти</button>}
        </div>
    </nav>
    )
}

export default NavBar