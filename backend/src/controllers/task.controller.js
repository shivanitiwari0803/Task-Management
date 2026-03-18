import Task from "../models/TaskModel.js";

const createError = (status, message) => {
    const err = new Error(message);
    err.status = status;
    return err;
};

// GET all tasks
export const getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (err) {
        next(createError(500, err.message || "Failed to load tasks"));
    }
};

// CREATE new tasks
export const createTask = async (req, res, next) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        if (err.name === "StrictModeError") {
            return next(createError(400, "Field does not exist in Task model."));
        }
        next(createError(400, err.message || "Invalid task data"));
    }
};

// UPDATE tasks
export const updateTask = async (req, res, next) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true, strict: "throw" }
        );
        if (!updatedTask) {
            return next(createError(404, "Task not found"));
        }
        res.status(200).json(updatedTask);
    } catch (err) {
        if (err.name === "StrictModeError") {
            return next(createError(400, "Field does not exist in Task model."));
        }
        next(createError(400, err.message || "Unable to update task"));
    }
};

// DELETE tasks
export const deleteTask = async (req, res, next) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if (!deletedTask) {
            return next(createError(404, "Task not found"));
        }
        res.status(200).json({ message: "Task deleted" });
    } catch (err) {
        next(createError(400, err.message || "Unable to delete task"));
    }
};