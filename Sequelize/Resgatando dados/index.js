const express = require("express");
const exphbs = require("express-handlebars");
const conn = require("./db/conn");
const User = require("./Model/User");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/users/create", (req, res) => res.render("adduser"));

app.post("/users/create", async (req, res) => {
  const name = req.body.name;
  const occupation = req.body.occupation;
  let newsletter = req.body.newsletter;

  if (newsletter === "on") {
    newsletter = true;
  }

  await User.create({ name, occupation, newsletter });

  res.redirect("/");
});

app.get("/user/:id", async (req, res) => {
  const id = req.params.id;
  const user = await User.findOne({ raw: true, where: { id: id } });

  res.render("userview", { user });
});

app.get("/", async (req, res) => {
  const user = await User.findAll({ raw: true });
  res.render("home");
});

conn
  .sync()
  .then(() => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
