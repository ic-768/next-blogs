import WithUnderline from "./ui/with-underline";

interface AnimatedAttributionProps {
  href: string;
  name: string;
}
export default function AnimatedAttribution({
  href,
  name,
}: AnimatedAttributionProps) {
  return (
    <span className="flex gap-1">
      <span>by</span>
      <WithUnderline text={name} href={href} />
    </span>
  );
}
