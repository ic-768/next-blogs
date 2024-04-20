import { Blog } from "./definitions";
import { mockData } from "./mockData";

export async function fetchBlogs(): Promise<Blog[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return mockData;
}

export async function fetchBlog(id: string): Promise<Blog | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return mockData.find((b) => b.id === id);
}
