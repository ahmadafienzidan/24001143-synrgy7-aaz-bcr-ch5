import { Request, Response, NextFunction } from "express";
import { OrdersModel } from "../models/orders.model";

const orderIdChecker = async (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  try {
    const order = await OrdersModel.query().findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order tidak ditemukan" });
    }
    next();
  } catch (error) {
    console.error("Error saat memeriksa order ID:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat memeriksa order ID" });
  }
};

export default orderIdChecker;
