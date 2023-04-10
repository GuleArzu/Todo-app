import './App.css';
import React, { useState } from 'react';
function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);
  const [editId, seteditId] = useState(0);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTodo = todos.find((i) => i.id === editId)
      const updatedTodos = todos.map((t) => t.id === editTodo.id 
       ? (t = { id: t.id, todo }) 
       : t

      );
      settodos(updatedTodos);
      seteditId(0);
    }
     else
     {
    if (todo !== "") {
      settodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
      settodo("");
    }
  }
    settodo("");
  };
  const handleDelete = (id) => {
    const deltodo = todos.filter((to) => to.id !== id)
    settodos([...deltodo])
  };
  const handleEdit = (id) => {
    const edit = todos.find((i) => i.id === id);
    settodo(edit.todo);
    seteditId(id);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Todo List App</h1>
        <form className='todoform' onSubmit={handleSubmit}>
          <input type='text' value={todo} onChange={(e) => settodo(e.target.value)} />
          <button type='submit'> {editId ? "Edit" : "Add"}</button>
        </form>

        <ul className='utodo'>
          {
            todos.map((t) => (

              <li className='single'>
                <span className='singletxt' key={t.id} >{t.todo}</span>
                <button onClick={() => handleEdit(t.id)}>Edit</button>
                <button onClick={() => handleDelete(t.id)}>Delete</button>
              </li>

            ))
          }

        </ul>
      </div>

    </div>
  );
}

export default App;
