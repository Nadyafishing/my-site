import SearchPosts from "@/components/SearchPosts";
import { getAllPosts } from "@/lib/posts";

export default function SearchPage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-4">
        Поиск по сайту
      </h1>

      <p className="text-gray-500 mb-10">
        Ищите статьи по рыбалке, путешествиям, книгам и личным заметкам.
      </p>

      <SearchPosts posts={posts} />
    </main>
  );
}