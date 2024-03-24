import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); // State for new task input

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks(prevTasks => [...prevTasks, newTask]); // Add new task to tasks array
      setNewTask(""); // Clear the new task input
    }
  };

  const deleteTask = (indexToRemove) => {
    setTasks(prevTasks => prevTasks.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <h1>To Do</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}
              <button onClick={() => deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
        <input 
          type="text" 
          value={newTask} 
          onChange={(e) => setNewTask(e.target.value)} 
          placeholder="Add a new task"
          class="input-container"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
}

export default TodoList;
