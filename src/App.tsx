import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm.tsx';
import { useState } from 'react';
import Task from './components/Task/Task.tsx';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Finish the homework' },
    { id: '2', text: 'Get the kids to the New Year Yeti Show' },
    { id: '3', text: 'Do online studies at Attractor School' },
  ]);

  const [currentTask, setCurrentTask] = useState('');

  const addTask = () => {
    if (currentTask.trim()) {
      const newAddedTask = {
        id: String(new Date()),
        text: currentTask,
      };
      setTasks((prevTasks) => [...prevTasks, newAddedTask]);
      setCurrentTask('');
    }
  };

  const deleteTask = (id: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <AddTaskForm addTask={addTask} currentTask={currentTask} setCurrentTask={setCurrentTask} />
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default App;
