"use client";

import { useState } from "react";
import PostCard from "@/components/PostCard";

type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;

  tags?: string[];

  fish?: string;
  place?: string;
};

export default function SearchPosts({
  posts,
}: {
  posts: Post[];
}) {
  const [query, setQuery] = useState("");

  const popularTags = [
    "форель",
    "голавль",
    "спиннинг",
    "Черное море",
    "горная река",
  ];

  const clearFilter = () => {
    setQuery("");
  };

  const filteredPosts = posts.filter((post) => {
    const searchText = [
      post.title,
      post.excerpt,
      post.place,
      post.fish,
      ...(post.tags || []),
    ]
      .join(" ")
      .toLowerCase();

    return searchText.includes(
      query.toLowerCase()
    );
  });

  return (
    <>
      <input
        type="text"
        placeholder="Поиск по сайту..."
        value={query}
        onChange={(e) =>
          setQuery(e.target.value)
        }
        className="w-full border rounded-xl p-4 mb-8"
      />

      <h2 className="text-lg font-semibold mb-4">
        Популярные темы
      </h2>

      <div className="flex flex-wrap gap-3 mb-8">
        {popularTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setQuery(tag)}
            className="
              px-4 py-2
              rounded-full
              border
              bg-white
              hover:bg-gray-50
              transition
              text-sm
            "
          >
            {tag}
          </button>
        ))}
      </div>

      <button
        onClick={clearFilter}
        className="
          mb-8
          text-sm
          text-blue-600
          hover:underline
        "
      >
        Показать все записи
      </button>

      {query && (
        <p className="mb-6 text-gray-600">
          Фильтр: <strong>{query}</strong>
        </p>
      )}

      {filteredPosts.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          Ничего не найдено 😔
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
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
      )}
    </>
  );
}