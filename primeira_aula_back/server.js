import express from "express";

const app = express();

app.listen(3000, () => {
  console.log("Servidor está escutando...");
});

app.get("/api", (req, res) => {
  res.status(200).send(" Boas vindas ao nosso servidor simples.");
});
