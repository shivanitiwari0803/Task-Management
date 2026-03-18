import express from "express";
import taskRoutes from "./routes/task.routes.js";
import errorHandler, { notFoundHandler } from "./middlewares/error.middleware.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/tasks", taskRoutes);

app.use(notFoundHandler);
app.use(errorHandler);

export default app;