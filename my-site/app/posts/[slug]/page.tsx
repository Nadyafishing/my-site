import { Metadata } from "next";
import {
  getPostBySlug,
  getRelatedPosts,
} from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";
import Image from "next/image";
import PostCard from "@/components/PostCard";

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  return {
    title: post.title,
    description: post.excerpt,

    openGraph: {
      title: post.title,
      description: post.excerpt,

      images: post.image
        ? [
            {
              url: post.image,
            },
          ]
        : [
            {
              url: "/images/og-cover.jpg",
            },
          ],
    },
  };
  }

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

  const relatedPosts = getRelatedPosts(
    post.category,
    post.slug
  );

  const backLink =
    post.category === "fishing"
      ? "/"
      : "/personal";

  const backText =
    post.category === "fishing"
      ? "← На главную"
      : "← К разделу «Личное»";

  const processedContent = await remark()
    .use(html)
    .process(post.content);

  const contentHtml = processedContent.toString();

  return (
    <main
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "0 20px",
      }}
    >
      <article>
        <Link
          href={backLink}
          className="inline-block px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {backText}
        </Link>

        <h1 className="text-5xl font-bold mb-4">
          {post.title}
        </h1>

        <p className="text-gray-500 mb-8">
          {post.date}
        </p>

        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={1200}
            height={700}
            className="w-full rounded-2xl my-8"
          />
        )}

        {post.category === "fishing" && (
          <div className="bg-gray-50 rounded-2xl p-6 my-8 border">
            <div className="grid gap-3 sm:grid-cols-2">

              {post.place && (
                <div>
                  <span className="font-semibold">📍 Место:</span> {post.place}
                </div>
              )}

              {post.fish && (
                <div>
                  <span className="font-semibold">🐟 Рыба:</span> {post.fish}
                </div>
              )}

              {post.rod && (
                <div>
                  <span className="font-semibold">🎣 Снасть:</span> {post.rod}
                </div>
              )}

              {post.lure && (
                <div>
                  <span className="font-semibold">🪝 Приманка:</span> {post.lure}
                </div>
              )}

              {post.weather && (
                <div>
                  <span className="font-semibold">☁️ Погода:</span> {post.weather}
                </div>
              )}

              {post.result && (
                <div>
                  <span className="font-semibold">🏆 Результат:</span> {post.result}
                </div>
              )}

            </div>
          </div>
        )}

        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-3 my-8">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/tag/${tag}`}
                className="
                  px-3 py-1
                  rounded-full
                  bg-blue-50
                  hover:bg-blue-100
                  text-sm
                  transition
                "
                >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        <hr style={{ margin: "20px 0" }} />

        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          className="prose prose-lg max-w-none"
        />

        <hr style={{ margin: "40px 0" }} />

        <div className="flex gap-6">

        <Link
          href={backLink}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {backText}
        </Link>

        </div>

        {relatedPosts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-6">
              Похожие записи
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {relatedPosts.map((related) => (
                <PostCard
                  key={related.slug}
                  slug={related.slug}
                  title={related.title}
                  date={related.date}
                  excerpt={related.excerpt}
                  image={related.image}
                  //tags={related.tags}
                  />
              ))}
            </div>
          </section>
        )}

      </article>
    </main>
  );
}