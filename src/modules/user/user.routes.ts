import { Request, Response, Router } from "express";
import { pool } from "../../config/db";
import { createUser } from "./user.controller";

const router = Router();

router.post("/", createUser);

router.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);

    res.status(200).json({
      success: true,
      message: "user retrived successfully!",
      data: result.rows,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

export default router;
