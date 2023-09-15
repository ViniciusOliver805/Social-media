import {  create, get, getId, update, remove } from "../controllers/post.controller";

const postRoutes = (app) => {
  app.post("/posts", create);
  app.get("/posts", get);
  app.get("/posts/:id", getId);
  app.put("/posts/:id", update);
  app.delete("/posts/:id", remove);



}

export default postRoutes;
