const express = require("express");
const app = express();
const port = 5000; // variavel ambiente
const path = require("path");
const basePath = path.join(__dirname, "./templates");
const rotas = require("./rotas");

// ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/home.html`);
});
app.use("/contato", rotas);

app.use(function (req, res, next) {
  res.status(404).sendFile(`${basePath}/404.html`);
});
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
