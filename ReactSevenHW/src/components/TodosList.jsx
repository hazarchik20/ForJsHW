import React from 'react'
import TodoCard from './TodoCard'
import './TodosList.scss' 
const TodosList = ({todos,onDelete,onToggle, onChangePriority}) => {
  return (
    <div>
     {todos.map((t)=>(
        <TodoCard key={t.id} todo={t} onDelete={onDelete} onToggle={onToggle} onChangePriority={onChangePriority}/>
     ))}
    </div>
  )
}

export default TodosList