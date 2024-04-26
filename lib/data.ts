import { Author, Blog } from "./definitions";
import { authorData, blogData } from "./mockData";

export async function fetchBlogs(): Promise<Blog[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return blogData;
}

export async function fetchBlog(id: string): Promise<Blog | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return blogData.find((b) => b.id === id);
}

export async function fetchAuthor(id: string): Promise<Author | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return authorData.find((a) => a.id === id);
}

export async function fetchBlogsById(id: string): Promise<Blog[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return blogData.filter((b) => b.author.id === id);
}
