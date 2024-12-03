<<<<<<< HEAD
import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} from "../controllers/bookController";
=======
// src/routes/bookRoutes.ts
import { Router } from "express";
import { getAllBooks, addBook } from "../controllers/bookController";
>>>>>>> 98255963902351c7f32bb23488637188827a2905

const router = Router();

router.get("/books", getAllBooks);
<<<<<<< HEAD
router.get("/books/:id", getBookById);
router.post("/books", addBook);
router.put("/books/:id", updateBook);
router.delete("/books/:id", deleteBook);
=======
router.post("/books", addBook);
>>>>>>> 98255963902351c7f32bb23488637188827a2905

export default router;
