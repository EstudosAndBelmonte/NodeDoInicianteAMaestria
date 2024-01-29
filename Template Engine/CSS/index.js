const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.get("/dashboard", (req, res) => {
  const items = ["Item a", "Item b", "Item C"];
  res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
  const post = {
    title: "Aprender Node.js",
    category: "JavaScript",
    body: "Este artigo vai te ajudar a aprender Node.js....",
    comments: 4,
  };

  res.render("blogpost", { post });
});

app.get("/blog", (req, res) => {
  const posts = [
    {
      title: "Aprender Node.js",
      category: "Javascript",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Aprender PHP",
      category: "PHP",
      body: "Teste",
      comments: 4,
    },
    {
      title: "Aprender Python",
      category: "Python",
      body: "Teste",
      comments: 4,
    },
  ];

  res.render("blog", { posts });
});
app.get("/", (req, res) => {
  const user = {
    name: "Matheus",
    surname: "Battisti",
    age: 30,
  };
  const palavra = "teste";
  const auth = true;
  res.render("home", { user: user, palavra, auth });
});

app.listen(3000, () => {
  console.log("App funcionando!");
});
