const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || "8888";

//Settings for Express app
app.set("views", path.join(__dirname, "views")); 
app.set("view engine", "pug");

//Set up folder for static files (e.g. CSS, client-side JS, images)
app.use(express.static(path.join(__dirname, "public")));

//SET UP PAGE ROUTES
app.get("/", (request, response) => {
  response.render("index", { title: "ShopPerfume" });
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
})