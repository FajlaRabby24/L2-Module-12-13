import express, { Request, Response } from "express";
import config from "./config";
import initDB from "./config/db";
import { logger } from "./middleware/logger";
import { authRoutes } from "./modules/auth/auth.routes";
import { todoRoutes } from "./modules/todos/todo.routes";
import { userRoutes } from "./modules/user/user.routes";
const app = express();
const port = config.port;

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

// auth routes
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
