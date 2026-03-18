import React, { useEffect, useState } from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/Api.js";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const loadTasks = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError(err.message || "Could not load tasks.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleCreate = async (task) => {
    setError("");
    try {
      const created = await createTask(task);
      setTasks((prev) => [created, ...prev]);
    } catch (err) {
      setError(err.message || "Failed to create task.");
    }
  };

  const handleUpdate = async (task) => {
    if (!editingTask) return;
    setError("");
    try {
      const updated = await updateTask(editingTask._id, task);
      setTasks((prev) =>
        prev.map((t) => (t._id === updated._id ? updated : t)),
      );
      setEditingTask(null);
    } catch (err) {
      setError(err.message || "Failed to update task.");
    }
  };

  const handleDelete = async (taskId) => {
    setError("");
    try {
      await deleteTask(taskId);
      setTasks((prev) => prev.filter((t) => t._id !== taskId));
    } catch (err) {
      setError(err.message || "Failed to delete task.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4 md:p-8">
      <style>{`
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 60px rgba(239, 68, 68, 0.4), inset 0 0 60px rgba(239, 68, 68, 0.1); }
          50% { box-shadow: 0 0 80px rgba(239, 68, 68, 0.6), inset 0 0 80px rgba(239, 68, 68, 0.2); }
        }
      `}</style>
      <div className="max-w-4xl mx-auto bg-zinc-900/70 backdrop-blur-3xl border-2 border-red-500 rounded-2xl p-6 animate-pulse" style={{animation: 'borderGlow 3s ease-in-out infinite'}}>
        
        <h1 className="text-3xl font-semibold mb-6 text-zinc-200 tracking-tight">
          Task Management
        </h1>
    

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 text-red-300 border border-red-500/20 rounded-lg">
            {error}
          </div>
        )}

        <div className="mb-8">
          <h2 className="font-medium text-md mb-3 text-zinc-400 uppercase tracking-wide">
            {editingTask ? "Edit Task" : "Create Task"}
          </h2>

          <TaskForm
            onSubmit={editingTask ? handleUpdate : handleCreate}
            initialTask={editingTask}
            onCancel={() => setEditingTask(null)}
          />
        </div>

        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-medium text-lg text-zinc-300">
            Your Tasks
          </h2>

          {loading && (
            <span className="text-xs text-zinc-500 animate-pulse">
              Loading...
            </span>
          )}
        </div>

        <TaskList
          tasks={tasks}
          onEdit={setEditingTask}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Home;
