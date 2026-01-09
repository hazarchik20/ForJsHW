import React from 'react'

import { useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AddBook = () => {
  const [books, setBooks] = useLocalStorage("books", []);

  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    description: "",
    cover: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (
      !form.title ||
      !form.author ||
      !form.genre ||
      !form.year ||
      !form.description ||
      !form.cover
    ) {
      setError("Будь ласка, заповніть всі поля");
      return;
    }

    const newBook = {
      id: Date.now(), 
      title: form.title,
      author: form.author,
      genre: form.genre,
      year: Number(form.year),
      description: form.description,
      cover: form.cover
    };

    setBooks((prev) => [...prev, newBook]);

    setForm({
      title: "",
      author: "",
      genre: "",
      year: "",
      description: "",
      cover: ""
    });

    setError("");
  };

  return (
    <main className="add-book">
      <form className="add-book-form" onSubmit={handleSubmit}>
        <h1 className="title">Додати книгу</h1>

        {error && <p className="error">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder="Назва книги"
          value={form.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="author"
          placeholder="Автор"
          value={form.author}
          onChange={handleChange}
        />

        <input
          type="text"
          name="genre"
          placeholder="Жанр"
          value={form.genre}
          onChange={handleChange}
        />

        <input
          type="number"
          name="year"
          placeholder="Рік видання"
          value={form.year}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cover"
          placeholder="URL обкладинки"
          value={form.cover}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Опис книги"
          value={form.description}
          onChange={handleChange}
        />

        <button type="submit">Додати</button>
      </form>
    </main>
  );
};

export default AddBook;