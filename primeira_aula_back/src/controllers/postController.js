import {
  getTodosPosts,
  criarPost,
  atualizarPost,
} from "../models/postModel.js";
import fs from "fs";
import gerarDescricaoComGemini from "../services/geminiService.js";
// Criando função para listar todos os meus dados de posts.
export async function listarPosts(req, res) {
  // Chama função para econtrar todos os posts.
  const posts = await getTodosPosts();
  // Enviando uma resposta HTML com status e corpo em JSON.
  res.status(200).json(posts);
}

// Criando função para adicionar dados ao meu banco.
export async function postarNovoPost(req, res) {
  // Pegando os dados do post no body da requisição.
  const novoPost = req.body;
  try {
    const postCriado = await criarPost(novoPost); // Utilizando a função para criar o post.
    res.status(200).json(postCriado); // Retornando o post criado para o usuário.
  } catch (error) {
    // Imprimindo o erro caso não consiga criar o post.
    console.error(error.message);
    res.status(500).json({ erro: "Falha na requisição." });
  }
}

// Criando função para adicionar imagens ao meu banco.
export async function uploadImg(req, res) {
  // Criando um post para colocar a imagem.
  const novoPost = {
    descricao: "",
    imgUrl: req.file.originalname,
    alt: "",
  };
  try {
    const postCriado = await criarPost(novoPost); // Utilizando a função para criar o post.
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado); // Retornando o post criado para o usuário.
  } catch (error) {
    // Imprimindo o erro caso não consiga criar o post.
    console.error(error.message);
    res.status(500).json({ erro: "Falha na requisição." });
  }
}

export async function atualizarNovoPost(req, res) {
  const id = req.params.id;
  const imgUrl = `http://localhost:3000/${id}.png`;
  try {
    const imageBuffer = fs.readFileSync(`uploads/${id}.png`);
    const descricao = await gerarDescricaoComGemini(imageBuffer);
    const postAtualizado = {
      imgUrl: imgUrl,
      descricao: descricao,
      alt: req.body.alt,
    };
    const postAtualizadoRetornado = await atualizarPost(id, postAtualizado);
    res.status(200).json(postAtualizadoRetornado);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ erro: "Falha de requisição." });
  }
}
