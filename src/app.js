import express from "express";

const app = express();

const viewsPath = path.join(import.meta.dirname, "views");
const assetsPath = path.join(import.meta.dirname, "public");

app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(express.static(assetsPath));

app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server is start, listen to 3000 port");
});
