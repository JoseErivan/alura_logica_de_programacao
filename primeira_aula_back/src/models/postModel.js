import "dotenv/config";
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/db_config.js";

// Criando a conexão com o banco.
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função que retorna todos os posts vindos do nosso banco de dados mongo.
export function getTodosPosts(params) {
  const db = conexao.db("imersao-alura"); // Criando o banco de dados retornado da conexão.
  const colecao = db.collection("posts"); // Acessando os dados do banco de dados.
  return colecao.find().toArray(); // Mudando o formato dos dados retornados para serem disponibilizados.
}

export function criarPost(novoPost) {
  const db = conexao.db("imersao-alura"); // Criando o banco de dados retornado da conexão.
  const colecao = db.collection("posts"); // Acessando os dados do banco de dados.
  return colecao.insertOne(novoPost); // Inserindo o novo objeto no meu banco de dados.
}

export function atualizarPost(id, postAtualizado) {
  const db = conexao.db("imersao-alura"); // Criando o banco de dados retornado da conexão.
  const colecao = db.collection("posts"); // Acessando os dados do banco de dados.
  const objId = ObjectId.createFromHexString(id); // Colocando o id em um objeto que o mongo consiga entender.
  return colecao.updateOne(
    { _id: new ObjectId(objId) },
    { $set: postAtualizado }
  );
}
