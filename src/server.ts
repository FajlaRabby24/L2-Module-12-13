import express, { NextFunction, Request, Response } from "express";
import config from "./config";
const app = express();
const port = config.port;
import initDB, { pool } from "./config/db";
import { logger } from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todos/todo.routes";

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
