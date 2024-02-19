import { Router } from "express";
import {
  getTaskByUsers,
} from "../controllers/task_user.controller.js";
let myRoute = Router();

myRoute.get("/",getTaskByUsers)

export default myRoute;