import { Router } from "express";
import {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controller.js";
let userRoute = Router();

userRoute.get("/", getAllUser);
userRoute.get("/:id", getUserById);
userRoute.post("/", createUser);
userRoute.put("/:id", updateUser);
userRoute.delete("/:id", deleteUser);

export default userRoute;
