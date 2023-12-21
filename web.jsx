import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
 const [todos, setTodos] = useState([
    { id: 1, title: 'Buy milk', completed: false },
    { id: 2, title: 'Plan party', completed: false },
 ]);

 const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    setTodos([...todos, newTodo]);
 };

 const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
 };

 const toggleCompleted = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
 };

 return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact>
          <TodoForm addTodo={addTodo} />
          <TodoList todos={todos} removeTodo={removeTodo} toggleCompleted={toggleCompleted} />
        </Route>
        <Route path="/about">
          <h2>About</h2>
        </Route>
      </div>
    </Router>
 );
}

function TodoForm({ addTodo }) {
 const [title