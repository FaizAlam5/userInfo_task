import { Router } from "express";
import {
  getAllTask,
  getTaskById,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";
let taskRoute = Router();

taskRoute.get("/", getAllTask);
taskRoute.get("/:id", getTaskById);
taskRoute.post("/", createTask);
taskRoute.put("/:id", updateTask);
taskRoute.delete("/:id", deleteTask);

export default taskRoute;
