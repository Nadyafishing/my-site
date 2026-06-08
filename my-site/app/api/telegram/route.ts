import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  const {
    image,
    shortHook,
    socialCaption,
    url,
    hashtags,
  } = await request.json();

  const token =
    process.env.TELEGRAM_BOT_TOKEN;

  const channel =
    process.env.TELEGRAM_CHANNEL_TEST;

  const caption = `🎣 ${shortHook}

${socialCaption}

${hashtags} #рыбалка

Читать полностью:
${url}`;

  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendPhoto`,
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify({
        chat_id: channel,
        photo: image,
        caption,
      }),
    }
  );

  const result =
    await response.json();

  return NextResponse.json(result);
}