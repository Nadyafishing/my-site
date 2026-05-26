import { postsData } from "@/data/posts"; // Тот же импорт

export default function Home() {
  const posts = Object.values(postsData); // Превращаем объект в массив для удобства

  return (
    <main style={{ maxWidth: "600px", margin: "40px auto", padding: "0 20px" }}>
      <h1>Блог Нади</h1>
      <p style={{ color: "#555" }}>Добро пожаловать! Здесь я пишу о своём пути в IT, книгах и рыбалке.</p>
      <hr style={{ margin: "30px 0" }} />
      <h2>Мои посты</h2>
      {posts.map((post) => (
        <article key={post.slug} style={{ marginBottom: "30px" }}>
          <a href={`/posts/${post.slug}`} style={{ fontSize: "1.2em", fontWeight: "bold", textDecoration: "none" }}>
            {post.title}
          </a>
          <p style={{ color: "#888", fontSize: "0.9em", margin: "5px 0" }}>{post.date}</p>
          <p>{post.content.slice(0, 100)}...</p> {/* Показываем только начало */}
        </article>
      ))}
    </main>
  );
}