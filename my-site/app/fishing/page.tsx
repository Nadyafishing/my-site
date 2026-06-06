import { Metadata } from "next";
import PostCard from "@/components/PostCard";
import { getPostsByCategory } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Рыбалка на Черном море и горных реках",

  description:
    "Отчёты о рыбалке на Черном море и горных реках Кавказа. Форель, голавль, ставрида, сарган, приманки и личный опыт спиннингиста.",
};

export default function FishingPage() {
  const posts = getPostsByCategory("fishing");

  return (
    <main>
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold mb-10">
          Рыбалка
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
              tags={post.tags}
            />
          ))}
        </div>
      </section>
    </main>
  );
}