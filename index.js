const express= require('express');

const path = require('path')

const publicPath = path.join(__dirname, "public");
const app = express();

app.set("view engine", "ejs");

// app.use(express.static(publicPath));

app.get("", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, res) => {
  const user = {
    name: "Ali",
    skills: ["React Natuve", "Flutter", "Node", "JavaScript", "Express"],
  };
  res.render("profile", { user });
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/notFound.html`);
});

app.listen(5000);

