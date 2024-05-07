import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function BlogSkeleton() {
  return (
    <div className="p-2">
      <Card>
        <CardHeader className="flex h-full min-h-[21rem] w-[14rem] flex-col gap-2 sm:min-h-[26rem] sm:w-[18rem]">
          <div className="overflow-hidden">
            <div className="h-44 w-full animate-pulse bg-gray-300 sm:h-52 sm:h-[180px]"></div>
          </div>
          <CardTitle className="h-6 w-full animate-pulse bg-gray-300" />
          <CardDescription className="!mt-auto flex flex-col gap-2">
            <span className="h-4 w-24 animate-pulse bg-gray-300 text-base" />
            <span className="h-3 w-24 animate-pulse bg-gray-300 text-base" />
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
