export type Blog = {
  author: { name: string; id: string };
  sections: { title: string; content: string }[];
  title: string;
  date: Date;
  image: string;
  id: string;
};

export type Author = {
  id: string;
  name: string;
  image: string;
  subtitle: string;
  description: string;
};
