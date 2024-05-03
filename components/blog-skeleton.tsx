import clsx from "clsx";

import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function BlogSkeleton() {
  const classes = clsx("w-[18rem]");

  return (
    <div className="p-2">
      <Card className={classes}>
        <CardHeader className="flex h-full min-h-[297px] w-[18rem] flex-col gap-2">
          <div className="overflow-hidden">
            <div className="h-[156px] w-[208px] animate-pulse bg-gray-300"></div>
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
