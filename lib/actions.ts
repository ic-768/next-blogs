"use server";

import { revalidatePath, unstable_noStore } from "next/cache";
import { redirect } from "next/navigation";

import { blogData, dummyPost } from "./mockData";

export const addPost = async (formData: FormData) => {
  // Add noStore() here to prevent the response from being cached.
  // This is equivalent to in fetch(..., {cache: 'no-store'}).
  unstable_noStore();
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
  await new Promise((resolve) => setTimeout(resolve, 3000));
  revalidatePath("/dashboard");
  redirect("/dashboard");
};
