import express from "express";
// Criação de um array de objetos para ser o nosso banco de dados.
const posts = [
  {
    id: 1,
    descricao: "Paisagem deslumbrante ao pôr do sol",
    imagem: "https://source.unsplash.com/random/300x200/?sunset,landscape",
  },
  {
    id: 2,
    descricao: "Cachorro fofo fazendo careta",
    imagem: "https://source.unsplash.com/random/300x200/?dog,funny",
  },
  {
    id: 3,
    descricao: "Comida deliciosa e colorida",
    imagem: "https://source.unsplash.com/random/300x200/?food,colorful",
  },
  {
    id: 4,
    descricao: "Citação inspiradora sobre a vida",
    imagem: "https://source.unsplash.com/random/300x200/?quote,inspiration",
  },
  {
    id: 5,
    descricao: "Gato preguiçoso tomando sol",
    imagem: "https://source.unsplash.com/random/300x200/?cat,lazy",
  },
];
// Criando o nosso servidor com o express.
const app = express();
app.use(express.json());
// Porta para conectar ao servidor.
app.listen(3000, () => {
  console.log("Servidor está escutando...");
});
// Endpoint para retornar todos os dados da minha array.
app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});
// Endpoint para retornar um post em específico.
app.get("/posts/:id", (req, res) => {
  const index = buscaPostPorId(req.params.id);
  res.status(200).json(posts[index]);
});
// Função que busca o post com o id específicado.
function buscaPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}
