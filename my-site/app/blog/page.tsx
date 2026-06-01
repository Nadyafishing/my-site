import PostCard from "@/components/PostCard";
import { getAllPosts } from "@/lib/posts";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-10">
          Блог
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}