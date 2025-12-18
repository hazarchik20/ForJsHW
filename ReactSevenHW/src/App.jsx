import { useState, useEffect } from 'react'
import { initialTodos } from "./mocks/todos"
import './App.scss'
import TodosList from './components/TodosList';
import { addToLocalStorage, deleteFromLocalStorage, getFromLocalStorage, toggleFromLocalStorage, ChangePriority } from "./hooks/useLocalStorage";
import DeleteModal from './components/DeleteModal';

function App() {
  const [todos, setTodos] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [sortValue, setSort] = useState("none");
  const [filtreValue, setFiltre] = useState("all");
  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);


  useEffect(() => {

    const Todos = getFromLocalStorage();

    if (Todos.length > 0) {
      setTodos(Todos);
    } else {
      setTodos(initialTodos);
      localStorage.setItem("todos", JSON.stringify(initialTodos));
    }

    const settings = JSON.parse(
      localStorage.getItem("todos_settings")
    );

    if (settings) {
      setSort(settings.sort);
      setFiltre(settings.filter);
    }

  }, [])

  useEffect(() => {
    localStorage.setItem("todos_settings",
      JSON.stringify({
        sort: sortValue,
        filter: filtreValue
      })
    );
  }, [sortValue, filtreValue]);

  const addTodo = (text) => {
    if (!text.trim()) return;

    const newTodo = {
      id: Date.now(),
      text,
      compleated: false,
      priority: "medium"
    }

    const updatedTodos = addToLocalStorage(newTodo)
    setTodos(updatedTodos)
    setTodoText("")
  }

  const deleteTodo = (id) => {
    const updatedTodos = deleteFromLocalStorage(id)
    setTodos(updatedTodos)
  }


  const toggleTodo = (id) => {
    const updatedTodos = toggleFromLocalStorage(id);
    setTodos(updatedTodos);
  };

  const changeTodoPriority = (id, type) => {
    const updatedTodos = ChangePriority(id, type);
    setTodos(updatedTodos);
  };



  const openDeleteModal = (id) => {
    setTodoToDelete(id);
    setIsDeleteModal(true);
  };

  const confirmDelete = () => {
    deleteTodo(todoToDelete);
    setIsDeleteModal(false);
    setTodoToDelete(null);
  };

  const filteredTodos = todos.filter(todo => {
    if (filtreValue === "active") return !todo.compleated;
    if (filtreValue === "completed") return todo.compleated;
    return true;
  });
  const priorityOrder = { high: 3, medium: 2, low: 1 };

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortValue === "priority") {
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    }
    if (sortValue === "not priority") {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    }
    return 0;
  });

  return (
    <div className='main-wrapper'>
      <h1 className='title'>Мої завдання</h1>
      <div className="input-wrapper">
        <input type="text" value={todoText} placeholder='додати нове завдання' onChange={(e) => setTodoText(e.target.value)} />
        <button className='btn' onClick={() => addTodo(todoText)}>додати</button>
      </div>
      <div className="sort-filtre-wrapper">
        <div className="filtre-wrapper">
          <p>Показати:</p>
          <select name="filtre" id="filtre" value={filtreValue} onChange={(e) => setFiltre(e.target.value)}>
            <option value="all">всі</option>
            <option value="active">активні</option>
            <option value="completed">виконані</option>
          </select>
        </div>
        <div className="sort-wrapper">
          <p>Сортувати:</p>
          <select name="sort" id="sort" value={sortValue} onChange={(e) => setSort(e.target.value)}>
            <option value="none">--не сортувати--</option>
            <option value="priority">Важливі спочатку</option>
            <option value="not priority">Неважливі спочатку</option>
          </select>
        </div>
      </div>
      <TodosList todos={sortedTodos} onDelete={openDeleteModal} onToggle={toggleTodo} onChangePriority={changeTodoPriority} />
      {isDeleteModal && (
        <DeleteModal
          onConfirm={confirmDelete}
          onClose={() => setIsDeleteModal(false)}
        />
      )}
    </div>
  )
}

export default App
