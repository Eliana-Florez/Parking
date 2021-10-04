import { Router, Request, Response } from "express";

import Post from "../models/Vehiculo";

class vehiculosRoutes {
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
    const {placaVehiculo, tipoVehiculo, marcaVehiculo, colorVehiculo} = req.body;
    const newPost = new Post({placaVehiculo, tipoVehiculo, marcaVehiculo, colorVehiculo});
    await newPost.save();

    res.json({status: res.status, data: newPost});
  }

  public async putPosts(req: Request, res: Response): Promise<void> {

    const { placaVehiculo } = req.body;

    const post = await Post.findOneAndUpdate({placaVehiculo}, req.body);

    res.json({status: res.status, data: post});
  }

  public async deletePosts(req: Request, res: Response): Promise<void> {
    const { placaVehiculo} = req.body;
    const post = await Post.findOneAndRemove({placaVehiculo});
    res.json({status: res.status, data: post});
  }


  routes() {
    this.router.get("/", this.getPosts);
    this.router.post("/", this.postPosts);
    this.router.put("/", this.putPosts);
    this.router.delete("/", this.deletePosts);
  }
}

const vehiculoRoutes = new vehiculosRoutes();

export default vehiculoRoutes.router;
