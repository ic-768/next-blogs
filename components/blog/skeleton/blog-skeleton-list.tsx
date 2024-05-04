import BlogSkeleton from "./blog-skeleton";

import { cn } from "@/lib/utils";

type BlogSkeletonListProps = {
  className?: string;
};
export default function BlogSkeletonList({ className }: BlogSkeletonListProps) {
  const skeleton = [1, 2, 3].map((i) => <BlogSkeleton key={i} />);
  const classes = cn("flex flex-wrap", className);

  return <ul className={classes}>{skeleton}</ul>;
}
