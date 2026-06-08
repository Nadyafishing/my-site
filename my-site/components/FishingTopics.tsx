import Link from "next/link";

import { getAllTags } from "@/lib/posts";

import {
  fishTags,
  locationTags,
  monthTags,
  lureTags,
  styleTags,
} from "@/data/fishingTags";

export default function FishingTopics() {
  const allTags = getAllTags();

  const fishes = fishTags.filter((tag) =>
    allTags.includes(tag)
  );

  const places = locationTags.filter((tag) =>
    allTags.includes(tag)
  );

  const seasons = monthTags.filter((tag) =>
    allTags.includes(tag)
  );

  const technique = styleTags.filter((tag) =>
    allTags.includes(tag)
  );

  const lures = lureTags.filter((tag) =>
    allTags.includes(tag)
  );

  const renderTags = (tags: string[]) =>
    tags.map((tag) => (
      <Link
        key={tag}
        href={`/tag/${encodeURIComponent(tag)}`}
        className="
          px-4 py-2
          rounded-full
          bg-slate-100
          hover:bg-slate-200
          transition
        "
      >
        #{tag}
      </Link>
    ));

  return (
    <section className="max-w-5xl mx-auto px-4 py-16 border-t">
      <h2 className="text-3xl font-bold mb-8">
        🎣 Что вас интересует?
      </h2>

      <div className="space-y-4">

        {fishes.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              🐟 Рыба
            </h3>

            <div className="flex flex-wrap gap-3">
              {renderTags(fishes)}
            </div>
          </div>
        )}

        {places.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              📍 Место
            </h3>

            <div className="flex flex-wrap gap-3">
              {renderTags(places)}
            </div>
          </div>
        )}

        {technique.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              🎣 Стиль ловли
            </h3>

            <div className="flex flex-wrap gap-3">
              {renderTags(technique)}
            </div>
          </div>
        )}

        {lures.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              🪝 Приманки
            </h3>

            <div className="flex flex-wrap gap-3">
              {renderTags(lures)}
            </div>
          </div>
        )}

        {seasons.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">
              🗓 Сезон
            </h3>

            <div className="flex flex-wrap gap-3">
              {renderTags(seasons)}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}