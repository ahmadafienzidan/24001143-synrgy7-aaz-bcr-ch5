// root/routes/user.router.ts
import { Router } from "express";
import { signUp, logIn, logOut, getUsers } from "../services/users.service";

const router = Router();

router.get("/admin", getUsers);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);

export default router;
