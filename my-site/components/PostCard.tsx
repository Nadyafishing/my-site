import Link from "next/link";
import Image from "next/image";

type Props = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  tags?: string[];
};

export default function PostCard({ slug, title, date, excerpt, image, tags }: Props) {
  return (
    <Link href={`/posts/${slug}`} className="block">

    <article className="h-full flex flex-col bg-white rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition cursor-pointer">
    {image && (
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="w-full h-56 object-cover rounded-xl mb-4"
      />
    )}
        <h2 className="text-2xl font-bold mb-2 hover:text-blue-600 transition">
          {title}
        </h2>

      <p className="text-gray-500 text-sm mb-4">{date}</p>

      <div className="flex-grow">
        <p className="text-gray-700 leading-relaxed">
          {excerpt}
        </p>
      </div>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="
                text-xs
                px-3 py-1
                rounded-full
                bg-slate-100
                text-slate-600
                font-medium
              "
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

    </article>
    
    	</Link>
  );
}