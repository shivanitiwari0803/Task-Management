import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (!tasks.length) {
    return <div className="text-center py-8 text-gray-500">No tasks yet. Add your first task.</div>;
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem key={task._id || task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;
