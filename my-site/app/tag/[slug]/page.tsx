import { Metadata } from "next";
import { tagTitles } from "@/data/tagTitles";
import PostCard from "@/components/PostCard";
import { getPostsByTag } from "@/lib/posts";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {

  const { slug } = await params;

  const tag = decodeURIComponent(slug);

  const seoTitle =
    tagTitles[tag] ||
    `${tag} — отчёты о рыбалке`;

  return {
    title: `${seoTitle} | Надя Черная`,

    description:
      `Все записи по теме "${tag}".`,
  };
}

export default async function TagPage({
  params,
}: Props) {
  const { slug } = await params;

  const tag = decodeURIComponent(slug);

  const posts = getPostsByTag(tag);

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold mb-10">
        #{tag}
      </h1>

      <p className="text-gray-500 mb-8">
        Найдено записей: {posts.length}
      </p>

      {posts.length === 0 && (
        <p className="text-gray-500">
          По этому тегу пока нет записей.
        </p>
      )}

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
    </main>
  );
}