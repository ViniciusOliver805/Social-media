import { createPosts, deletePosts, getAll, getById, updatePosts } from "../repository/post.repository";

//Criar post
export const create = async (req, res) => {
  try {
    const posts = await createPosts(req.body);
    res.status(200).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
};

//Get All
export const get = async (req, res) => {
  try {
    const posts = await getAll();
    res.status(200).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
};

//Get by Id
export const getId = async (req, res) => {
  try {
    const posts = await getById(Number(req.params.id))
    res.status(200).send(posts);
  } catch (e) {
    res.status(400).send(e);
  }
}

//Update post
export const update = async (req, res) => {
  try {
    const posts = await updatePosts(Number(req.params.id), req.body);
    res.status(200).send(posts);

  } catch (e) {
    res.status(400).send(e);

  }
}

//Delete post
export const remove = async (req, res) => {
  try {
    await deletePosts(Number(req.params.id));
    res.status(200).send();

  } catch (e) {
    res.status(400).send(e);

  }
}