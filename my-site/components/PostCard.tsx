import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
};

export default function PostCard({ slug, title, date, excerpt, image }: Props) {
  return (
    <article className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition">
    {image && (
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
    )}
      <Link href={`/posts/${slug}`}>
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition">
          {title}
        </h2>
      </Link>

      <p className="text-gray-500 text-sm mb-4">{date}</p>

      <p className="text-gray-700 leading-relaxed">
        {excerpt}
      </p>
    </article>
  );
}