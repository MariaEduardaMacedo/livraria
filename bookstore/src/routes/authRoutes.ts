import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

router.post("/register", register);
router.post("/login", login);

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 98255963902351c7f32bb23488637188827a2905
