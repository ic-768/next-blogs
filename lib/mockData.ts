import { Author, Blog } from "./definitions";

export const authorData: Author[] = [
  {
    id: "0",
    name: "Thelma Jacobson",
    image:
      "https://picsum.photos/id/64/4326/2884.jpg?hmac=9_SzX666YRpR_fOyYStXpfSiJ_edO3ghlSRnH2w09Kg",
    subtitle: "Journalist and Fiction Writer",
    description:
      "I'm a versatile writer who delves into both journalism and fiction writing. With a keen eye for detail and a vivid imagination, I bring stories to life, capturing the essence of diverse cultures and human experiences.",
  },
  {
    id: "1",
    image:
      "https://picsum.photos/id/349/3264/2176.jpg?hmac=WNt0QoaZyFRaiL5yitDV4LOXzdHV5Z9tHUxbc6KdBSY",
    name: "Guillermo Jast",
    subtitle: "Entrepreneur and Nonfiction Author",
    description:
      "I'm an entrepreneur and nonfiction author, passionate about sharing insights and strategies for personal and professional growth. Drawing from my own experiences and research, I aim to empower others to achieve their goals and navigate the complexities of modern life.",
  },
];

export const blogData: Blog[] = [
  {
    id: "1e2394fc-6edd-4d62-ac18-7d456a4aec85",
    author: { name: "Thelma Jacobson", id: "0" },
    sections: [
      {
        title: "Introduction: Embracing the Kitchen",
        content:
          "The kitchen is not just a room—it's a place where magic happens, where ingredients transform into delectable delights, and where memories are made. Whether you're a complete novice or an experienced home cook, there's always something new to learn and explore in the world of cooking.",
      },
      {
        title: "Setting the Stage",
        content:
          "Before we dive into the culinary abyss, let's take a moment to set the stage. Stock your pantry with essentials like olive oil, spices, and grains. Equip yourself with the necessary tools—a sharp knife, sturdy cutting boards, and quality cookware. With these basics in place, you're ready to unleash your inner chef.",
      },
      {
        title: "Mastering the Fundamentals",
        content:
          "Cooking is like any other skill—it requires practice, patience, and a willingness to learn. Start by mastering the fundamental techniques: chopping, sautéing, simmering, and baking. Practice these skills with simple recipes like omelets, soups, and roasted vegetables until they become second nature.",
      },
      {
        title: "Exploring Flavorful Horizons",
        content:
          "One of the most exciting aspects of cooking is exploring the vast world of flavors. From the spicy heat of Thai curry to the comforting warmth of Italian pasta, there's a whole universe of taste sensations waiting to be discovered. Experiment with herbs, spices, and ingredients from different cuisines to create dishes that are uniquely your own.",
      },
      {
        title: "Honoring Freshness and Seasonality",
        content:
          "In the age of convenience, it's easy to forget the importance of fresh, seasonal ingredients. But there's something truly magical about cooking with produce that's ripe, vibrant, and bursting with flavor. Visit your local farmers' market or join a community-supported agriculture program to connect with the source of your food and support local growers.",
      },
      {
        title: "Sharing the Love",
        content:
          "Cooking is about more than just feeding yourself—it's about nourishing your soul and sharing the love with others. Invite friends and family to join you in the kitchen, and revel in the joy of preparing a meal together. Whether it's a cozy dinner party or a backyard barbecue, the act of sharing food creates bonds that last a lifetime.",
      },
      {
        title: "The End",
        content:
          "As we reach the end of our culinary odyssey, remember that the journey is just beginning. There are endless recipes to try, techniques to master, and flavors to savor. So, don your apron, sharpen your knives, and let the adventure unfold. Happy cooking!",
      },
    ],
    title: "Unveiling Culinary Delights: A Beginner's Odyssey in the Kitchen",
    date: new Date("2022-11-22T03:29:50.659Z"),
    image: "https://picsum.photos/seed/FaNSsy/640/480",
  },
  {
    id: "0ad0d868-1545-4ea1-b754-51231dc1f6bf",
    author: { name: "Guillermo Jast", id: "1" },
    sections: [
      {
        title: "Introduction: Embracing Photography",
        content:
          "Photography is not just about taking pictures—it's about capturing moments, telling stories, and preserving memories. Whether you're a professional photographer or an amateur enthusiast, the world of photography offers endless opportunities for creativity and self-expression.",
      },
      {
        title: "Understanding the Basics",
        content:
          "Before you can master the art of photography, it's essential to understand the basics. Learn about composition, lighting, and exposure. Experiment with different camera settings and techniques to see how they affect your photos. With a solid foundation in place, you'll be ready to take your photography to the next level.",
      },
      {
        title: "Exploring Different Styles",
        content:
          "Photography is a diverse art form with many different styles and genres. From landscape photography to portrait photography, street photography to wildlife photography, there's something for everyone to explore. Find the styles that resonate with you and experiment with different techniques to develop your own unique voice.",
      },
      {
        title: "Mastering the Tools",
        content:
          "In the digital age, photographers have a wealth of tools at their disposal. From DSLR cameras to smartphone cameras, photo editing software to online sharing platforms, the possibilities are endless. Take the time to familiarize yourself with your equipment and software, and don't be afraid to try new things.",
      },
      {
        title: "Finding Inspiration",
        content:
          "Inspiration can come from anywhere and everywhere. Keep your eyes open for interesting scenes, unique perspectives, and fleeting moments. Study the work of other photographers, both past and present, and let their creativity inspire your own. The more you immerse yourself in the world of photography, the more inspiration you'll find.",
      },
      {
        title: "Telling Stories Through Images",
        content:
          "Photography has the power to evoke emotions, spark imagination, and tell stories without words. Use your camera to capture the essence of a moment, the beauty of a landscape, or the character of a person. Pay attention to details, composition, and lighting to convey the mood and message of your images.",
      },
      {
        title: "The Journey Continues",
        content:
          "As you continue on your photographic journey, remember that there's always more to learn and explore. Don't be afraid to push yourself out of your comfort zone, try new techniques, and experiment with different styles. The world is full of beauty and wonder, waiting to be captured through your lens. Happy shooting!",
      },
    ],
    title: "Capturing Moments in Time",
    date: new Date("2022-05-25T19:53:35.246Z"),
    image: "https://picsum.photos/seed/NubcH/640/480",
  },
];
