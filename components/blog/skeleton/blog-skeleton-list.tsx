import { cn } from "@/lib/utils";

import BlogSkeleton from "./blog-skeleton";

type BlogSkeletonListProps = {
  className?: string;
};
export default function BlogSkeletonList({ className }: BlogSkeletonListProps) {
  const skeleton = [1, 2, 3].map((i) => <BlogSkeleton key={i} />);
  const classes = cn("flex flex-wrap justify-center pt-10", className);

  return <ul className={classes}>{skeleton}</ul>;
}
