import React, { useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';
import { booksData } from '../mocks/booksData';
import { Link, useParams } from 'react-router-dom';

const BookDetails = () => {
  

  const {id} = useParams();
  const [localBooks] = useLocalStorage("books", []);
  const allBooks = [...booksData, ...localBooks];

  const currentBook = allBooks.find((book) => book.id === Number(id))
  
  if (!currentBook) return null;

  const { title, author, genre, year, description, cover } = currentBook;

  return (
    <main className="book-details">
      <div className="book-details-card">
        <div className="img-wrapper">
          <img src={cover} alt={title} />
        </div>

        <div className="content">
          <h1 className="title">{title}</h1>
          <p className="author">✍ {author}</p>

          <div className="meta">
            <span className="genre">{genre}</span>
            <span className="year">{year}</span>
          </div>

          <p className="description">{description}</p>
          
          <Link to="/books" className="btn-primary">назад до каталогу</Link>
        </div>
      </div>
    </main>
  );
};



export default BookDetails