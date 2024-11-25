import express from "express";
import routes from "./src/routes/postRoutes.js";

// Criando o nosso servidor com o express.
const app = express();

app.use(express.static("uploads"));
routes(app);

// Porta para conectar ao servidor.
app.listen(3000, () => {
  console.log("Servidor está escutando...");
});
