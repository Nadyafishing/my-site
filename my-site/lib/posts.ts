import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

export function getAllPosts() {
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(".md", "");

    const fullPath = path.join(postsDirectory, fileName);

    const fileContents = fs.readFileSync(fullPath, "utf8");

    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as {
        title: string;
        date: string;
        excerpt: string;
        image?: string;
        category: string;

        video?: string;

        tags?: string[];

        shortHook?: string;
        socialCaption?: string;

        place?: string;
        fish?: string;
        rod?: string;
        lure?: string;
        weather?: string;
        result?: string;
      }),
    };
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  return {
    slug,
    content: matterResult.content,
    ...(matterResult.data as {
      title: string;
      date: string;
      excerpt: string;
      image?: string;
      category: string;

      video?: string;

      tags?: string[];

      shortHook?: string;
      socialCaption?: string;

      place?: string;
      fish?: string;
      rod?: string;
      lure?: string;
      weather?: string;
      result?: string;

    }),
  };
}

export function getPostsByCategory(category: string) {
  return getAllPosts().filter(
    (post) => post.category === category
  );
}
export function getRelatedPosts(
  category: string,
  currentSlug: string
) {
  return getAllPosts()
    .filter(
      (post) =>
        post.category === category &&
        post.slug !== currentSlug
    )
    .slice(0, 3);
}

export function getPostsByTag(tag: string) {
  return getAllPosts().filter((post) =>
    post.tags?.some(
      (t) => t.toLowerCase() === tag.toLowerCase()
    )
  );
}

export function getAllFishingTags() {
  const posts = getPostsByCategory("fishing");

  const tags = posts.flatMap(
    (post) => post.tags || []
  );

  return [...new Set(tags)].sort();
}

export function getAllTags() {
  const posts = getAllPosts();

  const tags = posts.flatMap(
    (post) => post.tags || []
  );

  return [...new Set(tags)].sort();
}