import React from 'react';

interface Props {
  task: { id: string; text: string };
  deleteTask: (id: string) => void;
}
const Task: React.FC<Props> = ({ task, deleteTask }) => {
  return (
    <li className="taskList">
      {task.text}
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
};

export default Task;
