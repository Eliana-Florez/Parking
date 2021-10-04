import { Router, Request, Response } from "express";

import Post from "../models/Usuario";

class postsRoutes {
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
    const { cedulaUser, nombreUser, apellidosUser, telefonoUser, emailUser} = req.body;
    const newPost = new Post({cedulaUser, nombreUser, apellidosUser, telefonoUser, emailUser});
    await newPost.save();

    res.json({status: res.status, data: newPost});
  }

  public async putPosts(req: Request, res: Response): Promise<void> {

    const { cedulaUser } = req.body;

    const post = await Post.findOneAndUpdate({cedulaUser}, req.body);

    res.json({status: res.status, data: post});
  }

  public async deletePosts(req: Request, res: Response): Promise<void> {
    const { cedulaUser} = req.body;
    const post = await Post.findOneAndRemove({cedulaUser});
    res.json({status: res.status, data: post});
  }


  routes() {
    this.router.get("/", this.getPosts);
    this.router.post("/", this.postPosts);
    this.router.put("/", this.putPosts);
    this.router.delete("/", this.deletePosts);
  }
}

const postRoutes = new postsRoutes();

export default postRoutes.router;
