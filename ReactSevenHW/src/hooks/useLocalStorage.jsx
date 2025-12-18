import { useEffect, useState } from "react";

export function getFromLocalStorage() {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
}

export function addToLocalStorage(todo) {
  const todos = getFromLocalStorage();
  const updatedTodos = [...todos, todo];
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  return updatedTodos;
}

export function deleteFromLocalStorage(id) {
  const todos = getFromLocalStorage();
  const updatedTodos = todos.filter(todo => todo.id !== id);
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  return updatedTodos;
}

export function toggleFromLocalStorage(id) {
  const todos = getFromLocalStorage();

  const updatedTodos = todos.map(todo =>
    todo.id === id
      ? { ...todo, compleated: !todo.compleated }
      : todo
  );
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  return updatedTodos;
}

export function ChangePriority(id, type) {
    
  const todos = getFromLocalStorage();

  const updatedTodos = todos.map(todo =>
    todo.id === id
      ? { ...todo, priority: type }
      : todo
  );
  localStorage.setItem("todos", JSON.stringify(updatedTodos));
  return updatedTodos;
}

