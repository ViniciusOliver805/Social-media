import { prisma } from "../services/prisma";

//Criar posts - repository
export const createPosts = async (data) => {
  const posts = await prisma.posts.create({
    data,
    select: {
      id: true,
      conteudo: true,
      data_criacao_post: true,
      authorId: true,
    },
  });
  return posts;
};

//GetAll - repository
export const getAll = async () => {
  const posts = await prisma.posts.findMany({
    select: {
      id: true,
      conteudo: true,
      data_criacao_post: true,
      authorId: true,
    },
  });
  return posts;
};

//GetById - repository
export const getById = async (id) => {
  const posts = await prisma.posts.findUnique({
    where:{
      id
    }
  })
  return posts;
}

//Update posts - repository
export const updatePosts = async (id, data) => {
  const posts = await prisma.posts.update({
    where: {
      id,
    },
    data

  })
  return posts;
}

//Delete posts - repository
export const deletePosts = async (id) => {
  await prisma.posts.delete({
    where: {
      id,
    }
  })
  return
}