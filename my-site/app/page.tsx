import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";

import { getAllPosts } from "@/lib/posts";
import FishingTopics from "@/components/FishingTopics";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Надя Черная — рыбалка, путешествия и личные заметки",

  description:
    "Отчёты о рыбалке на Черном море и горных реках Кавказа. Форель, голавль, морская рыба, путешествия и немного личного.",
};

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
          Последние рыбалки
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {fishingPosts.slice(0, 6).map((post) => (
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

        <div className="mt-8 mb-20">
          <Link
            href="/fishing"
            className="
              inline-flex
              items-center
              gap-2
              text-lg
              font-medium
              hover:underline
            "
          >
            → Все рыбалки
          </Link>
        </div>

        <h2 className="text-3xl font-semibold mb-10">
          Из личного
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {personalPosts.slice(0, 1).map((post) => (
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

        <div className="mt-8">
          <Link
            href="/personal"
            className="
              inline-flex
              items-center
              gap-2
              text-lg
              font-medium
              hover:underline
            "
          >
            → Все личные записи
          </Link>
        </div>

      </section>

      <FishingTopics />

    </main>
  );
}
