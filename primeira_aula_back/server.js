import express from "express";
import routes from "./src/routes/postRoutes.js";

// Criando o nosso servidor com o express.
const app = express();

routes(app);

// Porta para conectar ao servidor.
app.listen(3000, () => {
  console.log("Servidor está escutando...");
});
