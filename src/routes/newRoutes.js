import { Router } from "express";
import { messages } from "./indexRoutes.js";
const newRouter = Router();

newRouter
  .get("/", (req, res) => {
    res.render("form", { title: "add new message" });
  })
  .post("/", (req, res) => {
    const { messageUser, messageText } = req.body;
    messages.push({ text: messageText, user: messageUser, added: new Date() });

    res.redirect("/");
  });

export default newRouter;
