import React from 'react'

const MiniBlog = () => {
  return (
    <div className="post-card">
        <h2>Мій перший блог-пост</h2>
        <p>Сьогодні я почав вивчати React і вже створив свій перший компонент!</p>
        <img src="./src/images/blog.png" alt="Blog" />

        <ul>
            <li>React</li>
            <li>JSX</li>
            <li>Frontend</li>
        </ul>

        <a href="https://react.dev/">Документація React</a>
    </div>
  )
}

export default MiniBlog