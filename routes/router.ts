import { Router } from "express";
import carRouter from "./car.router";
import userRouter from "./users.router";
import orderRouter from "./order.router";

const router = Router();

router.use("/cars", carRouter);
router.use("/auth", userRouter);
router.use("/orders", orderRouter);

export default router;
