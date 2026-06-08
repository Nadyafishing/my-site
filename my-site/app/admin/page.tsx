"use client";

import { useState } from "react";

export default function AdminPage() {
    const [password, setPassword] =
      useState("");

    const [authorized, setAuthorized] =
      useState(false);

    const [title, setTitle] = useState("");
    const [excerpt, setExcerpt] = useState("");

    const [place, setPlace] = useState("");
    const [fish, setFish] = useState("");
    const [rod, setRod] = useState("Спиннинг");
    const [lure, setLure] = useState("");
    const [weather, setWeather] = useState("");
    const [result, setResult] = useState("");

    const [shortHook, setShortHook] = useState("");
    const [socialCaption, setSocialCaption] = useState("");

    const [image, setImage] = useState("");
    const [video, setVideo] = useState("");

    const [tags, setTags] = useState("");
    const [content, setContent] = useState("");

    const [date, setDate] = useState(
        new Date().toISOString().slice(0, 10)
    );

    const [isPublishing, setIsPublishing] =
      useState(false);

    const [postCreated, setPostCreated] =
      useState(false);

    const login = async () => {
      const response = await fetch(
        "/api/admin-login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            password,
          }),
        }
      );

      const result =
        await response.json();

      if (result.success) {
        setAuthorized(true);
      } else {
        alert("Неверный пароль");
      }
    };

    function translit(text: string) {
      const map: Record<string, string> = {
        а: "a", б: "b", в: "v", г: "g", д: "d",
        е: "e", ё: "e", ж: "zh", з: "z", и: "i",
        й: "y", к: "k", л: "l", м: "m", н: "n",
        о: "o", п: "p", р: "r", с: "s", т: "t",
        у: "u", ф: "f", х: "h", ц: "ts", ч: "ch",
        ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "",
        э: "e", ю: "yu", я: "ya",
      };

      return text
        .toLowerCase()
        .split("")
        .map((char) => map[char] ?? char)
        .join("");
    }

    const slug = translit(title)
      .replace(/[^a-z0-9\s]/gi, "")
      .replace(/\s+/g, "_")
    ;

    const fileName =
      date.replaceAll("-", "_") +
      (slug ? `_${slug}` : "") +
      ".md"
    ;

    const postUrl =
      `${process.env.NEXT_PUBLIC_SITE_URL}/posts/${fileName.replace(".md", "")}`
    ;

    const hashtags = tags
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean)
      .map((tag) =>
        "#" +
        tag
          .toLowerCase()
          .replace(/\s+/g, "")
      )
      .join(" ")
    ;

    const telegramPost = `🎣 ${shortHook}

${socialCaption}

${hashtags} #рыбалка

Читать полностью:
${postUrl}`
    ;

    const shortVideoPost = `${shortHook}

${hashtags} #рыбалка`
    ;

    const copyMarkdown = async () => {
        await navigator.clipboard.writeText(markdown);

        alert("Markdown скопирован!");
    };

    const publishToTelegram = async () => {
      const confirmed = confirm(
        "Опубликовать отчёт в Telegram?"
      );

      const imageUrl =
        image
          ? `${process.env.NEXT_PUBLIC_SITE_URL}${image}`
          : "";

      if (!confirmed) return;

      try {
        setIsPublishing(true);

        const response = await fetch(
          "/api/telegram",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: imageUrl,
              title,
              shortHook,
              socialCaption,
              url: postUrl,
              hashtags,
            }),
          }
        );

        const text = await response.text();

        console.log(text);

        const result = text
          ? JSON.parse(text)
          : {};

        if (result.ok) {
          alert("Опубликовано!");
        } else {
          alert("Ошибка публикации");
          console.log(result);
        }
      } catch (error) {
        console.error(error);

        alert("Ошибка публикации");
      } finally {
        setIsPublishing(false);
      }
    };

const markdown = `---
title: "${title}"
date: "${date}"
category: "fishing"

excerpt: "${excerpt}"

image: "${image}"
video: "${video}"

tags:
${tags
  .split(",")
  .map((tag) => `  - ${tag.trim()}`)
  .join("\n")}

shortHook: "${shortHook}"
socialCaption: "${socialCaption}"

place: "${place}"
fish: "${fish}"
rod: "${rod}"
lure: "${lure}"
weather: "${weather}"
result: "${result}"
---

# ${title}

${content}
`;

if (!authorized) {
  return (
    <main className="max-w-md mx-auto p-8">

      <h1 className="text-3xl font-bold mb-6">
        Вход
      </h1>

      <input
        type="password"
        className="
          w-full
          border
          p-3
          rounded
          mb-4
        "
        placeholder="Пароль"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button
        onClick={login}
        className="
          px-6
          py-3
          rounded-xl
          bg-blue-600
          text-white
        "
      >
        Войти
      </button>

    </main>
  );
}

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">
        Новый отчёт
      </h1>

      <div className="space-y-4">

        <input
          className="w-full border p-3 rounded"
          placeholder="Заголовок"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
            type="date"
            className="w-full border p-3 rounded"
              value={date}
            onChange={(e) => setDate(e.target.value)}
        />

        <div className="p-3 rounded bg-slate-100">
          <p className="text-sm text-gray-500">
            Имя файла
          </p>

          <p className="font-mono font-semibold">
            {fileName}
          </p>
        </div>

        <div className="p-3 rounded bg-slate-100 mt-3">
          <p className="text-sm text-gray-500">
            URL
          </p>

          <p className="font-mono">
            /posts/{fileName.replace(".md", "")}
          </p>
        </div>

        <label className="flex items-center gap-3 mt-4">

          <input
            type="checkbox"
            checked={postCreated}
            onChange={(e) =>
              setPostCreated(e.target.checked)
            }
          />

          <span>
            Пост создан на сайте и ссылка работает
          </span>

        </label>

        <input
          className="w-full border p-3 rounded"
          placeholder="Краткое описание"
          value={excerpt}
          onChange={(e) =>
            setExcerpt(e.target.value)
          }
        />

        <input
          className="w-full border p-3 rounded"
          placeholder="Теги через запятую"
          value={tags}
          onChange={(e) =>
            setTags(e.target.value)
          }
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Фото (/images/...)"
            value={image}
            onChange={(e) => setImage(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Видео (/videos/... или YouTube)"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Место ловли"
            value={place}
            onChange={(e) => setPlace(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Рыба"
            value={fish}
            onChange={(e) => setFish(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Приманка"
            value={lure}
            onChange={(e) => setLure(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Погода"
            value={weather}
            onChange={(e) => setWeather(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Результат"
            value={result}
            onChange={(e) => setResult(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Крючок для соцсетей (shortHook)"
            value={shortHook}
            onChange={(e) => setShortHook(e.target.value)}
        />

        <input
            className="w-full border p-3 rounded"
            placeholder="Подпись для соцсетей"
            value={socialCaption}
            onChange={(e) => setSocialCaption(e.target.value)}
        />

        <textarea
          className="w-full border p-3 rounded h-64"
          placeholder="Текст отчёта"
          value={content}
          onChange={(e) =>
            setContent(e.target.value)
          }
        />

        <button
            onClick={copyMarkdown}
            className="
                px-6
                py-3
                rounded-xl
                bg-blue-600
                text-white
                hover:bg-blue-700
                transition
            "
            >
          📋 Скопировать markdown
        </button>

        <button
          onClick={publishToTelegram}
          disabled={!postCreated || isPublishing}
          className="
            px-6
            py-3
            rounded-xl
            text-white
            transition
            ml-4
            disabled:bg-gray-400
            bg-green-600
            hover:bg-green-700
            "
        >
          {isPublishing
            ? "Отправка..."
            : "📢 Опубликовать в Telegram"}
        </button>

        <h2 className="text-2xl font-bold">
          Markdown
        </h2>

        <textarea
          readOnly
          className="w-full border p-3 rounded h-96 font-mono"
          value={markdown}
        />

        <h2 className="text-2xl font-bold mt-12">
          Telegram
        </h2>

        <textarea
          readOnly
          className="w-full border p-3 rounded h-40"
          value={telegramPost}
        />

        <h2 className="text-2xl font-bold mt-12">
          Shorts / Reels / Клипы
        </h2>

        <textarea
          readOnly
          className="w-full border p-3 rounded h-32"
          value={shortVideoPost}
        />

        <h2 className="text-2xl font-bold mt-12">
          👀 Карточка на сайте
        </h2>

        <div className="border rounded-2xl p-6 shadow-sm bg-white">

          {image && (
            <div className="mb-4">
              <img
                src={image}
                alt={title}
                className="w-full rounded-xl max-h-64 object-cover"
              />
            </div>
          )}

          <h3 className="text-2xl font-bold mb-2">
            {title || "Заголовок"}
          </h3>

          <p className="text-gray-500 text-sm mb-4">
            {date}
          </p>

          <p className="text-gray-700 mb-4">
            {excerpt || "Описание отчёта"}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags
              .split(",")
              .map((tag) => tag.trim())
              .filter(Boolean)
              .map((tag) => (
                <span
                  key={tag}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-slate-100
                    text-sm
                  "
                >
                  #{tag}
                </span>
              ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-12">
          👀 Telegram
        </h2>

        <div
          className="
            border
            rounded-2xl
            p-6
            bg-slate-50
            whitespace-pre-wrap
          "
        >
          🎣 {shortHook}

          {"\n\n"}
  
          {socialCaption}

          {"\n\n"}

          {hashtags} #рыбалка

          {"\n\n"}

          Читать полностью:

          {"\n"}

          {postUrl}
        </div>

      </div>
    </main>
  );
}