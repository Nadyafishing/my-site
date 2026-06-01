import { getPostBySlug } from "@/lib/posts";
import { remark } from "remark";
import html from "remark-html";
import Link from "next/link";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;

  const post = getPostBySlug(slug);

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
          href="/blog"
          className="text-blue-600 hover:underline"
        >
          ← Назад к блогу
        </Link>
        <h1>{post.title}</h1>

        <p style={{ color: "#777" }}>{post.date}</p>

        <hr style={{ margin: "20px 0" }} />

        <div
          dangerouslySetInnerHTML={{ __html: contentHtml }}
          style={{
            lineHeight: "1.8",
            fontSize: "18px",
          }}
        />
        <hr style={{ margin: "40px 0" }} />

        <hr style={{ margin: "40px 0" }} />

        <div className="flex gap-6">
        <Link
          href="/"
          className="text-blue-600 hover:underline"
        >
          ← На главную
        </Link>

        <Link
          href="/blog"
          className="text-blue-600 hover:underline"
        >
          К блогу →
        </Link>
      </div>

      </article>
    </main>
  );
}