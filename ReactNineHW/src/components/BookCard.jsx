import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, isDetail}) => {
    const {id, title, author, genre, year, cover } = book;
    return (
        <div className='book-card'>
            <div className="img-wrapper">
                <img src={cover} alt={title} />
            </div>
            <h2 className='title'>{title}</h2>
            <p className='author'>{author}</p>
            <div className="temp-wrapper">
                <div className="genre-wrapper">
                    <p>{genre}</p>
                </div>
                <p>{year}</p>
            </div>
            
            <Link to={`/details/${id}`} className="btn-primary" >Детальніше →</Link>
        </div>
    )
}

export default BookCard