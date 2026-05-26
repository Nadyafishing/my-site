// app/posts/[slug]/page.tsx

import { postsData } from "@/data/posts";

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = postsData[slug];

  if (!post) {
    return (
      <main style={{ padding: "40px" }}>
        <h1>Пост не найден</h1>
        <a href="/">← Назад</a>
      </main>
    );
  }

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <h1>{post.title}</h1>
      <p style={{ color: "#888" }}>{post.date}</p>
      <hr style={{ margin: "20px 0" }} />
      <p>{post.content}</p>
      <hr style={{ margin: "40px 0" }} />
      <a href="/">← Назад на главную</a>
    </main>
  );
}