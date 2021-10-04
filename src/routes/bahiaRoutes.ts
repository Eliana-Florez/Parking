import { Router, Request, Response } from "express";

import Post from "../models/bahiaParqueadero";

class facturasRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public async getPosts(req: Request, res: Response): Promise<void> {

    const post = await Post.find();

    res.json({Post: post});
  }

  public async postPosts(req: Request, res: Response): Promise<void> {
    const {codParqueadero, sectorParqueadero, estadoParqueadero} = req.body;
    const newPost = new Post({codParqueadero, sectorParqueadero, estadoParqueadero});
    await newPost.save();

    res.json({status: res.status, data: newPost});
  }

  public async putPosts(req: Request, res: Response): Promise<void> {

    const { codParqueadero } = req.body;

    const post = await Post.findOneAndUpdate({codParqueadero}, req.body);

    res.json({status: res.status, data: post});
  }

  public async deletePosts(req: Request, res: Response): Promise<void> {
    const { codParqueadero } = req.body;
    const post = await Post.findOneAndRemove({codParqueadero});
    res.json({status: res.status, data: post});
  }


  routes() {
    this.router.get("/", this.getPosts);
    this.router.post("/", this.postPosts);
    this.router.put("/", this.putPosts);
    this.router.delete("/", this.deletePosts);
  }
}

const facturaRoutes = new facturasRoutes();

export default facturaRoutes.router;
