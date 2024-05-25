import { Request, Response, NextFunction } from "express";

const carIdChecker = (req: Request, res: Response, next: NextFunction) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid car ID" });
  }
  next();
};

export default carIdChecker;
