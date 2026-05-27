// data/posts.ts

export type Post = {
  //slug: string;
  title: string;
  date: string;
  content: string;
};

export const postsData: Record<string, Post> = {
  "kak-ya-nachala-put": {
    //slug: "kak-ya-nachala-put",
    title: "Как я начала свой путь в IT",
    date: "2026-05-20",
    content: "Полный текст моего первого поста. Здесь я рассказываю о том, как решила сменить профессию.",
  },
  "luchshie-knigi-vesny": {
    //slug: "luchshie-knigi-vesny",
    title: "Лучшие книги этой весны",
    date: "2026-05-18",
    content: "Список лучших книг, которые я прочитала этой весной.",
  },
  "rybalka-na-ozere": {
    //slug: "rybalka-na-ozere",
    title: "Рыбалка на лесном озере",
    date: "2026-05-15",
    content: "Неделя тишины и клёва. Рассказ о поездке на озеро.",
  },
};