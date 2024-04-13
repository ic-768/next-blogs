import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const data = ["safsadf", "aafsfadfasf", "fasfasfasfasdf"];
export default function Home() {
  return (
    <div className="flex gap-2">
      {data.map((d) => (
        <Card key={d} className="w-[350px]">
          <CardHeader>
            <CardTitle>{d}</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div>SAfdsfasjflk1!</div>
          </CardContent>
          <CardFooter className="flex justify-between"></CardFooter>
        </Card>
      ))}
    </div>
  );
}
