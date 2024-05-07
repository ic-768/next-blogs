import { addPost } from "@/lib/actions";

import FormContent from "./form-content";

export default function CreateBlog() {
  return (
    <form action={addPost} className="flex flex-col gap-8">
      <FormContent />
    </form>
  );
}
