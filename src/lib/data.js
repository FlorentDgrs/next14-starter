//TEMPORARY DATA
// const users = [
//   { id: 1, username: "John" },
//   { id: 2, username: "Jane" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: ".....", userId: 1 },
//   { id: 2, title: "Post 2", body: ".....", userId: 1 },
//   { id: 3, title: "Post 3", body: ".....", userId: 2 },
// ];
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDb();
    const post = await Post.find({ slug });

    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Post!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDb();
    const user = await User.findById(id);

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch User!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();

    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
