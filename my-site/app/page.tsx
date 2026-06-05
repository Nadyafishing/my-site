import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";

import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  const fishingPosts = posts.filter(
    (post) => post.category === "fishing"
  );

  const personalPosts = posts.filter(
    (post) => post.category === "personal"
  );

  return (
    <main>
      

      <Hero />

      <section className="max-w-5xl mx-auto px-4 py-16">

        <h2 className="text-4xl font-bold mb-10">
          Рыбалка
        </h2>

        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {fishingPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
              tags={post.tags}
            />
          ))}
        </div>

        <h2 className="text-4xl font-bold mb-10">
          Личное
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {personalPosts.map((post) => (
            <PostCard
              key={post.slug}
              slug={post.slug}
              title={post.title}
              date={post.date}
              excerpt={post.excerpt}
              image={post.image}
              tags={post.tags}
            />
          ))}
        </div>

      </section>
    </main>
  );
}
