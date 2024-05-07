import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { addPost } from "@/lib/actions";

export default function CreateBlog() {
  return (
    <form action={addPost} className="flex flex-col gap-8">
      <div className="flex w-full flex-col items-center gap-4">
        <h2 className="text-nowrap">My new blog, titled:</h2>
        <Textarea name="title" className="w-full text-3xl font-semibold" />
      </div>

      <Textarea name="content" rows={20} />
      <Button className="self-center">Submit</Button>
    </form>
  );
}
