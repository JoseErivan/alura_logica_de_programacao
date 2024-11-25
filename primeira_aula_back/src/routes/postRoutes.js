import express from "express";
import cors from "cors";
import {
  listarPosts,
  postarNovoPost,
  uploadImg,
  atualizarNovoPost,
} from "../controllers/postController.js";
import multer from "multer";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccessStatus: 200,
};

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  // Para permitir que o servidor interprete requisições com corpo JSON.
  app.use(express.json());
  app.use(cors(corsOptions));

  // Rota para retornar todos os dados da minha array.
  app.get("/posts", listarPosts);
  // Rota para  criar um novo post.
  app.post("/posts", postarNovoPost);
  // Rota para adicionar uma imagem ao banco.
  app.post("/upload", upload.single("imagem"), uploadImg);
  // Rota para atualizar posts.
  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;
