import express from "express";
import authRoutes from "../src/routes/authRoutes";
import bookRoutes from "../src/routes/bookRoutes";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(authRoutes);
app.use(bookRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
