import { Router } from "express";
import { createOrder, updateOrder } from "../services/order.service";
import orderIdChecker from "../middlewares/order.idchecker";

const router = Router();

router.post("/", createOrder);
router.put("/:id", orderIdChecker, updateOrder);

export default router;
