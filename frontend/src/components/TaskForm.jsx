import React, { useState, useEffect } from "react";

const TaskForm = ({ onSubmit, initialTask = null, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title || "");
      setDescription(initialTask.description || "");
      setStatus(initialTask.status || "pending");
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      return;
    }
    onSubmit({ title: title.trim(), description: description.trim(), status });
    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3 bg-zinc-900 p-4 rounded-lg shadow-sm border border-zinc-700">
      <div>
        <label className="block text-sm font-medium text-zinc-200">Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="mt-1 w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Task title"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-200">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mt-1 w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Task description"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-200">Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="mt-1 w-full bg-zinc-800 border border-zinc-700 rounded px-3 py-2 text-zinc-100"
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <div className="flex gap-2 justify-end">
        {onCancel && (
          <button type="button" onClick={onCancel} className="px-3 py-2 rounded border border-zinc-600 text-zinc-300 hover:bg-zinc-800">
            Cancel
          </button>
        )}
        <button type="submit" className="px-3 py-2 rounded bg-amber-600 text-white hover:bg-amber-700">
          {initialTask ? "Update Task" : "Add Task"}
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
