"use server";

import { revalidatePath } from "next/cache";

import { blogData, dummyPost } from "./mockData";

export const addPost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const newPost = {
    ...dummyPost,
    title,
    id: String(blogData.length), // this would cause an issue if this was a real app
    image: `${dummyPost.image}?t=${Date.now()}`, // to stop cache getting the same image
  };

  newPost.sections[0].content = content;
  blogData.push(newPost);
  revalidatePath("/dashboard");
  await new Promise((resolve) => setTimeout(resolve, 3000));
};
