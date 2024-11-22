import express from "express";
import {
  listarPosts,
  postarNovoPost,
  uploadImg,
} from "../controllers/postController.js";
import multer from "multer";

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  // Para permitir que o servidor interprete requisições com corpo JSON.
  app.use(express.json());

  // Rota para retornar todos os dados da minha array.
  app.get("/posts", listarPosts);
  // Rota para  criar um novo post.
  app.post("/posts", postarNovoPost);
  // Rota para adicionar uma imagem ao banco.
  app.post("/upload", upload.single("imagem"), uploadImg);
};

export default routes;
