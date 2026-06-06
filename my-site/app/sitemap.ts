import { getAllPosts } from "@/lib/posts";

export default function sitemap() {
  const posts = getAllPosts();

  return [
    {
      url: "https://example.ru",
    },

    {
      url: "https://example.ru/about",
    },

    {
      url: "https://example.ru/personal",
    },

    {
      url: "https://example.ru/fishing",
    },

    ...posts.map((post) => ({
      url: `https://example.ru/posts/${post.slug}`,
    })),
  ];
}