const { Router } = require("express");
const newController = require("../controller/newController");
const newRouter = Router();

newRouter
  .get("/", newController.getNewMessages)
  .post("/", newController.newMessage);

export default newRouter;
