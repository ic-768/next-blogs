"use server";

import { revalidatePath } from "next/cache";

import { blogData, newPost } from "./mockData";

export const addPost = async () => {
  blogData.push(newPost);
  revalidatePath("/dashboard");
};
