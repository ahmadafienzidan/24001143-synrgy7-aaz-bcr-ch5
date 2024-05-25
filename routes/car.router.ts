import { Router } from "express";
import { getCars, getCarsById, addCar, deleteCar, updateCar } from "../services/car.service";
import carIdChecker from "../middlewares/car.idchecker";
import upload from "../middlewares/upload.handler";

const router = Router();

router.get("/", getCars);
router.get("/:id", carIdChecker, getCarsById);
router.post("/", upload.single("image"), addCar);
router.put("/:id", upload.single("image"), updateCar);
router.delete("/:id", carIdChecker, deleteCar);

export default router;
