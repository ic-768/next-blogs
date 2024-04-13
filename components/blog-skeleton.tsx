import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function BlogSkeleton() {
  return (
    <Card className="h-[29rem] w-[27rem]">
      <CardHeader className="h-full">
        <div className="overflow-hidden">
          <div className="h-[250px] w-[350px] animate-pulse bg-gray-300"></div>
        </div>
        <CardTitle className="h-6 w-full animate-pulse bg-gray-300" />
        <CardDescription className="!mt-auto flex flex-col gap-2">
          <span className="h-4 w-24 animate-pulse bg-gray-300 text-base" />
          <span className="h-3 w-24 animate-pulse bg-gray-300 text-base" />
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
