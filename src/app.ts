import express, { Request, Response } from "express";
import initDB from "./config/db";
import { logger } from "./middleware/logger";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todos/todo.routes";
import { userRoutes } from "./modules/user/user.routes";
const app = express();

// parser
app.use(express.json());

initDB();

app.get("/", logger, (req: Request, res: Response) => {
  res.send("Hello World! Next");
});

// TODO -> user crud

app.use("/users", userRoutes);

// TODO - todos crud
app.use("/todos", todoRoutes);

// TODO - auth routes
app.use("/auth", authRoutes);

export default app;
