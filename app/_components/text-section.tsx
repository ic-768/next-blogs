import TextCard from "./text-card";

import Landing1 from "@/public/landing1.png";
import Landing2 from "@/public/landing2.png";
import Landing3 from "@/public/landing3.png";
import Landing4 from "@/public/landing4.png";
import Landing5 from "@/public/landing5.png";

export default function TextSection() {
  return (
    <div className="grid grid-cols-1 gap-16 pt-8 md:grid-cols-2 lg:grid-cols-3">
      <TextCard title="Empower Your Creativity" image={Landing1}>
        Unlock your potential as a content creator with Next Blogs. Whether
        you're a seasoned blogger or just starting out, our intuitive platform
        provides everything you need to bring your ideas to life. From sleek
        designs to powerful editing tools, Blogify empowers you to express
        yourself with ease.
      </TextCard>
      <TextCard title="Effortless Design" image={Landing2}>
        Say goodbye to complicated coding and design headaches. With Next Blogs,
        crafting a stunning blog is as simple as can be. Captivate your audience
        and enhance your content. Stand out from the crowd with
        professional-looking blogs that reflect your unique style.
      </TextCard>
      <TextCard title="Seamless Publishing" image={Landing3}>
        Ready to share your thoughts with the world? With Next Blogs, publishing
        your content is a breeze. Our streamlined process ensures that your
        posts go live with just a few clicks.Reach your audience whenever and
        wherever they are.
      </TextCard>
      <TextCard title="Community and Support" image={Landing4}>
        Join a thriving community of bloggers who are passionate about sharing
        their stories. Connect with like-minded individuals, exchange ideas, and
        gain valuable insights to help grow your audience.
      </TextCard>
      <TextCard title="Start Your Blogging Journey Today" image={Landing5}>
        Ready to take the first step towards becoming a successful blogger? Sign
        up for Next Blogs now and embark on your blogging journey with
        confidence. Whether you're blogging for fun or aiming to turn your
        passion into a career, Next Blogs is the perfect platform to help you
        achieve your goals.
      </TextCard>
    </div>
  );
}
