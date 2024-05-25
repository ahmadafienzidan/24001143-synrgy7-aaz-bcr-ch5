import { Request, Response } from "express";
import { UsersModel } from "../models/users.model";
import jwt from "jsonwebtoken";

const signUp = async (req: Request, res: Response) => {
  console.log("Request Body:", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }
  try {
    const user = await UsersModel.query().insert({
      name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res.status(201).json(user);
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ error: "Error during signup" });
  }
};

const logIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await UsersModel.query().findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Email or Password not valid" });
    }

    req.session.user = user;
    res.status(200).json({ message: "Login Successfully", user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Error during login" });
  }
};

const logOut = async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).json({ error: "Error during logout" });
      }
      res.status(200).json({ message: "Logout Successfully" });
    });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({ error: "Error during logout" });
  }
};
// const logIn = async (req: Request, res: Response) => {
//   const { email, password } = req.body;
//   try {
//     const user = await UsersModel.query().findOne({ email });
//     if (!user || user.password !== password) {
//       return res.status(400).json({ error: "Email or Password not Valid" });
//     }
//     res.status(200).json({ message: "Login Successfully", user });
//   } catch (error) {
//     console.error("Error during login:", error);
//     res.status(500).json({ error: "Error during login" });
//   }
// };

// const logOut = async (req: Request, res: Response) => {
//   try {
//     res.status(200).json({ message: "Logout Successfully" });
//   } catch (error) {
//     console.error("Error during logout:", error);
//     res.status(500).json({ error: "Error during logout" });
//   }
// };

const getUsers = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email !== "afienzidan@gmail.com" || password !== "sayaadmin") {
    return res.status(403).json({ error: "Access forbidden: Invalid credentials" });
  }
  try {
    const users = await UsersModel.query();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Error fetching users" });
  }
};

export { signUp, logIn, logOut, getUsers };
