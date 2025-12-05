import express from "express";
import auth from "../../middleware/auth";
import { userControllers } from "./user.controller";

const router = express.Router();

// app.use("/users", userRooutes)

// routes -> controller -> service

router.post("/", userControllers.createUser);

router.get("/", auth(), userControllers.getUser);

router.get("/:id", userControllers.getSingleUser);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

export const userRoutes = router;
