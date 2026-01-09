import React from 'react'
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({onLogIn, onEmail}) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const validationFunction = () => {
        const emailValue = emailRef.current.value.trim();
        const passwordValue = passwordRef.current.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailValue || !passwordValue) {
            setError("Заповніть всі поля");
            return;
        }
        if (!emailRegex.test(emailValue)) {
            setError("Некоректний email");
            return;
        }
        if (passwordValue.length < 6) {
            setError("Пароль має містити мінімум 6 символів");
            return;
        }
        setError("");
        onLogIn();
        onEmail(email);
        navigate("/books")
    }
    return (
        <main className='login'>
            <h1 className='title'>Вхід до системи</h1>
            <p className='subtitle'> увійдіть щоб додавати книги</p>

            <label>Email</label>
            <input value={email} onChange={(e)=>setEmail(e.target.value)} ref={emailRef} type="email" placeholder='example@gmail,com' />

            <label>Пароль</label>
            <input ref={passwordRef} type="password" placeholder='Введіть пароль' />

            {error && <p className="error">{error}</p>}

            <button onClick={validationFunction}>Увійти</button>
        </main>
    )
}

export default Login