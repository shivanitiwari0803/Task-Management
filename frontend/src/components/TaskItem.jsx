import React from "react";

const TaskItem = ({ task, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 p-3 border rounded-md bg-zinc-800">
      <div>
        <div className="font-semibold text-lg text-white">{task.title}</div>
        <div className="text-sm text-gray-400">{task.description}</div>
        <div className="text-xs mt-1 inline-flex px-2 py-1 rounded-full text-white bg-slate-600">
          {task.status}
        </div>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <button onClick={() => onEdit(task)} className="px-2 py-1 rounded bg-yellow-600 text-white hover:bg-yellow-700">
          Edit
        </button>
        <button onClick={() => onDelete(task._id)} className="px-2 py-1 rounded bg-red-700 text-white hover:bg-red-800">
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
