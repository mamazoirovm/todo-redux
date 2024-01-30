import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTodo, toggleTodo } from "../store/todoSlice"
import { Input, Divider } from "antd"
import { Button, Flex } from "antd"

import { RootState } from "../store"
import "../App.css"
const TodoList: React.FC = () => {
  const dispatch = useDispatch()
  const todos = useSelector((state: RootState) => state.todos.todos)
  const [newTodo, setNewTodo] = useState<string>("")

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      dispatch(addTodo(newTodo))
      setNewTodo("")
    }
  }

  const handleToggleTodo = (id: number) => {
    dispatch(toggleTodo(id))
  }

  return (
    <div className="container">
      <h1>Create Todo List</h1>
      <Divider/>
      <Flex gap="small">
        <Input
        style={{width: 350}}
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Create to do"
        />
        <Button onClick={handleAddTodo} type="primary">
       Add 
        </Button>
      </Flex>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => handleToggleTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
