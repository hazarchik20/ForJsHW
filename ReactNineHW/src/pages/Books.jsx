import React, { useState, useMemo } from "react";
import { booksData, genres } from "../mocks/booksData";
import BookCard from "../components/BookCard";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Books = () => {

  const [currentGenre, setCurrentGenre] = useState("all");
  const [localBooks] = useLocalStorage("books", []);
  const allBooks = [...booksData, ...localBooks];

  const filteredBooks =
    currentGenre === "all"
      ? allBooks
      : allBooks.filter((b) => b.genre === currentGenre);
      
  return (
    <main className="bookList">
      <div>
        <h2 className="title">Каталог книг</h2>

        <div className="filtre-wrapper">
          <label>Фільтр по жанру</label>

          <select
            value={currentGenre}
            onChange={(e) => setCurrentGenre(e.target.value)}
          >
            <option value="all">Усі</option>
            {genres.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>

        <div className="books-wrapper">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((b) => (
              <BookCard key={b.id} book={b} onDetail={false} />
            ))
          ) : (
            <p>Книг за цим жанром не знайдено</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Books;