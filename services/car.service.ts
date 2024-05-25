import { Request, Response } from "express";
import { CarsModel } from "../models/carlist.model";

const getCars = async (req: Request, res: Response) => {
  try {
    const results = await CarsModel.query();
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({ error: "Error while fetching cars" });
  }
};

const getCarsById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const results = await CarsModel.query().findById(id);
    if (!results) {
      return res.status(404).json({ error: "ID not Found" });
    }
    res.status(200).json(results);
  } catch (error) {
    console.error("Error fetching car by ID:", error);
    res.status(500).json({ error: "Error while fetching car by ID" });
  }
};

const addCar = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "File not provided" });
  }

  const { name, rent_cost, size } = req.body;
  const image = req.file.filename;

  try {
    const newCar = await CarsModel.query().insert({
      name,
      rent_cost: parseInt(rent_cost, 10),
      size,
      image,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).json(newCar);
  } catch (error) {
    console.error("Error adding car:", error);
    res.status(500).json({ error: "Error while adding car" });
  }
};

const updateCar = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).json({ error: "File not provided" });
  }

  const id = parseInt(req.params.id);
  const { name, rent_cost, size } = req.body;
  const image = req.file.filename;
  const validSizes = ["Large", "Medium", "Small"];
  const updatedAt = new Date();

  if (!validSizes.includes(size)) {
    return res.status(400).json({ error: "Size must be Large, Medium, or Small" });
  }
  try {
    const car = await CarsModel.query().findById(id);
    if (!car) {
      return res.status(404).json({ error: "ID not Found, Cannot Update" });
    }
    const updatedCar = await CarsModel.query().patchAndFetchById(id, {
      name,
      rent_cost,
      size,
      image,
      updated_at: updatedAt,
    });
    res.status(200).json({ message: "Car Updated Successfully!", car: updatedCar });
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({ error: "Error while Updating Car" });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const car = await CarsModel.query().findById(id);

    if (!car) {
      return res.status(404).json({ error: "ID not Found, Cannot Delete" });
    }

    await CarsModel.query().deleteById(id);
    res.status(200).json({ message: "Car Deleted Successfully!" });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({ error: "Error while Deleting Car" });
  }
};

export { getCars, getCarsById, addCar, deleteCar, updateCar };
