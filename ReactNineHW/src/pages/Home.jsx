import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='home-wrapper'>
        <h2 className='title'>Ласкаво просимо до бібліотеки</h2>
        <p className='subtitle'>Ваша персональна колекція української літератури</p>
        <p className='description'>Тут ви знайдете найркащі твори укрїнської класики. Переглядайте каталог, читайте описи книг, та додавайте нові книги до колекції</p>
        <div className="link-wrapper">
            <Link to="/books" className="btn-primary">переглянути каталог</Link>
        </div>
    </main>
  )
}

export default Home