import { Request, Response } from "express";
import { userServices } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email } = req.body;
    const result = await userServices.createUser(name, email);
    console.log(result.rows[0]);

    res.status(201).json({
      success: true,
      message: "Data inserted",
      data: result.rows[0],
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
