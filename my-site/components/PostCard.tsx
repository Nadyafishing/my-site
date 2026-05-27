import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

export default function PostCard({ slug, title, date, content }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition">
          {title}
        </h2>
      </Link>

      <p className="text-gray-500 text-sm mb-4">{date}</p>

      <p className="text-gray-700 leading-relaxed">
        {content.slice(0, 120)}...
      </p>
    </article>
  );
}