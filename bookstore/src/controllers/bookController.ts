<<<<<<< HEAD
import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRepository";
import { validateBookTitle } from "../helpers/validationHelper";
=======
// src/controllers/bookController.ts

import { Request, Response } from "express";
import { BookRepository } from "../repositories/bookRepository";
import { validateBookTitle } from "../helpers/bookValidationHelper";
>>>>>>> 98255963902351c7f32bb23488637188827a2905

const bookRepository = new BookRepository();

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookRepository.getAllBooks();
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livros" });
  }
};

<<<<<<< HEAD
export const getBookById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const book = await bookRepository.getBookById(Number(id));
    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar livro" });
  }
};

export const addBook = async (req: Request, res: Response) => {
  const { title, subtitle, image, price } = req.body;

=======
export const addBook = async (req: Request, res: Response) => {
  const { title, author, price } = req.body;

  // Validar título do livro
>>>>>>> 98255963902351c7f32bb23488637188827a2905
  if (!validateBookTitle(title)) {
    return res
      .status(400)
      .json({ error: "O título do livro deve ter pelo menos 3 caracteres." });
  }

  try {
<<<<<<< HEAD
    const book = await bookRepository.addBook(title, subtitle, image, price);
=======
    const book = await bookRepository.addBook(title, author, price);
>>>>>>> 98255963902351c7f32bb23488637188827a2905
    res.status(201).json(book);
  } catch (err) {
    res.status(400).json({ error: "Erro ao adicionar livro" });
  }
};
<<<<<<< HEAD

export const updateBook = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, subtitle, image, price } = req.body;

  try {
    const book = await bookRepository.updateBook(
      Number(id),
      title,
      subtitle,
      image,
      price,
    );

    if (!book) {
      return res.status(404).json({ error: "Livro não encontrado" });
    }

    res.status(200).json(book);
  } catch (err) {
    res.status(400).json({ error: "Erro ao atualizar livro" });
  }
};

export const deleteBook = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await bookRepository.deleteBook(Number(id));
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "Erro ao deletar livro" });
  }
};
=======
>>>>>>> 98255963902351c7f32bb23488637188827a2905
