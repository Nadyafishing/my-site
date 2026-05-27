import Navbar from "@/components/Navbar";
import PostCard from "@/components/PostCard";

import { postsData } from "@/data/posts";

export default function BlogPage() {
  const posts = Object.entries(postsData).map(([slug, post]) => ({
    slug,
    ...post,
  }));

  return (
    <main>
      

      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-10">Blog</h1>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              content={post.content}
            />
          ))}
        </div>
      </section>
    </main>
  );
}