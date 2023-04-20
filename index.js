const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const routes = require("./routes");
const animalsRoutes = require("./routes/animals"); 

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");

app.use("/", routes); 
// app.use("/animals", animalsRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


module.exports = app;
