"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { blogData, dummyPost } from "./mockData";

export const addPost = async (formData: FormData) => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;

  const newPost = { ...dummyPost, title };
  newPost.sections[0].content = content;

  blogData.push(newPost);
  await new Promise((resolve) => setTimeout(resolve, 2000));

  revalidatePath("/dashboard");

  redirect("/dashboard");
};
