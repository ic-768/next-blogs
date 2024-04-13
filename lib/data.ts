import { faker } from "@faker-js/faker";

import { Blog } from "./definitions";
import { mockData } from "./mockData";

export async function fetchBlogs(): Promise<Blog[]> {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return mockData;

  try {
    const data = [1, 2, 3, 4, 5].map(() => ({
      author: faker.person.fullName(),
      blog: faker.lorem.paragraphs({ min: 3, max: 8 }),
      title: faker.lorem.sentence(),
      date: faker.date.past({ years: 2 }),
      image: faker.image.urlPicsumPhotos(),
    }));

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch revenue data.");
  }
}
