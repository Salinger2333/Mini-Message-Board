import express from "express";
import newRouter from "./routes/newRoutes.js";
import indexRouter from "./routes/indexRoutes.js";
import path from "node:path";
import "dotenv/config";
import { neon } from "@neondatabase/serverless";


const sql = neon(process.env.DATABASE_URL);
const result = await sql`SELECT version()`;
console.log(result[0]);
const app = express();

const viewsPath = path.join(import.meta.dirname, "views");
const assetsPath = path.join(import.meta.dirname, "../public");

app.set("views", viewsPath);
app.set("view engine", "ejs");

app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);
app.use("/new", newRouter);

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
