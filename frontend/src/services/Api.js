import axios from "axios";

// base URL of backend
const API = axios.create({
  baseURL: "http://localhost:3000/api",
});

// GET all tasks
export const getTasks = async () => {
  try {
    const res = await API.get("/tasks");
    return res.data;
  } catch (err) {
    throw err.response?.data || { message: "API Error" };
  }
};

// CREATE task
export const createTask = async (task) => {
  const res = await API.post("/tasks", task);
  return res.data;
};

// UPDATE task
export const updateTask = async (id, task) => {
  const res = await API.put(`/tasks/${id}`, task);
  return res.data;
};

// DELETE task
export const deleteTask = async (id) => {
  const res = await API.delete(`/tasks/${id}`);
  return res.data;
};
