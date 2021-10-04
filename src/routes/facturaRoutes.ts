import { Router, Request, Response } from "express";

import Post from "../models/Factura";

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
    const {codFactura, fecha, horaEntrada, horaSalida, totalPagar} = req.body;
    const newPost = new Post({codFactura, fecha, horaEntrada, horaSalida, totalPagar});
    await newPost.save();

    res.json({status: res.status, data: newPost});
  }

  public async putPosts(req: Request, res: Response): Promise<void> {

    const { codFactura } = req.body;

    const post = await Post.findOneAndUpdate({codFactura}, req.body);

    res.json({status: res.status, data: post});
  }

  public async deletePosts(req: Request, res: Response): Promise<void> {
    const { codFactura } = req.body;
    const post = await Post.findOneAndRemove({codFactura});
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
