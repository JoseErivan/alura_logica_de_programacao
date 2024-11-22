import { MongoClient } from "mongodb";
// Função para conexão com o banco de dados mongodb.
export default async function conectarAoBanco(stringConexao) {
  let mongoClient;

  try {
    // Criando o mongo cliente com a string de conexão do banco.
    mongoClient = new MongoClient(stringConexao);
    console.log("Conectando ao cluster do banco de dados...");
    // Conectando ao banco de dados com o cliente criado.
    await mongoClient.connect();
    console.log("Conectado ao MongoDB Atlas com sucesso!");
    return mongoClient;
  } catch (erro) {
    // Caso aconteça algum erro de conexão, temos uma mensagem padrão e o erro específico.
    console.error("Falha na conexão com o banco!", erro);
    process.exit();
  }
}
