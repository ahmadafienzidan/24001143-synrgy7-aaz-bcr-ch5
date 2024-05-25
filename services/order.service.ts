import { Request, Response } from "express";
import { OrdersModel } from "../models/orders.model";
import { CarsModel } from "../models/carlist.model";

const createOrder = async (req: Request, res: Response) => {
  const { car_id, start_rent, finish_rent, total_cost } = req.body;

  if (!req.session.user) {
    return res.status(403).json({ error: "Anda harus login untuk membuat order" });
  }

  try {
    const car = await CarsModel.query().findById(car_id);
    if (!car) {
      return res.status(404).json({ error: "Mobil tidak ditemukan" });
    }

    const newOrder = await OrdersModel.query().insert({
      user_id: req.session.user.id,
      car_id,
      start_rent: new Date(start_rent),
      finish_rent: new Date(finish_rent),
      total_cost: parseInt(total_cost, 10),
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).json(newOrder);
  } catch (error) {
    console.error("Error saat membuat order:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat membuat order" });
  }
};

const updateOrder = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { car_id, start_rent, finish_rent, total_cost } = req.body;

  if (!req.session.user) {
    return res.status(403).json({ error: "Anda harus login untuk mengupdate order" });
  }

  try {
    const order = await OrdersModel.query().findById(id);
    if (!order) {
      return res.status(404).json({ error: "Order tidak ditemukan" });
    }

    if (order.user_id !== req.session.user.id) {
      return res.status(403).json({ error: "Anda tidak diizinkan untuk mengupdate order ini" });
    }

    const updatedOrder = await OrdersModel.query().patchAndFetchById(id, {
      car_id,
      start_rent: new Date(start_rent),
      finish_rent: new Date(finish_rent),
      total_cost: parseInt(total_cost, 10),
      updated_at: new Date(),
    });
    res.status(200).json({ message: "Order berhasil diupdate", order: updatedOrder });
  } catch (error) {
    console.error("Error saat mengupdate order:", error);
    res.status(500).json({ error: "Terjadi kesalahan saat mengupdate order" });
  }
};

export { createOrder, updateOrder };
